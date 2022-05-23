module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],

  // project custom rules
  rules: {
    curly: 'off', // allow code blocks without brackets (ex: "if" without {})
    'vue/valid-v-slot': ['error', { 'allowModifiers': true }], // fix template slot bug
    'brace-style': 'off', // ???
    'vue/singleline-html-element-content-newline': 'off', // blank lines in the html
    'vue/multiline-html-element-content-newline': 'off', // blank lines in the html
    'vue/padded-blocks': 'off' // allow put comments in the blocks start
  }
}
