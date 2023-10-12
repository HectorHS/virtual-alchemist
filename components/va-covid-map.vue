<template>
    <figure>
        <div class="covid-map filters-on-top relative">
            <div class="flex flex-1 flex-col pr-2 text-offWhite max-w-fullitems-center">
                <div class="chart-filters row1 flex flex-col justify-end items-start mb-2 lg:flex-row-reverse lg:items-center lg:justify-center">
                    <div class="dashboard-command left">Select a measure</div>
                </div>
                <div class="chart-filters row2 mb-2 flex flex-col justify-end items-start lg:flex-row-reverse lg:items-center lg:justify-center">
                    <div class="dashboard-command left">Click on the play button to animate</div>
                    <div class="play-container flex lg:mr-2"></div>
                </div>
            </div>
            <div id="covid_map" class="map"></div>
        </div>
    </figure>
</template>

<script>
import { fCapital, addLineBreaks, addSlider, addDropdown, getCountryCode } from '../assets/js/helper.js'

// kick off chart creation only after the page is mounted (nuxt hook). It doesn't make sense to run it before, or on the server.
export default {
    mounted: () => {
        loadMap();
    },
}
let parameter = "Deaths per 1 million (7 day average)";
let timer;

const ALL_PARAMETERS = ["Cases per 1 million (7 day average)",
    "Deaths per 1 million (7 day average)",
    "Fully vaccinated population share",
    "Movement restrictions imposed"];
let loopi = 0;
let playing = false;
let map_container_class = ".covid-map";

