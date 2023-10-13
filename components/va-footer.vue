<template>
<section>
    <div class="footer-container -mt-20 pb-5 pt-52 base-padding relative">
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
                    <nuxt-icon class="text-lg h-6 w-6" name="github"></nuxt-icon>
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

</template>

<script>

</script>

<style>
  .footer-container li {
    @apply text-offWhite p-3 mx-3 rounded-full shadow-lg shadow-black transition-all relative top-0;
  }
  .footer-container li:hover {
    top:-5px;
  }
  /* purgecss ignore */
  .footer-container svg{
    height: 2rem;
    width: 2rem;
  }

</style>