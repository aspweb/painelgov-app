import colors from 'vuetify/es5/util/colors'

const appColors = {
  primary: '#A69FE4',
  secondary: '#99BE8A',
  accent: colors.grey.darken3,
  info: '#94D6EB',
  warning: '#E9BE3E',
  error: colors.deepOrange.accent2,
  success: '#99BE8A'
}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,
  mode: 'spa',

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - gtrel',
    title: 'gtrel',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
    // css: [
    //   '~/assets/style/app.styl',
    //   '~/assets/style/main.css'
    // ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/app.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/',
    { path: '~/components/pages/', extensions: ['vue'] },
    { path: '~/components/indicadores/', extensions: ['vue'] },
    { path: '~/components/indicadores/blocos/', extensions: ['vue'] },

    // Aspec Toolkit
    { path: '~/aspec-toolkit/components', extensions: ['vue'] }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://www.npmjs.com/package/@nuxtjs/moment
    '@nuxtjs/moment'
    // ['@nuxtjs/moment', { /* module options */ }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', // https://go.nuxtjs.dev/axios
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'https://www.governotransparente.com.br/transparencia/api/v1/json'
    // baseURL: 'https://www.governotransparente.com.br/portal/api/v1/json'
  },

  // disable pre-load links for prevent BUGS on routes and timers
  router: { prefetchLinks: false },
  render: { resourceHints: false },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      dark: false,
      sepia: false,
      themes: {
        dark: appColors,
        light: appColors,
        sepia: { // TODO - setar option na view ...
          primary: 'purple',
          secondary: 'gold',
          accent: 'pink',
          info: 'blue',
          warning: 'orange',
          error: 'red',
          success: 'green'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
