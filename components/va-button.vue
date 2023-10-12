<template>
  <a :href='link'>
    <button class="group relative overflow-hidden py-2 px-4 w-full border-4 mt-10" :class="border, backgr">
      <div class="back absolute inset-0 w-0 transition-all duration-[250ms] ease-out group-hover:w-full" :class="backHover"></div>
      <span class="relative font-semibold tracking-wider" :class="txtCl, txtClHov">{{ text }} </span>
    </button>
  </a>
  <!-- hack otherwise we are missing these css classes -->
<span class="hidden bg-secondary"></span>
</template>

<script setup lang="ts">
const props = defineProps<{
  link?: string,
  text?: string,
  textColorHover?: string,
  buttonColor?:string
}>()

let border:string  = "border-" + props.buttonColor;
let backgr:string = "bg-" + props.buttonColor + "/20";
let backHover:string = "bg-" + props.buttonColor;
let txtCl:string = "text-" + props.buttonColor;
let txtClHov:string = "group-hover:text-" + props.textColorHover;

</script>

<style scoped>
button span {
  font-size: clamp(1rem, 3.5vw, 1.rem);
}

</style>