function loadMap() {
    let covid_map_path = "/csv/covid-map.csv";
    let lockdown_notes_path = "/csv/covid-lockdown-notes.csv";

    let covidData = Promise.all([
        d3.csv(covid_map_path),
        d3.csv(lockdown_notes_path)
    ]).then(function (files) {
        let data = files[0];
        let lockdownNotes = files[1];
        let date_cols = data.columns;
        date_cols.splice(0, 2);
        let ALL_DATES = date_cols;
        let date = ALL_DATES[ALL_DATES.length - 1];

        let initial_map_data = get_map_data();

        let map_chart = Highcharts.mapChart({
            chart: {
                renderTo: 'covid_map',
                height: 500,
                backgroundColor: "#2d3937",
            },
            plotOptions: {
                map: {
                    type: 'map',
                    allAreas: false, // this is needed for movement restrictions data
                    joinBy: ['iso-a3', 'country'],
                    colorAxis: 0,
                    borderColor: "#333f3d",
                    mapData: Highcharts.maps['custom/world']
                },
            },
            colorAxis: {
                tickInterval: 1,
                max: 5,
                min: 0,
                startOnTick: false,
                endOnTick: false,
                showInLegend: true,
                stops: [
                    [0, "#0070D1"],
                    [0.1, "#8B9595"],
                    [0.95, "#FF8800"]
                ],
            },
            title: {
                text: undefined
            },
            mapNavigation: {
                enabled: true,
                enableMouseWheelZoom: false,
                enableButtons: true,
                buttonOptions: {
                    theme: {
                        fill: '#ECE9E6',
                        states: {
                            hover: {
                                fill: '#1a94ff'
                            },
                            select: {
                                fill: '#1a94ff'
                            }
                        }
                    },

                }
            },
            tooltip: {
                backgroundColor: 'hsla(170, 12%, 20%, 70%)',
                style: {
                    color: '#ECE9E6'
                },
                formatter: function () {
                    let title = fCapital(this.key);
                    if (parameter == "Movement restrictions imposed") {

                        let note = this.point.note;
                        let noteText = get_map_restriction_note(note);
                        let textArray = addLineBreaks(noteText, 60);
                        let text = textArray[0];
                        if (textArray.length > 1) {
                            for (let i = 1; textArray.length > i; i++) {
                                text = text + "<br/>" + textArray[i];
                            }
                        }
                        return '<text><span style="font-size: 1.1em"><strong>' + title + '</strong></span><br>' + text + '</text>';
                    } else {
                        let value = this.point.value.toString();
                        let text = "";
                        if (parameter == "Cases per 1 million (7 day average)") {
                            text = "<b>" + value + "</b> daily cases per 1 million people <br>(7 day average for week ending on " + date + ")";
                        } else if (parameter == "Deaths per 1 million (7 day average)") {
                            text = "<b>" + value + "</b> daily deaths per 1 million people <br>(7 day average for week ending on " + date + ")";
                        } else if (parameter == "Fully vaccinated population share") {
                            text = "<b>" + value + "%</b> of total population was fully vaccinated by " + date;
                        }
                        return '<text><span style="font-size: 1.1em"><strong>' + title + '</strong></span><br>' + text + '</text>';
                    }
                },
                useHTML: true
            },
            legend: {
                enabled: true,
            },
            series: initial_map_data,
            credits: {
                enabled: false
            },
        });

        // Otherwise chart overflows its container
        map_chart.setSize();

        // Dropdown
        // Define dropdown container
        let map_dropdown_container = document.querySelector(map_container_class + " .row1");
        // Create a parameter dropdown for the map
        let parameterName = "covid-map-parameter";
        let parameterWidth = "";
        addDropdown(map_dropdown_container, parameterName, parameterWidth, parameterChange, ALL_PARAMETERS, parameter);
        // Update chart data on parameter change
        function parameterChange() {
            parameter = document.getElementById(parameterName + "-select").value;
            update_map_data();
            updateColorAxis();
        }

        // Create play button
        var map_playButton_container = document.querySelector(map_container_class + " .play-container");
        let playButton = document.createElement("div");
        playButton.classList.add("play-button");
        playButton.addEventListener("click", playToggle);
        let playIcon = document.createElement("span");
        playIcon.id = map_container_class + "-play-icon";
        playIcon.classList.add("i-play");
        playButton.appendChild(playIcon);
        map_playButton_container.appendChild(playButton);
        // Create a slider
        let sliderName = "play-slider";
        let min = 0;
        let max = (ALL_DATES.length - 1);
        let value = max;
        addSlider(map_playButton_container, sliderName, min, max, value, sliderDateChange);

        let shownDate = document.getElementById(sliderName + "-slider-output");
        shownDate.innerHTML = date;

        function get_map_restriction_note(code) {
            for (let row of lockdownNotes) {
                if (row.Code == code) {
                    return row.Note;
                }
            }
            console.log("No note found for code " + code);
            return "N/A";
        }


        function updateColorAxis() {
            let updatedAxis = {};
            let updatedPlotOptions = {};
            if (parameter == "Cases per 1 million (7 day average)") {
                updatedAxis = {
                    tickInterval: 400,
                    max: 2000,
                    min: 0,
                    showInLegend: true,
                    stops: [
                        [0, "#0070D1"],
                        [0.1, "#8B9595"],
                        [0.95, "#FF8800"]
                    ],
                };
            }
            else if (parameter == "Deaths per 1 million (7 day average)") {
                updatedAxis = {
                    tickInterval: 1,
                    max: 5,
                    min: 0,
                    showInLegend: true,
                    stops: [
                        [0, "#0070D1"],
                        [0.1, "#8B9595"],
                        [0.95, "#FF8800"]
                    ],
                };
            }
            else if (parameter == "Fully vaccinated population share") {
                updatedAxis = {
                    tickInterval: 20,
                    max: 80,
                    min: 0,
                    showInLegend: true,
                    stops: [
                        [0, "#FF8800"],
                        [0.1, "#8B9595"],
                        [0.95, "#0070D1"]
                    ],
                };
            }
            else if (parameter == "Movement restrictions imposed") {
                updatedAxis = {
                    tickInterval: 1,
                    max: 5,
                    min: 0,
                    showInLegend: false,
                    stops: [
                        [0, "#0070D1"],
                        [0.35, "#23CA23"],
                        [0.5, "#DDDDDD"],
                        [0.65, "#FFFF1A"],
                        [0.95, "#E63333"]
                    ],
                };
            }
            if (parameter == "Movement restrictions imposed") {
                updatedPlotOptions = {
                    colorAxis: false
                };
            }
            else {
                updatedPlotOptions = {
                    colorAxis: 0
                };
            }
            map_chart.update({
                plotOptions: {
                    map: updatedPlotOptions,
                }
            }, false);
            map_chart.update({
                colorAxis: updatedAxis,
            }, false);
            // hack because otherwise colors are not automatically updated
            if (parameter == "Movement restrictions imposed") {
                dateChange();
            }
            map_chart.redraw(false);
        }
        function update_map_data() {
            let updatedData = get_map_data();
            // remove old series
            let loops = map_chart.series.length;
            for (var i = 0; i < loops; i++) {
                map_chart.series[0].remove(false);
            }
            // then add new ones
            for (var i = 0; i < updatedData.length; i++) {
                map_chart.addSeries(updatedData[i], false);
            }
            map_chart.redraw();
        }
        function get_map_data() {
            let new_data = [];
            if (parameter == "Movement restrictions imposed") {
                let lock_data = [];
                let cur_data = [];
                let some_data = [];
                let test_data = [];
                let no_data = [];
                let empty_data = [];
                for (let row of data) {
                    if (row.Country != "World" && row.variable == "restrictions") {

                        let note = row[date];
                        let country = getCountryCode(row.Country);

                        if (note > 20000) {
                            lock_data.push({ country: country, countryName: row.Country, value: 5, note: note });
                        } else if (note > 10000) {
                            cur_data.push({ country: country, countryName: row.Country, value: 4, note: note });
                        } else if (note > 100) {
                            some_data.push({ country: country, countryName: row.Country, value: 3, note: note });
                        } else if (note > 50) {
                            test_data.push({ country: country, countryName: row.Country, value: 2, note: note });
                        } else if (note > 9) {
                            no_data.push({ country: country, countryName: row.Country, value: 1, note: note });
                        } else {
                            empty_data.push({ country: country, countryName: row.Country, value: 0, note: note });
                        }
                    }
                }

                let emptySlice = { data: empty_data, name: 'No data', type: 'map', color: "#101414" };
                let noSlice = { data: no_data, name: 'No restrictions', type: 'map', color: "#ddc3c3" };
                let testSlice = { data: test_data, name: 'Test/vaccination based restrictions', type: 'map', color: "#C29CE2" };
                let someSlice = { data: some_data, name: 'Non general restrictions', type: 'map', color: "#772EB8" };
                let curSlice = { data: cur_data, name: 'General curfew', type: 'map', color: "#ED45B2" };
                let lockSlice = { data: lock_data, name: 'General lockdown', type: 'map', color: "#970F67" };
                new_data.push(emptySlice);
                new_data.push(noSlice);
                new_data.push(testSlice);
                new_data.push(someSlice);
                new_data.push(curSlice);
                new_data.push(lockSlice);
            } else {
                let map_data = [];
                let param = "";
                if (parameter == "Cases per 1 million (7 day average)") {
                    param = "cases_pm";
                } else if (parameter == "Deaths per 1 million (7 day average)") {
                    param = "deaths_pm";
                } else if (parameter == "Fully vaccinated population share") {
                    param = "vaccinations";
                }
                for (let row of data) {
                    if (row.Country != "World" && row.variable == param) {
                        let val = row[date];
                        map_data.push({ country: getCountryCode(row.Country), value: +val, countryName: row.Country });
                    }
                }
                let new_slice = { data: map_data, name: parameter, type: 'map', color: "#0070D1",  };
                new_data.push(new_slice);
            }
            return new_data;
        }
        // Update chart data on slider change
        function sliderDateChange() {
            let slider = document.getElementById(sliderName + "-slider");
            loopi = slider.value;
            date = ALL_DATES[loopi];
            shownDate.innerHTML = date;
            dateChange();
        }
        function dateChange() {
            let updatedMapData = get_map_data();
            // remove old series
            let loops = map_chart.series.length;
            for (var i = 0; i < loops; i++) {
                map_chart.series[0].remove(false);
            }
            // then add new ones
            for (var i = 0; i < updatedMapData.length; i++) {
                map_chart.addSeries(updatedMapData[i], false);
            }
            map_chart.redraw(false);
            if (date == ALL_DATES[ALL_DATES.length - 1] && playing) {
                stopPlaying();
            }
        }
        function stopPlaying() {
            let iSpan = document.getElementById(map_container_class + "-play-icon");
            iSpan.classList.remove("i-pause");
            iSpan.classList.add("i-play");
            playing = false;
            clearInterval(timer);
        }
        function playToggle() {
            let slider = document.getElementById(sliderName + "-slider");
            let iSpan = document.getElementById(map_container_class + "-play-icon");
            if (playing) {
                stopPlaying();
            }
            else {
                if (date == ALL_DATES[(ALL_DATES.length - 1)]) {
                    loopi = 0;
                }
                playing = true;
                iSpan.classList.remove("i-play");
                iSpan.classList.add("i-pause");
                timer = setInterval(function () {
                    if (loopi < ALL_DATES.length) {
                        date = ALL_DATES[loopi];
                        shownDate.innerHTML = date;
                        slider.value = loopi;
                        dateChange();
                        loopi++;
                    }
                }, 150);
            }
        }
    })
        .catch(function (error) {
            console.log(error);
        })
}

