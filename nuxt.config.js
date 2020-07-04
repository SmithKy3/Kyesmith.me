export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Kye Smith - Developer",
    meta: [{
        content: "text/html",
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },
  /*
   ** Global CSS
   */
  css: ["@/index.less"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/fragment",
    "@/plugins/rightMenu",
    "@/plugins/titleCard",
    "@/plugins/portfolio",
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxt/typescript-build",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-168726007-1",
        debug: {
          enabled: true,
          sendHitTask: true
        }
      }
    ],
    [
      "@nuxtjs/fontawesome",
      {
        component: "fa",
        suffix: false,
        icons: {
          solid: [
            "faOutdent",
            "faTimes",
            "faMoon",
            "faSun",
            "faHome",
            "faChevronLeft",
            "faEnvelope",
            "faFile",
            "faExternalLinkAlt",
            "faCode"
          ],
          brands: ["faGithub", "faLinkedin", "faInstagramSquare"]
        }
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
