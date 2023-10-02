<template>
    <figure>
        <div class="container chart-container migration-wheel filters-right flex flex-col sm:flex-row-reverse">
            <div class="chart-options top-filters text-center sm:text-start flex flex-col justify-center" >
                <div class="chart-filters"></div>
                <div class="chart-legend hidden sm:block"></div>
            </div>
            <div id="migration_wheel" class="h-64 sm:h-[500px] w-full"></div>
            <div class="chart-options ">
                <div class="chart-legend flex sm:hidden flex-wrap"></div>
            </div>
        </div>
    </figure>
</template>
<script>
import { fCapital, addDropdown, numberFormatter, createLegend } from '../assets/js/helper.js'

// kick off chart creation only after the page is mounted (nuxt hook). It doesn't make sense to run it before, or on the server.
export default {
    mounted: () => {
        loadChart();
    },
}
let migration_wheel_path = "/csv/migration-wheel.csv";

function loadChart() {


    let migrationWheel = d3.csv(migration_wheel_path)
        .then(function (data) {
            // fix for bug of self referencing points
            (function (H) {
                let base = H.seriesTypes.sankey.prototype;
                H.seriesTypes.dependencywheel.prototype.createNode = function (id) {
                    let node = base.createNode.call(this, id);
                    node.index = this.nodes.length - 1;
                    /**
                     * Return the sum of incoming and outgoing links.
                     * @private
                     */
                    node.getSum = function () {
                        return node.linksFrom
                            .concat(node.linksTo)
                            .filter(function (link, i, links) {
                                return links.indexOf(link) === i;
                            })
                            .reduce(function (acc, link) {
                                return acc + link.weight;
                            }, 0);
                    };
                    /**
                     * Get the offset in weight values of a point/link.
                     * @private
                     */
                    node.offset = function (point) {
                        var offset = 0, i, links = node.linksFrom.concat(node.linksTo), sliced;
                        /**
                         * @private
                         */
                        function otherNode(link) {
                            if (link.fromNode === node) {
                                return link.toNode;
                            }
                            return link.fromNode;
                        }
                        // Sort and slice the links to avoid links going out of each
                        // node crossing each other.
                        links.sort(function (a, b) {
                            return otherNode(a).index - otherNode(b).index;
                        });
                        for (i = 0; i < links.length; i++) {
                            if (otherNode(links[i]).index > node.index) {
                                links = links.slice(0, i).reverse().concat(links.slice(i).reverse());
                                sliced = true;
                                break;
                            }
                        }
                        if (!sliced) {
                            links.reverse();
                        }
                        for (i = 0; i < links.length; i++) {
                            if (links[i] === point) {
                                return offset;
                            }
                            if (links.indexOf(links[i]) === i) {
                                offset += links[i].weight;
                            }
                        }
                    };
                    return node;
                };
            })(Highcharts);
            // All filterable options
            const ALL_PARAMETERS = [...new Set(data.map((d) => d.Parameter))].sort();
            // Default values
            let parameter = "Continent";
            let container_class = ".migration-wheel";
            let initial_data = [];
            let getColor = new Map();
            getColor.set('Africa', '#FFFF1A');
            getColor.set("Asia", '#D1158F');
            getColor.set("Europe", '#0070D1');
            getColor.set("Latin America and the Caribbean", '#1B981B');
            getColor.set("Northern America", '#E63333');
            getColor.set("Oceania", '#8B9595');
            getColor.set("Eastern Africa", '#FFFF4D');
            getColor.set("Middle Africa", '#FFFF1A');
            getColor.set("Northern Africa", '#C7C705');
            getColor.set("Southern Africa", '#919108');
            getColor.set("Western Africa", '#5E5E08');
            getColor.set("Eastern Asia", '#F48BCF');
            getColor.set("South-Eastern Asia", '#ED45B2');
            getColor.set("Southern Asia", '#D1158F');
            getColor.set("Central Asia", '#970F67');
            getColor.set("Western Asia", '#5D0940');
            getColor.set("Eastern Europe", '#1A94FF');
            getColor.set("Northern Europe", '#0070D1');
            getColor.set("Southern Europe", '#005299');
            getColor.set("Western Europe", '#003666');
            getColor.set("Caribbean", '#52E052');
            getColor.set("Central America", '#1B981B');
            getColor.set("South America", '#0B410B');
            function get_data() {
                var new_data = [];
                for (let row of data) {
                    if (parameter == row.Parameter) {
                        new_data.push({ from: row.Origin, to: row.Destination, weight: +row.Population, color: getColor.get(row.Origin) });
                    }
                }
                return new_data;
            }
            initial_data = get_data();
            let chart = Highcharts.chart('migration_wheel', {
                chart: {
                    // height: 500,
                    backgroundColor: "#2d3937",
                },
                title: {
                    text: undefined
                },
                tooltip: {
                    useHTML: true,
                    headerFormat: '',
                    backgroundColor: 'hsla(170, 12%, 20%, 70%)',
                    style: {
                        color: '#ECE9E6'
                    },
                    formatter: function () {
                        let point = this.point;
                        let text = "";
                        if (this.point.formatPrefix == "node") {
                            let region = fCapital(point.name);
                            let population = numberFormatter(point.sum);
                            text = "<strong>" + region + "</strong>: " + population;
                        }
                        else {
                            let from = fCapital(point.from);
                            let to = fCapital(point.to);
                            let population = numberFormatter(point.weight);
                            text = from + " &#8594; " + to + ": " + population;
                        }
                        return '<text>' + text + '</text>';
                    },
                },
                plotOptions: {
                    dependencywheel: {
                        // allowPointSelect: true,
                        curveFactor: 0.6,
                        linkOpacity: 0.2,
                        nodePadding: 0,
                        linkOpacity: 0.6
                    }
                },

                credits: {
                    enabled: false
                },

                series: [{
                    keys: ['from', 'to', 'weight'],
                    data: initial_data,
                    type: 'dependencywheel',
                    name: 'Migration flow',
                    dataLabels: {
                        enabled: false,
                    },
                    size: '95%',
                    nodes: [{
                        id: "Africa",
                        color: getColor.get("Africa"),
                    }, {
                        id: "Asia",
                        color: getColor.get("Asia"),
                    }, {
                        id: "Europe",
                        color: getColor.get("Europe"),
                    }, {
                        id: "Latin America and the Caribbean",
                        color: getColor.get("Latin America and the Caribbean"),
                    }, {
                        id: "Northern America",
                        color: getColor.get("Northern America"),
                    }, {
                        id: "Oceania",
                        color: getColor.get("Oceania"),
                    }, {
                        id: "Eastern Africa",
                        color: getColor.get("Eastern Africa")
                    }, {
                        id: "Middle Africa",
                        color: getColor.get("Middle Africa")
                    }, {
                        id: "Northern Africa",
                        color: getColor.get("Northern Africa")
                    }, {
                        id: "Southern Africa",
                        color: getColor.get("Southern Africa")
                    }, {
                        id: "Western Africa",
                        color: getColor.get("Western Africa")
                    }, {
                        id: "Central Asia",
                        color: getColor.get("Central Asia")
                    }, {
                        id: "Eastern Asia",
                        color: getColor.get("Eastern Asia")
                    }, {
                        id: "Southern Asia",
                        color: getColor.get("Southern Asia")
                    }, {
                        id: "South-Eastern Asia",
                        color: getColor.get("South-Eastern Asia")
                    }, {
                        id: "Western Asia",
                        color: getColor.get("Western Asia")
                    }, {
                        id: "Eastern Europe",
                        color: getColor.get("Eastern Europe")
                    }, {
                        id: "Northern Europe",
                        color: getColor.get("Northern Europe")
                    }, {
                        id: "Southern Europe",
                        color: getColor.get("Southern Europe")
                    }, {
                        id: "Western Europe",
                        color: getColor.get("Western Europe")
                    }, {
                        id: "Caribbean",
                        color: getColor.get("Caribbean")
                    }, {
                        id: "Central America",
                        color: getColor.get("Central America")
                    }, {
                        id: "South America",
                        color: getColor.get("South America")
                    }]
                }]

            });
            // for some reason rearragnes the chart and its prettier
            chart.setSize();
            
            
            // Add a legend
            let chart_nodes = chart.series[0].nodes;
            let chart_points = chart.series[0].data;
            createLegend(chart_points, chart_nodes, container_class);
            // Dropdowns
            // Define dropdown container
            let filters = document.querySelector(container_class + " .chart-filters");
            // Create a parameter dropdown
            let parameterName = "wheel-parameter";
            let parameterWidth = "150px";
            addDropdown(filters, parameterName, parameterWidth, parameterChange, ALL_PARAMETERS, parameter);
            // Update chart data on parameter change
            function parameterChange() {
                parameter = document.getElementById(parameterName + "-select").value;
                chart.series[0].setData(get_data());
                chart.setSize();
                chart_nodes = chart.series[0].nodes;
                chart_points = chart.series[0].data;
                createLegend(chart_points, chart_nodes, container_class);
            }


        })
        .catch(function (error) {
            console.log(error);
        });
}

</script>

<style>
.top-filters{
    width: clamp(200px,30%,600px);
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

.chart-legend .legend-item {
  /* display: inline-flex; */
  margin-bottom: 5px;
  margin-right: 20px;
  cursor: pointer;
  white-space: nowrap;
}

.legend-item .dot {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
}
.legend-item .serieName {
    display: inline;
}


</style>

