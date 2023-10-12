export function fCapital(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export function addDropdown(parent, name, width, taxonChange, options, selected) {
    let selectContainer = document.createElement("div");
    selectContainer.classList.add("dropdown-container");
    if (width != "") {
        selectContainer.style.width = width;
    }
    parent.appendChild(selectContainer);
    // Create and append list
    let select = document.createElement("select");
    select.id = name + "-select";
    select.onchange = taxonChange;
    selectContainer.appendChild(select);
    for (let op of options) {
        select.add(new Option(op));
    }
    select.value = selected;
}
export function addSlider(parent, name, min, max, value, onChange) {
    let sliderContainer = document.createElement("div");
    sliderContainer.classList.add("slider-container");
    parent.appendChild(sliderContainer);
    let slider = document.createElement("input");
    slider.id = name + "-slider";
    slider.type = "range";
    slider.min = min.toString();
    slider.max = max.toString();
    slider.value = value.toString();
    slider.classList.add("slider");
    slider.onchange = onChange;
    sliderContainer.appendChild(slider);
    // Add a span to show the slider's value
    let sliderOutput = document.createElement("span");
    sliderOutput.id = name + "-slider-output";
    sliderOutput.classList.add("slider-output");
    sliderOutput.innerHTML = value.toString();
    sliderOutput.style.width = "120px";
    sliderContainer.appendChild(sliderOutput);
}
export function addLineBreaks(input, lineSize) {
    var returnText = [];
    var workingText = input;
    if (input.length <= lineSize) {
        returnText.push(input);
    }
    else {
        while (workingText.length > lineSize) {
            var line = workingText.substring(0, lineSize);
            // Find the latest white space and try to break there
            var lastSpaceRgx = /\s(?!.*\s)/;
            var idx = line.search(lastSpaceRgx);
            if (idx > 0) {
                line = line.substring(0, idx);
                workingText = workingText.substring(idx);
            }
            returnText.push(line);
        }
        returnText.push(workingText);
    }
    return returnText;
}
export function getCountryCode(country) {
    let countryCode = new Map();
    countryCode.set("Afghanistan", "AFG");
    countryCode.set("Albania", "ALB");
    countryCode.set("Algeria", "DZA");
    countryCode.set("American Samoa", "ASM");
    countryCode.set("Andorra", "AND");
    countryCode.set("Angola", "AGO");
    countryCode.set("Anguilla", "AIA");
    countryCode.set("Antigua and Barbuda", "ATG");
    countryCode.set("Argentina", "ARG");
    countryCode.set("Armenia", "ARM");
    countryCode.set("Aruba", "ABW");
    countryCode.set("Australia", "AUS");
    countryCode.set("Austria", "AUT");
    countryCode.set("Azerbaijan", "AZE");
    countryCode.set("Bahamas", "BHS");
    countryCode.set("Bahrain", "BHR");
    countryCode.set("Bangladesh", "BGD");
    countryCode.set("Barbados", "BRB");
    countryCode.set("Belarus", "BLR");
    countryCode.set("Belgium", "BEL");
    countryCode.set("Belize", "BLZ");
    countryCode.set("Benin", "BEN");
    countryCode.set("Bermuda", "BMU");
    countryCode.set("Bhutan", "BTN");
    countryCode.set("Bolivia", "BOL");
    countryCode.set("Bolivia (Plurinational State of)", "BOL");
    countryCode.set("Bonaire, Sint Eustatius and Saba", "BES");
    countryCode.set("Bonaire Sint Eustatius and Saba", "BES");
    countryCode.set("Bosnia and Herzegovina", "BIH");
    countryCode.set("Botswana", "BWA");
    countryCode.set("Brazil", "BRA");
    countryCode.set("British Virgin Islands", "VSB");
    countryCode.set("Brunei", "BRN");
    countryCode.set("Brunei Darussalam", "BRN");
    countryCode.set("Bulgaria", "BGR");
    countryCode.set("Burkina Faso", "BFA");
    countryCode.set("Burundi", "BDI");
    countryCode.set("Cabo Verde", "CPV");
    countryCode.set("Cambodia", "KHM");
    countryCode.set("Cameroon", "CMR");
    countryCode.set("Canada", "CAN");
    countryCode.set("Cape Verde", "CPV");
    countryCode.set("Cayman Islands", "CYM");
    countryCode.set("Central African Republic", "CAF");
    countryCode.set("Chad", "TCD");
    countryCode.set("Channel Islands", "JEY");
    countryCode.set("Chile", "CHL");
    countryCode.set("China", "CHN");
    countryCode.set("China, Macao SAR", "MAC");
    countryCode.set("Macao", "MAC");
    countryCode.set("China, Hong Kong SAR", "HKG");
    countryCode.set("China Hong Kong SAR", "HKG");
    countryCode.set("Hong Kong", "HKG");
    countryCode.set("Hong Kong SAR, China", "HKG");
    countryCode.set("Colombia", "COL");
    countryCode.set("Comoros", "COM");
    countryCode.set("Congo", "COG");
    countryCode.set("Congo (Brazzaville)", "COG");
    countryCode.set("Congo, Rep.", "COG");
    countryCode.set("Congo, Democratic Republic of", "COD");
    countryCode.set("Congo, Dem. Rep.", "COD");
    countryCode.set("Democratic Republic of Congo", "COD");
    countryCode.set("Congo (Kinshasa)", "COD");
    countryCode.set("Cook Islands", "COK");
    countryCode.set("Costa Rica", "CRI");
    countryCode.set("Cote d'Ivoire", "CIV");
    countryCode.set("Croatia", "HRV");
    countryCode.set("Cuba", "CUB");
    countryCode.set("Curacao", "CUW");
    countryCode.set("Cyprus", "CYP");
    countryCode.set("Czech Republic", "CZE");
    countryCode.set("Czechia", "CZE");
    countryCode.set("Democratic Republic of the Congo", "COD");
    countryCode.set("Denmark", "DNK");
    countryCode.set("Djibouti", "DJI");
    countryCode.set("Dominica", "DMA");
    countryCode.set("Dominican Republic", "DOM");
    countryCode.set("Ecuador", "ECU");
    countryCode.set("Egypt", "EGY");
    countryCode.set("Egypt, Arab Rep.", "EGY");
    countryCode.set("El Salvador", "SLV");
    countryCode.set("Equatorial Guinea", "GNQ");
    countryCode.set("Eritrea", "ERI");
    countryCode.set("Estonia", "EST");
    countryCode.set("Ethiopia", "ETH");
    countryCode.set("Faeroe Islands", "FRO");
    countryCode.set("Faroe Islands", "FRO");
    countryCode.set("Falkland Islands (Malvinas)", "FLK");
    countryCode.set("Falkland Islands", "FLK");
    countryCode.set("Fiji", "FJI");
    countryCode.set("Finland", "FIN"),
        countryCode.set("France", "FRA");
    countryCode.set("French Guiana", "GUF");
    countryCode.set("French Polynesia", "PYF");
    countryCode.set("Gabon", "GAB");
    countryCode.set("Gambia", "GMB");
    countryCode.set("Georgia", "GEO");
    countryCode.set("Germany", "DEU");
    countryCode.set("Ghana", "GHA");
    countryCode.set("Gibraltar", "GIB");
    countryCode.set("Greece", "GRC");
    countryCode.set("Greenland", "GRL");
    countryCode.set("Grenada", "GRD");
    countryCode.set("Guam", "GUM");
    countryCode.set("Guadeloupe", "GLP");
    countryCode.set("Guatemala", "GTM");
    countryCode.set("Guinea", "GIN");
    countryCode.set("Guinea-Bissau", "GNB");
    countryCode.set("Guyana", "GUY");
    countryCode.set("Haiti", "HTI");
    countryCode.set("Holy See", "VAT");
    countryCode.set("Vatican", "VAT");
    countryCode.set("Honduras", "HND");
    countryCode.set("Hungary", "HUN");
    countryCode.set("Iceland", "ISL");
    countryCode.set("India", "IND");
    countryCode.set("Indonesia", "IDN");
    countryCode.set("Iran", "IRN");
    countryCode.set("Iran, Islamic Republic of", "IRN");
    countryCode.set("Iran (Islamic Republic of)", "IRN");
    countryCode.set("Iran, Islamic Rep.", "IRN");
    countryCode.set("Iraq", "IRQ");
    countryCode.set("Ireland", "IRL");
    countryCode.set("Isle of Man", "IMN");
    countryCode.set("Israel", "ISR");
    countryCode.set("Italy", "ITA");
    countryCode.set("Jamaica", "JAM");
    countryCode.set("Japan", "JPN");
    countryCode.set("Jordan", "JOR");
    countryCode.set("Kazakhstan", "KAZ");
    countryCode.set("Kenya", "KEN");
    countryCode.set("Kiribati", "KIR");
    countryCode.set("Korea, Democratic People's Republic of", "PRK");
    countryCode.set("Dem. People's Republic of Korea", "PRK");
    countryCode.set("Democratic People's Republic of Korea", "PRK");
    countryCode.set("Korea, Dem. People's Rep.", "PRK");
    countryCode.set("Korea, North", "PRK");
    countryCode.set("Korea, Republic of", "KOR");
    countryCode.set("Republic of Korea", "KOR");
    countryCode.set("Korea, South", "KOR");
    countryCode.set("Korea, Rep.", "KOR");
    countryCode.set("Kosovo", "RKS");
    countryCode.set("Kuwait", "KWT");
    countryCode.set("Kyrgyzstan", "KGZ");
    countryCode.set("Kyrgyz Republic", "KGZ");
    countryCode.set("Laos", "LAO");
    countryCode.set("Lao People's Democratic Republic", "LAO");
    countryCode.set("Latvia", "LVA");
    countryCode.set("Lebanon", "LBN");
    countryCode.set("Lesotho", "LSO");
    countryCode.set("Liberia", "LBR");
    countryCode.set("Libya", "LBY");
    countryCode.set("Libyan Arab Jamahiriya", "LBY");
    countryCode.set("Liechtenstein", "LIE");
    countryCode.set("Lithuania", "LTU");
    countryCode.set("Luxembourg", "LUX");
    countryCode.set("Macedonia", "MKD");
    countryCode.set("Macedonia TFYR", "MKD");
    countryCode.set("TFYR Macedonia", "MKD");
    countryCode.set("North Macedonia", "MKD");
    countryCode.set("Madagascar", "MDG");
    countryCode.set("Malawi", "MWI");
    countryCode.set("Malaysia", "MYS");
    countryCode.set("Maldives", "MDV");
    countryCode.set("Mali", "MLI");
    countryCode.set("Malta", "MLT");
    countryCode.set("Marshall Islands", "MHL");
    countryCode.set("Martinique", "MTQ");
    countryCode.set("Mauritania", "MRT");
    countryCode.set("Mauritius", "MUS");
    countryCode.set("Mayotte", "MYT");
    countryCode.set("Mexico", "MEX");
    countryCode.set("Micronesia, Federated States of", "FSM");
    countryCode.set("Micronesia (Fed. States of)", "FSM");
    countryCode.set("Federated States of Micronesia", "FSM");
    countryCode.set("Micronesia (Federated States of)", "FSM");
    countryCode.set("Micronesia (country)", "FSM");
    countryCode.set("Micronesia", "FSM");
    countryCode.set("Moldova", "MDA");
    countryCode.set("Republic of Moldova", "MDA");
    countryCode.set("Monaco", "MCO");
    countryCode.set("Mongolia", "MNG");
    countryCode.set("Montenegro", "MNE");
    countryCode.set("Montserrat", "MSR");
    countryCode.set("Morocco", "MAR");
    countryCode.set("Mozambique", "MOZ");
    countryCode.set("Myanmar", "MMR");
    countryCode.set("Burma", "MMR");
    countryCode.set("Namibia", "NAM");
    countryCode.set("Nauru", "NRU");
    countryCode.set("Nepal", "NPL");
    countryCode.set("Netherlands", "NLD");
    countryCode.set("Caribbean Netherlands", "ANT");
    countryCode.set("New Caledonia", "NCL");
    countryCode.set("New Zealand", "NZL");
    countryCode.set("New Zealand*", "NZL");
    countryCode.set("Nicaragua", "NIC");
    countryCode.set("Niger", "NER");
    countryCode.set("Nigeria", "NGA");
    countryCode.set("North Korea", "PRK");
    countryCode.set("Northern Mariana Islands", "MNP");
    countryCode.set("Norway", "NOR");
    countryCode.set("Niue", "NIU");
    countryCode.set("Oman", "OMN");
    countryCode.set("Pakistan", "PAK");
    countryCode.set("Palau", "PLW");
    countryCode.set("Palestine", "PSE");
    countryCode.set("State of Palestine", "PSE");
    countryCode.set("West Bank and Gaza", "PSE");
    countryCode.set("Panama", "PAN");
    countryCode.set("Papua New Guinea", "PNG");
    countryCode.set("Paraguay", "PRY");
    countryCode.set("Peru", "PER");
    countryCode.set("Philippines", "PHL");
    countryCode.set("Poland", "POL");
    countryCode.set("Portugal", "PRT");
    countryCode.set("Puerto Rico", "PRI");
    countryCode.set("Qatar", "QAT");
    countryCode.set("Reunion", "REU");
    countryCode.set("Romania", "ROU");
    countryCode.set("Russian Federation", "RUS");
    countryCode.set("Russia", "RUS");
    countryCode.set("Rwanda", "RWA");
    countryCode.set("Saint Barthelemy", "BLM");
    countryCode.set("Saint Barthélemy", "BLM");
    countryCode.set("Saint Helena", "SHN");
    countryCode.set("Saint Kitts and Nevis", "KNA");
    countryCode.set("Saint Lucia", "LCA");
    countryCode.set("Sint Maarten (Dutch part)", "SXM");
    countryCode.set("Sint Maarten", "SXM");
    countryCode.set("Saint Martin (French part)", "MAF");
    countryCode.set("St Martin", "MAF");
    countryCode.set("Saint Pierre and Miquelon", "SPM");
    countryCode.set("Saint Vincent and the Grenadines", "VCT");
    countryCode.set("Samoa", "WSM");
    countryCode.set("San Marino", "SMR");
    countryCode.set("Sao Tome and Principe", "STP");
    countryCode.set("Saudi Arabia", "SAU");
    countryCode.set("Senegal", "SEN");
    countryCode.set("Serbia", "SRB");
    countryCode.set("Seychelles", "SYC");
    countryCode.set("Sierra Leone", "SLE");
    countryCode.set("Singapore", "SGP");
    countryCode.set("Slovakia", "SVK");
    countryCode.set("Slovak Republic", "SVK");
    countryCode.set("Slovenia", "SVN");
    countryCode.set("Solomon Islands", "SLB");
    countryCode.set("Somalia", "SOM");
    countryCode.set("South Africa", "ZAF");
    countryCode.set("South Korea", "KOR");
    countryCode.set("South Sudan", "SSD");
    countryCode.set("Spain", "ESP");
    countryCode.set("Sri Lanka", "LKA");
    countryCode.set("Sudan", "SDN");
    countryCode.set("Suriname", "SUR");
    countryCode.set("Swaziland", "SWZ");
    countryCode.set("Eswatini", "SWZ");
    countryCode.set("Sweden", "SWE");
    countryCode.set("Switzerland", "CHE");
    countryCode.set("Syria", "SYR");
    countryCode.set("Syrian Arab Republic", "SYR");
    countryCode.set("Taiwan (Province of China)", "TWN");
    countryCode.set("Taiwan", "TTWN");
    countryCode.set("China, Taiwan Province of China", "TWN");
    countryCode.set("Taiwan*", "TWN");
    countryCode.set("Tajikistan", "TJK");
    countryCode.set("Tanzania", "TZA");
    countryCode.set("Tanzania, United Republic of", "TZA");
    countryCode.set("United Republic of Tanzania", "TZA");
    countryCode.set("Thailand", "THA");
    countryCode.set("The Bahamas", "BHS");
    countryCode.set("The Gambia", "GMB");
    countryCode.set("Timor-Leste", "TLS");
    countryCode.set("Timor", "TLS");
    countryCode.set("Togo", "TGO");
    countryCode.set("Tokelau", "TKL");
    countryCode.set("Tonga", "TON");
    countryCode.set("Trinidad and Tobago", "TTO");
    countryCode.set("Trinidad & Tobago", "TTO");
    countryCode.set("Tunisia", "TUN");
    countryCode.set("Turkey", "TUR");
    countryCode.set("Turkiye", "TUR");
    countryCode.set("Turkmenistan", "TKM");
    countryCode.set("Turks and Caicos Islands", "TCA");
    countryCode.set("Tuvalu", "TUV");
    countryCode.set("Uganda", "UGA");
    countryCode.set("Ukraine", "UKR");
    countryCode.set("United Arab Emirates", "ARE");
    countryCode.set("United Kingdom", "GBR");
    countryCode.set("United States", "USA");
    countryCode.set("USA", "USA");
    countryCode.set("United States of America", "USA");
    countryCode.set("United States Virgin Islands", "VIR");
    countryCode.set("Uruguay", "URY");
    countryCode.set("Uzbekistan", "UZB");
    countryCode.set("Vanuatu", "VUT");
    countryCode.set("Venezuela", "VEN");
    countryCode.set("Venezuela, RB", "VEN");
    countryCode.set("Venezuela, Bolivarian Republic of", "VEN");
    countryCode.set("Venezuela (Bolivarian Republic of)", "VEN");
    countryCode.set("Vietnam", "VNM");
    countryCode.set("Viet Nam", "VNM");
    countryCode.set("Virgin Islands, U.S.", "VIR");
    countryCode.set("Wallis and Futuna Islands", "WLF");
    countryCode.set("Wallis and Futuna", "WLF");
    countryCode.set("Western Sahara", "ESH");
    countryCode.set("Yemen", "YEM");
    countryCode.set("Zambia", "ZMB");
    countryCode.set("Zimbabwe", "ZWE");
    countryCode.set("World", "GLO");
    countryCode.set("Global", "GLO");
    let code = countryCode.get(country);
    if (!code) {
        console.log("Code not found for " + country);
    }
    return code;
}
export function numberFormatter(number) {
    let numberFormated;
    if (number > 1000000) {
        let value = number / 1000000;
        numberFormated = value.toLocaleString(undefined, { maximumFractionDigits: 0 });
        return numberFormated + "m";
    }
    else if (number > 1000) {
        numberFormated = number.toLocaleString(undefined, { maximumFractionDigits: 0 });
    }
    else {
        numberFormated = number.toLocaleString(undefined, { maximumFractionDigits: 2 });
    }
    return numberFormated;
}
// Create legend
// TODO write this better
// chart_options and data should be Highcharts.Point arrays, but there seems to be an issue with the from property that is used for sankey type charts like the dependency wheel
export function createLegend(chart_points, data, parentContainer) {
    // Chart points and data will difer in cases where we only want to show a subset on the legend
    // Remove old legend items if they exist
    document.querySelectorAll(parentContainer + ' .legend-item').forEach(function (a) {
        a.remove();
    });
    let legends = Array.from(document.querySelectorAll(parentContainer + ' .chart-legend'));
    // sometimes we have multiple legends, eg one for mobile, one for desktop
    for (let legend of legends) {
        // Append legend items
        for (let point of data) {
            legend.innerHTML += '<div class="legend-item"><div class="dot" style="background-color:' + point.color + '" ></div><div class="serieName" id="">' + fCapital(point.name) + '</div></div>';
        }
    }
    // Hover effect for legend
    document.querySelectorAll(parentContainer + ' .legend-item').forEach(function (a) {
        a.addEventListener("mouseover", function () {
            var name = this.textContent;
            for (let point of data) {
                let nam = '';
                // from is for dependency wheel
                if (point.name) {
                    nam = fCapital(point.name);
                }
                else if (point.from) {
                    nam = fCapital(point.from);
                }
                if (nam === name) {
                    point.setState('hover');
                }
                else {
                    point.setState('inactive');
                }
            }
        });
    });
    // Remove all states on mouse out
    document.querySelectorAll(parentContainer + ' .legend-item').forEach(function (a) {
        a.addEventListener("mouseout", function () {
            for (let point of data) {
                point.setState('');
            }
        });
    });
}