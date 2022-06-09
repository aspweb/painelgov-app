<template><div class="component-receitas-despesas">
  <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">Receitas e despesas</h2>
  <v-container class="pa-0">
    <ccv-area-chart :data='data.chart' :options='options'></ccv-area-chart>
  </v-container>
</div></template>

<script>
import BaseComponent from '@/aspec-toolkit/mixins/BaseComponent.js'

export default {
  name: 'ReceitasDespesas',
  extends: BaseComponent,
  props: {
    data: Object
  },
  computed: {
    options () {
      return {
        title: '',
        toolbar: { enabled: false },
        axes: {
          bottom: {
            title: '',
            mapsTo: 'key',
            scaleType: 'labels'
          },
          left: {
            mapsTo: 'val',
            title: '',
            scaleType: 'linear'
          }
        },
        color: {
          scale: {
            Receitas: this.$vuetify.theme.themes.dark.info,
            Despesas: this.$vuetify.theme.themes.dark.secondary
          }
        },
        height: '200px'
      }
    }
  },
  methods: {}
}
</script>

<style>
  .component-receitas-despesas .cds--cc--legend .legend-item .checkbox {border-radius: 50%;}
</style>
