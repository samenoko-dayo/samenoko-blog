import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },

  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ['/', '/blog']
    }
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
  content: {
    build: {
      markdown: {
        remarkPlugins: {
          "remark-breaks": {},
          "remark-gfm": {},
          "remark-link-card-plus": {
            cache: true,
            shortenUrl: true,
          },
        },
        highlight: {
          theme: "catppuccin-macchiato",
          langs: [
            "shell",
            "bash",
            "zsh",
            "python",
            "powershell",
            "sh",
            "json",
            "javascript",
            "typescript",
            "yaml",
            "yml",
          ],
        },
      },
    },
    renderer: {
      anchorLinks: {
        h1: false,
        h2: false,
        h3: false,
        h4: false,
        h5: false,
        h6: false,
      },
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/icon"
  ],
  image: {
    format: ["webp", "avif"],
    quality: 80,
  },
})