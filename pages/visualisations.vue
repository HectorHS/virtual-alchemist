<script setup>
useHead({
  script: [
    {
      src: "https://d3js.org/d3-dsv.v1.min.js",
      tagPosition: 'head',
      type: "text/javascript",
    },
    {
      src: "https://d3js.org/d3-fetch.v1.min.js",
      tagPosition: 'head',
      type: "text/javascript",
    },
    {
      src: "https://code.highcharts.com/highcharts.js",
      type: "text/javascript",
      tagPosition: 'head'
    },
    {
      src: "https://code.highcharts.com/maps/modules/map.js",
      type: "text/javascript",
      tagPosition: 'head'
    },
    {
      src: "https://code.highcharts.com/mapdata/custom/world.js",
      type: "text/javascript",
      tagPosition: 'head'
    },
    {
      src: "https://code.highcharts.com/highcharts-more.js",
      type: "text/javascript",
      tagPosition: 'head'
    },
    {
      src: "https://code.highcharts.com/modules/sankey.js",
      type: "text/javascript",
      tagPosition: 'head'
    },
    {
      src: "https://code.highcharts.com/modules/dependency-wheel.js",
      type: "text/javascript",
      tagPosition: 'head'
    },

    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/sigma.js/1.2.2/sigma.require.min.js",
      type: "text/javascript",
      tagPosition: 'head'
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/sigma.js/1.2.2/plugins/sigma.parsers.gexf.min.js",
      type: "text/javascript",
      tagPosition: 'head'
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/sigma.js/1.2.2/plugins/sigma.renderers.parallelEdges.min.js",
      type: "text/javascript",
      tagPosition: 'head'
    },


  ]
})

</script>
<template>
  <va-header></va-header>
  <div class="bg-four text-center bg-fixed">
    <!-- highcharts -->
    <section>
      <div class="diagonal-container before:bg-offGray p-10 -mt-1 pb-28">
        <div class="viz-container text-offWhite ">
          <h2 class="">Highcharts.js</h2>
          <p>Highcharts is a great javascript framework to build all kinds of interactive data visualizations. You can see
            some examples below, or visit navigateobscurity.com to see more visualisations in context.</p>
        </div>
        <h4 class="pt-20 pb-10 text-offWhite relative">COVID-19 map for cases, deaths, vaccinations, and movement
          restrictions</h4>
        <va-covid-map></va-covid-map>
        <p class="text-right text-sm text-offWhite relative">Full visualization in context: <a class="text-link"
            href="https://navigateobscurity.com/data/covid-19" target="_blank">navigateobscurity.com/data/covid-19</a></p>
        <h4 class="pt-20 pb-10 text-offWhite relative">Global migration flow</h4>
        <va-wheel></va-wheel>
        <p class="text-right text-sm text-offWhite relative">Full visualization in context: <a class="text-link"
            href="https://navigateobscurity.com/data/migration" target="_blank">navigateobscurity.com/data/migration</a>
        </p>
      </div>
    </section>
    <!-- sigma -->
    <section>
      <div class="diagonal-container before:bg-primary p-10 -mt-1 pb-28">
        <div class="viz-container text-offGray ">
          <h2 class="border-offGray">Sigma.js</h2>
          <p>Sigma is a javascript framework that specializes in creating interactive visualisations of network graphs. It
            works great on its own, or in combination with other network visualisation tools like Gephi.</p>
        </div>
        <h4 class="mt-10 mb-5 text-offGray relative">Guns, germs, and steel - themes visualised.</h4>
        <va-nodes></va-nodes>
        <p class="text-right text-sm text-secondary relative">Full visualization in context: <a class="text-link"
            href="https://navigateobscurity.com/notes/guns-germs-and-steel"
            target="_blank">navigateobscurity.com/notes/guns-germs-and-steel</a></p>
      </div>
    </section>
    <!-- tableau -->
    <section>
      <div class="diagonal-container before:bg-offWhite p-10 -mt-1 pb-28">
        <div class="viz-container text-offGray ">
          <h2 class="border-offGray">Tableau</h2>
          <p>Tableau really shines as a desktop application as it can be used for quick data explorations and
            visualizations. But with a small sacrifice on performance it can also be used to embed data visualizations on
            the web. See some examples below.</p>
        </div>
        <va-tableau></va-tableau>
      </div>
    </section>
    <!-- photoshop -->
    <section>
      <div class="diagonal-container before:bg-offGray p-10 -mt-1 pb-28">
        <div class="viz-container text-offWhite ">
          <h2 class="border-offWhite">Illustrator/Photoshop</h2>
          <p>When the desired output is in a flat image format, we can combine any of the above tools with the power of 
            photo manipulation and illustration software. See some examples below.</p>
            <div class="flex flex-row mt-10">
              <img class="h-auto w-1/3 mx-auto" src="/img/flat1.jpg" alt="visualisation for scientific article" />
              <img class="h-auto w-1/3 mx-auto" src="/img/flat2.png" alt="visual summary of scientific article" />
            </div>
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


<style scoped></style>