
<template>
  <va-header></va-header>
    <div class="bg-four text-center bg-fixed">
    <!-- welcome -->
    <section>
        <div class="diagonal-container bg-one -mt-40 pt-40">
        <div class="home-container text-offGray ">
            <img class="h-auto logo-width mx-auto" src="/img/logo.png" alt="Virtual Alchemist logo" />
            <h1 class="font-bold mt-5 tracking-wider">Virtual Alchemist</h1>
            <p class="text-xl font-semibold">Transmutations in the digital world</p>
        </div>
    </div>

    </section>

    <!-- websites section -->
    <section>
        <div class="diagonal-container bg-two -mt-[1px]">
        <div class="home-container">
            <h2 class="border-primary text-primary">Website development</h2>
            <p class="text-offWhite">End to end website development. Follow the link below to see some examples.</p>
            <va-button link="websites" text="Explore websites" textColorHover="offGray" buttonColor="primary"></va-button>
        </div>
    </div>
    </section>

    <!-- visualisations section -->
    <section>
        <div class="diagonal-container bg-three -mt-[1px]">
        <div class="home-container">
            <h2 class="border-secondary text-secondary">Data visualisations</h2>
            <p>Data analysis and visualizations for the web and more. Follow the link below to see some examples.</p>
            <va-button link="visualisations" text="Explore visualisations" textColorHover="offWhite" buttonColor="secondary"></va-button>
        </div>
    <!-- </div> -->
    </div>
    </section>

    <!-- contact section -->
    <va-footer></va-footer>
</div>

</template>

<script setup>


</script>

<style lang="scss" scoped>


</style>