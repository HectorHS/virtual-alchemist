<template>
    <figure>
        <section class="node-container flex flex-col-reverse sm:flex-row">
            <div id="graph_container" class="nodes w-full h-96 sm:h-[500px]" style="width:100%;">
                <div class="node-controls flex flex-col float-right">
                    <datalist id="nodes-datalist"></datalist>
                    <button type="button" id="zoom-in-button"
                        class="relative cursor-pointer z-10 text-offGray hover:text-offWhite bg-transparent hover:bg-offGray text-xl border-solid border-2 border-offGray self-end h-10 w-10 rounded-t-lg">+</button>
                    <button type="button" id="zoom-out-button"
                        class="relative cursor-pointer z-10 text-offGray hover:text-offWhite bg-transparent hover:bg-offGray text-xl border-solid border-2 border-offGray self-end h-10 w-10 rounded-b-lg">-</button>
                </div>

            </div>
        </section>
        <div id="node-legend" class="px-12 py-5 text-offGray center"></div>
    </figure>
</template>    

<script>
export default {
    mounted: () => {
        loadChart();
    },

}


import { fCapital } from '../assets/js/helper.js'



function loadChart() {
    let ggs_graph_gexf = "/gexf/ggs.gexf";

    // let selected = [];

    sigma.classes.graph.addMethod('neighbors', function (nodeId) {
        let k,
            neighbors = {},
            index = this.allNeighborsIndex[nodeId] || {};

        for (k in index)
            neighbors[k] = this.nodesIndex[k];

        return neighbors;
    });

    // Initialise sigma with settings
    var s = new sigma({
        renderers: [
            {
                type: 'canvas',
                container: document.getElementById('graph_container'),
                freeStyle: true
            }
        ],
        settings: {
            minNodeSize: 1,
            maxNodeSize: 20,
            minEdgeSize: 0.1,
            maxEdgeSize: 3,
            defaultEdgeType: "curve", // only works on canvas renderer
            defaultLabelColor: "#2d3937",
            defaultHoverLabelBGColor: "#171c1c",
            defaultLabelHoverColor: "#dffcff",
            font: "Poppins",
            drawLabels: true,
            mouseWheelEnabled: false,
            doubleClickEnabled: false,
            touchEnabled: true,
        },
    });

    // Load data to the graph
    sigma.parsers.gexf(ggs_graph_gexf, s,
        function (s) {
            // Add various parameters to nodes and edges
            s.graph.nodes().forEach(function (n) {
                n.label = fCapital(n.label);
                n.color = getColor[n.attributes["modularity class"]];
                n.originalColor = n.color;
                n.inactiveColor = "#455454";
            });
            s.graph.edges().forEach(function (e) {
                e.originalColor = e.color;
                e.inactiveColor = "#455454";
            });
            s.refresh();

            // Add event listeners to buttons
            var zoomInButton = document.getElementById('zoom-in-button');
            zoomInButton.addEventListener("click", zoomIn);
            var zoomOutButton = document.getElementById('zoom-out-button');
            zoomOutButton.addEventListener("click", zoomOut);
        });

    createLegend();

    function zoomIn() {
        var c = s.camera;
        c.goTo({
            ratio: c.ratio / c.settings('zoomingRatio')
        });
    }

    function zoomOut() {
        var c = s.camera;
        c.goTo({
            ratio: c.ratio * c.settings('zoomingRatio')
        });
    }

    // Mouse over event
    s.bind('overNode', function (e) {
            nodeHover(s, e.data.node);
    });

    // Mouse out event
    s.bind('outNode', function (e) {
        nodeHoverOut(s);
    });
}


// Highlight hovered node and relevant nodes by greying out all else
function nodeHover(s, node) {
    var toKeep = nodesToKeep(s, node);

    hideNodes(s, toKeep);
}

function hideNodes(s, toKeep) {
    s.graph.nodes().forEach(function (n) {
        if (toKeep[n.id]) {
            n.color = n.originalColor;
        } else {
            n.color = n.inactiveColor;
        }
    });
    // Grey out irrelevant edges 
    setEdgesToInactive(s, toKeep);
    s.refresh();
}

// Return graph to pre-hover state
function nodeHoverOut(s) {
    // Start clean, and then figure out what needs to be greyed out according to selected nodes and percentage
    resetStates(s);
    s.refresh();

}

// Reset all selections
function resetStates(s) {
    s.graph.nodes().forEach(function (n) {
        n.color = n.originalColor;
    });
    s.graph.edges().forEach(function (e) {
        e.color = e.originalColor;
    });
}

// Return all relevant nodes to be kept
function nodesToKeep(s, node) {
    let toKeep = [];

    let key = node.id;
    toKeep = s.graph.neighbors(key);
    toKeep[key] = node;

    return toKeep;
}

// Grey out all edges that are not bewteen active nodes
function setEdgesToInactive(s, nodesToKeep) {
    s.graph.edges().forEach(function (e) {
        if (nodesToKeep[e.source] && nodesToKeep[e.target]) {
            e.color = e.originalColor;
        } else {
            e.color = e.inactiveColor;
        }
    });
}

let getColor = {
    "0": "#001b33",
    "1": "#006dcc",
    "2": "#ffff00",
    "3": "#1fad1f",
    "4": "#D1158F",
    "5": "#CC1919",
    "6": "#FF8800"
};

function createLegend() {
    var categories = [
        { class: "2", name: "Food production" },
        { class: "0", name: "Locations" },
        { class: "1", name: "People" },
        { class: "6", name: "Societies" },
        { class: "5", name: "Conflict" },
        { class: "4", name: "Guns, germs and steel" },
        { class: "3", name: "Environment" },

    ];

    var container = document.getElementById('node-legend');

    for (var cat of categories) {
        var legend_item = document.createElement("div");
        legend_item.classList.add('legend-item');

        var legend_dot = document.createElement("div");
        legend_dot.classList.add('legend-dot');
        legend_dot.style["background-color"] = getColor[cat.class];
        legend_item.appendChild(legend_dot);

        var legend_label = document.createElement("div");
        legend_label.classList.add('legend-label');
        legend_label.innerHTML = cat.name;
        legend_item.appendChild(legend_label);

        container.appendChild(legend_item);
    }
}

</script>

<style>
.node-controls {
    width: clamp(250px, 100%, 300px);
}

#node-legend .legend-dot {
    @apply h-6 w-6 rounded-full inline-block mr-2;
}

#node-legend .legend-item {
    @apply inline-flex mb-1 mr-5 whitespace-nowrap;
}
</style>

