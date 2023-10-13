// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icons',
  ],
  app: {
    head: {
      title: 'Virtual Alchemist',
      meta: [
        { name: 'description', content: 'Web development and data visualizations'},
        { name: "og:image", content:"https://www.virtual-alchemist.com/img/logo.png" },
        { name:"og:title", content:"Virtual Alchemist"},
        { name:"og:url", content:"https://www.virtual-alchemist.com"},
        { name:"twitter:card", content:"summary"},
        { name:"twitter:url", content:"https://www.virtual-alchemist.com"},
        { name:"twitter:title", content:"Virtual Alchemist"},
        { name:"twitter:description", content:"Web development and data visualizations"},
        { name:"twitter:image", content:"https://www.virtual-alchemist.com/img/logo.png"}
      ]
    }
  }
})
