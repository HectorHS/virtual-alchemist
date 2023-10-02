<template>
  <a :href='link'>
    <button class="group relative overflow-hidden bg-primary/20 py-2 px-4 w-full border-primary border-4 mt-10">
      <div class="back absolute inset-0 w-0 transition-all duration-[250ms] ease-out group-hover:w-full bg-primary"></div>
      <span class="relative font-semibold tracking-wider group-hover:text-offWhite" :class="textHover">{{ text }} </span>
    </button>
  </a>

</template>

<script setup lang="ts">
defineProps<{
  link?: string,
  text?: string
  textHover?: string
}>()

</script>

<style scoped>
button span {
  font-size: clamp(1rem, 3.5vw, 1.rem);
}

</style>