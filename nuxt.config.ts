// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content', 
        '@vueuse/nuxt',
        '@nuxt/image-edge',
        'nuxt-icon'
    ],
    css: ['@/assets/global.scss'],
    //@ts-ignore-next-line
    image: {
        domains: ['unsplash.com']
    }
})
