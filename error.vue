<template>
<va-header></va-header>
    <div class="bg-four text-center bg-fixed">
    <!-- welcome -->
    <section>
        <div class="diagonal-container bg-one -mt-40 pt-40">
        <div class="home-container text-offGray ">
            <img class="h-auto error-logo-width mx-auto" src="/img/logo.png" alt="Virtual Alchemist logo" />
            <p class="text-2xl font-semibold mt-10">It looks like the page you are looking for does not exist!</p>
            <va-button link="/" text="Return to home" textColorHover="offWhite" buttonColor="offGray"></va-button>
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

<script setup>
  

</script>

<style>


</style>