# Nuxt Starter

This starter uses [Nuxt Content](https://nuxt.com/modules/content), [TailwindCSS](https://nuxt.com/modules/tailwindcss), [Nuxt Icon](https://nuxt.com/modules/icon), [VueUse](https://vueuse.org/guide/), [Nuxt Image](https://v1.image.nuxtjs.org) and [Nuxt Icon](https://github.com/nuxt-modules/icon).

## Get started quickly

Add files to the `content` folder to add more routes. Read more in the [Nuxt Content documentation](https://content.nuxtjs.org/guide)

Also try installing [Headless UI](https://nuxt.com/modules/headlessui) for easy to use UI components.

### Add Icons

Add icons like this:

```vue
<Icon name="ic:baseline-airplanemode-active" />
<Icon name="🚀" />
```

Results:
:icon{name="ic:baseline-airplanemode-active"}
:icon{name="🚀"}

Find the [full list here](https://icones.js.org).

### Add styling with TailwindCSS

Use either the built-in Tailwind Viewer (typically http://localhost:3000/_tailwind/) or find the [docs](https://tailwindcss.com/docs/installation) here.

You can also check out the [TailwindUI](https://tailwindui.com) for easy to use UI elements.

### Add images with Nuxt Image

You can add optimized images with a drop-in replacement for the `<img>` tag like this:

```vue
<nuxt-img src="https://source.unsplash.com/random" alt="Random unsplash image" />
```

Read more in the [documentation.](https://v1.image.nuxtjs.org)