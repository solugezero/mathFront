// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ["~/components", "~/ui-kit"],
  },
  css: ["@/assets/scss/main.scss"],
});