</script>    

<style>

.chart-filters.row1 .dropdown-container, .play-container {
    width: clamp(250px, 100%, 450px);
}


.play-container .play-button {
    margin-right: clamp(10px, 2vw, 20px);
}

.slider-container {
    width: inherit;
    position: inherit;
    top: -5px;
    @apply flex mt-0 flex-row justify-between;
}

.slider-container .slider {
    margin-top: 15px;
    width: calc(100% - 120px) !important;
    max-width: 235px;
}

.slider-container .slider-output {
    top: 1px;
    line-height: inherit;
}

.chart-filters .dropdown-container {
    height: 34px;
    max-width: 450px;
    border: 1px solid #9dafaf;
    margin-right: 10px;
    @apply inline-block relative overflow-hidden rounded;
}

.chart-filters .dropdown-container select {
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    padding: 0 10px;
    font-size: 16px;
    border-style: none;
    @apply relative bg-offGray text-offWhite h-9 appearance-none rounded;
}

.chart-filters .dropdown-container:after {
    pointer-events: none;
    content: "\25BC";
    height: 1em;
    font-size: 0.625em;
    line-height: 1;
    right: 1.2em;
    top: 50%;
    margin-top: -0.5em;
    @apply absolute text-offWhite;
}

.chart-filters .dropdown-container:hover {
    border: 1px solid #1a94ff;
}

