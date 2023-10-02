<script setup>
useHead({
  script: [
    {
      src: "https://d3js.org/d3-dsv.v1.min.js",
      tagPosition: 'head'
    },
    {
      src: "https://d3js.org/d3-fetch.v1.min.js",
      tagPosition: 'head'
    },
    {
      src: "https://code.highcharts.com/highcharts.js",
      type: "text/javascript",
    //   async: true,
    },
    {
      src: "https://code.highcharts.com/maps/modules/map.js",
      type: "text/javascript",
    //   async: true,
    },
    {
      src: "https://code.highcharts.com/highcharts-more.js",
      type: "text/javascript",
    //   async: true,
    },
    {
      src: "https://code.highcharts.com/modules/sankey.js",
      type: "text/javascript",
    //   async: true,
    },
    {
      src: "https://code.highcharts.com/modules/dependency-wheel.js",
      type: "text/javascript",
    //   async: true,
    },
    // {
    //   src: "https://code.highcharts.com/modules/series-label.js",
    //   type: "text/javascript",
    //   async: true,
    // },
    // {
    //   src: "https://code.highcharts.com/modules/series-label.js",
    //   type: "text/javascript",
    //   async: true,
    // },
    // {
    //   src: "https://code.highcharts.com/maps/highmaps.js",
    //   type: "text/javascript",
    //   async: true,
    // },
    
    // {
    //   src: "https://code.highcharts.com/mapdata/custom/world-eckert3-highres.js",
    //   type: "text/javascript",
    //   async: true,
    // },
    // {
    //   src: "https://code.highcharts.com/maps/modules/data.js",
    //   type: "text/javascript",
    //   async: true,
    // },


    ]
})







</script>



<template>


<va-header></va-header>
    <div class="bg-four text-center bg-fixed">
        <!-- highcharts -->
        <section>
            <div class="diagonal-container before:bg-offGray p-10 -mt-1">
                <div class="home-container text-offWhite ">
                    <h2 class="">Highcharts.js</h2>
                    <p>Highcharts is a great javascript framework to build all kinds of interactive data visualizations. You can see some examples below, or visit navigateobscurity.com to see more visualisations in context.</p>
                    <h4 class="pt-20 pb-10">COVID-19 map for cases, deaths, vaccinations, and movement restrictions</h4>
                    <va-covid-map></va-covid-map>
                    <p class="text-right text-sm">Full visualization in context: <a class="text-primary" href="https://navigateobscurity.com/data/covid-19" target="_blank">navigateobscurity.com/data/covid-19</a></p>
                    <h4 class="pt-20 pb-10">Global migration flow</h4>
                    <va-wheel></va-wheel>
                    <p class="text-right text-sm">Full visualization in context: <a class="text-primary" href="https://navigateobscurity.com/data/migration" target="_blank">navigateobscurity.com/data/migration</a></p>
                </div>
            </div>
        </section>  
        <!-- sigma -->
        <section>
            <div class="diagonal-container before:bg-primary p-10 -mt-1">
                <div class="home-container text-offGray ">
                <h2 class="border-offGray">Sigma.js</h2>
                <p>Sigma is a javascript framework that specializes in creating interactive visualisations of network graphs. It works great on its own, or in combination with other network visualisation tools like Gephi.</p>
                <h4>Guns, germes, and steel: themes visualised.</h4>
                <va-nodes></va-nodes>
            </div>



            </div>
        </section>







                <!-- contact section -->
                <section>
            <div class="footer-container -mt-20 pb-5">
                <h2 class="border-offWhite text-offWhite">Contact</h2>
                <p class="text-offWhite">To get in touch, send me a message at hello@virtual-alchemist.com.</p>
                <ul class="flex justify-center pt-10">
                    <li class="bg-slate-50">
                        <a href="https://public.tableau.com/app/profile/hectorhs" target="_blank">
                            <nuxt-icon class="" name="tableau" filled></nuxt-icon>
                        </a>
                    </li>
                    <li class="bg-gray-600">
                        <a href="https://github.com/HectorHS" target="_blank">
                            <nuxt-icon class="" name="github"></nuxt-icon>
                        </a>
                    </li>
                    <li class="bg-gray-950">
                        <a href="https://codepen.io/HectorHS" target="_blank">
                            <nuxt-icon class="" name="codepen"></nuxt-icon>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="footer-end bg-offBlack text-center">
                <p class="text-gray-500 text-sm">Virtual Alchemist - 2023</p>
            </div>
        </section>

    </div>






</template>


<style scoped>

</style>