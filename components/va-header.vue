<template>
    <div class="">
    <div class="diagonal-container bg-three px-20 pt-40 -mt-40 h-56 text-offGray z-10" :class="{ 'absolute w-full h-screen top-0 left-0': menu }">
      <div class="container sm:mx-auto p-2 flex flex-wrap justify-between">
        <div class="w-auto z-10">
          <!-- Logo -->
          <img class="h-auto max-w-xs w-14" src="/img/logo.png" alt="Virtual Alchemist logo" />
        </div>
        <!-- Desktop nav list -->
        <nav class="hidden sm:block m-0">
          <ul class="flex">
            <li
              v-for="(item, index) in items"
              :key="index"
            >
              <a :href="item.href" class="px-3 font-semibold relative before:absolute before:w-full before:h-[3px] tracking-wide
    before:-bottom-1 before:left-0 before:bg-offGray
    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
    before:transition before:ease-in-out before:duration-300">{{ item.title }}</a>
            </li>
          </ul>
        </nav>
        <!-- Toggle menu mobile icon -->
        <div class="ml-auto sm:hidden p-6 -mt-2" @click="menu = !menu">
          <div class="nav-mobile">
                <a id="nav_hamburger" href="#!" class="cursor-pointer" :class="menu ? 'active' : ''">
                    <span class="bg-offGray absolute block transition-all h-[5px] w-9 
                                before:bg-offGray before:absolute before:block before:transition-all before:h-[5px] before:w-9 before:-top-3
                                after:bg-offGray after:absolute after:block after:transition-all after:h-[5px] after:w-9 after:-bottom-3">
                    </span>
                </a>
            </div>
        </div>
      </div>
      <!-- Mobile nav list -->
      <nav v-show="menu" class="w-full">
        <ul class="flex flex-col text-center">
          <li class="bg-white/75 border-b-2 border-offGray font-semibold sm:bg-none" v-for="(item, index) in items"
            :key="index">
            <a :href="item.href" class=" p-6 block">{{ item.title }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menu: false,
        items: [
          {
            title: 'Home',
            href: '/'
          },
          {
            title: 'Websites',
            href: '/websites'
          },
          {
            title: 'Visualisations',
            href: '/visualisations'
          },
        ]
      }
    },
  }

  </script>
<style lang="scss" scoped>
//Mobile menu hamburger
#nav_hamburger.active span {
  background-color: transparent;
  &:before {
    top: 0;
    transform: (rotate(45deg));
  }
  &:after {
    top: 0;
    transform: (rotate(-45deg));
  }
}
</style>