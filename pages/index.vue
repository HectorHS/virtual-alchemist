
<template>
  <va-header></va-header>
    <div class="bg-four text-center bg-fixed">
    <!-- welcome -->
    <section>
        <div class="diagonal-container bg-one -mt-40 pt-40">
        <div class="home-container text-offWhite ">
            <img class="h-auto logo-width mx-auto" src="../assets/img/logo.png" alt="Virtual Alchemist logo" />
            <h1 class="font-bold mt-5 tracking-wider">Virtual Alchemist</h1>
            <p>Transmutations in the digital world.</p>
        </div>
    </div>

    </section>

    <!-- websites section -->
    <section>
        <div class="diagonal-container bg-two -mt-[1px]">
        <div class="home-container">
            <h2 class="border-primary text-primary">Website development</h2>
            <p class="text-offWhite">End to end website development. Follow the link below to see some examples.</p>
            <va-button link="websites" text="Explore websites" textHover="text-offWhite"></va-button>
        </div>
    </div>
    </section>

    <!-- visualisations section -->
    <section>
        <div class="diagonal-container bg-three -mt-[1px]">
        <div class="home-container">
            <h2 class="border-primary text-primary">Data visualisations</h2>
            <p>Data analysis and visualizations for the web and more. Follow the link below to see some examples.</p>
            <va-button link="visualisations" text="Explore visualisations" textHover="text-primary"></va-button>
        </div>
    <!-- </div> -->
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

<script setup>


</script>

<style lang="scss" scoped>


</style>