.chart-filters .slider-container {
    top: -15px;
    margin-top: 10px;
    @apply inline-block relative;
}

.chart-filters .slider-container .slider {
    height: 3px;
    outline: none;
    @apply transition-all appearance-none bg-offWhite rounded;
}
.chart-filters .slider-container .slider::-webkit-slider-thumb {
    @apply appearance-none w-6 h-6 bg-offGray border-2 border-offWhite border-solid cursor-pointer rounded-full;
}

.chart-filters .slider-container .slider::-webkit-slider-thumb:hover {
    background: #1a94ff;
    border-color: #1a94ff;
}

.chart-filters .slider-container .slider::-moz-range-thumb {
    @apply w-6 h-6 bg-offGray border-2 border-offWhite border-solid cursor-pointer rounded-full;
}

.chart-filters .slider-container .slider::-moz-range-thumb:hover {
    background: #1a94ff;
    border-color: #1a94ff;
}

.chart-filters .slider-container .slider-output {
    top: 3px;
    line-height: 20px;
    padding: 5px 10px;
    margin-left: 15px;
    @apply inline-block relative text-offWhite text-center rounded border-solid border border-offWhite ;
}

.chart-filters .slider-container .slider-output:after {
    left: -7px;
    border-top: 7px solid transparent;
    border-right: 7px solid #9dafaf;
    border-bottom: 7px solid transparent;
    content: "";
    @apply absolute w-0 h-0 top-2;
}

.play-button {
    height: 34px;
    width: 60px;
    border: 1px solid #9dafaf;
    @apply transition-all bg-offGray p-0 m-0 mr-5 rounded-2xl text-center cursor-pointer text-offGray align-middle inline-block;
}

.play-button:hover {
    background-image: linear-gradient(to top right, #2e3838 0%, #1a94ff 60%);
}

.i-play, .i-pause{
    margin-left: 5px;
    margin-bottom: -2px;
    @apply h-4 w-4 inline-block bg-no-repeat align-middle;

}
.i-play {
    background-image: url(/icons/play.svg);
}
.i-pause {
    background-image: url(/icons/pause.svg);
}

.dashboard-command {
    width: inherit;
    color: #1a94ff;
    font-size: 80%;
}

.dashboard-command:before {
    content: "\2BC6";
    color: #1a94ff;
    margin-right: 5px;
}

@media only screen and (min-width: 1025px) {
    .dashboard-command.left:before {
        content: "\2BC7";
    }
}

.highcharts-axis-labels text,
.highcharts-legend-item text {
    color: #ECE9E6 !important;
    fill: #ECE9E6 !important;
    font-size: 1em !important;
}</style>