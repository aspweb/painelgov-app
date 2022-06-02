<template><div>
  <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">Receitas e despesas</h2>
  <v-container>
    <ccv-area-chart :data='teste' :options='options'></ccv-area-chart>
  </v-container>
</div></template>

<script>
import BaseComponent from '@/aspec-toolkit/mixins/BaseComponent.js'

export default {
  name: 'ReceitasDespesas',
  extends: BaseComponent,
  // components: {},
  props: {
    data: Object
  },
  data: () => ({
    options: {
      title: 'Area (discrete domain)',
      axes: {
        bottom: {
          title: '2019 Annual Sales Figures',
          mapsTo: 'key',
          scaleType: 'labels'
        },
        left: {
          mapsTo: 'value',
          title: 'Conversion rate',
          scaleType: 'linear'
        }
      },
      color: {
        scale: {
          Receitas: '#925699',
          Despesas: '#525669',
          'Dataset 3': '#725699',
          'Dataset 4': '#ccc'
        }
      },
      height: '300px'
    },
    teste: [
      {
        group: 'Receitas',
        value: 10000,
        key: 'JAN'
      },
      {
        group: 'Receitas',
        value: 65000,
        key: 'FEV'
      },
      {
        group: 'Receitas',
        value: 10000,
        key: 'MAR'
      },
      {
        group: 'Receitas',
        value: 49213,
        key: 'ABR'
      },
      {
        group: 'Receitas',
        value: 51213,
        key: 'MAI'
      },
      {
        group: 'Despesas',
        value: 20000,
        key: 'JAN'
      },
      {
        group: 'Despesas',
        value: 25000,
        key: 'FEV'
      },
      {
        group: 'Despesas',
        value: 60000,
        key: 'MAR'
      },
      {
        group: 'Despesas',
        value: 30213,
        key: 'ABR'
      },
      {
        group: 'Despesas',
        value: 55213,
        key: 'MAI'
      },
      {
        group: 'Dataset 3',
        value: 30000,
        key: 'JAN'
      },
      {
        group: 'Dataset 3',
        value: 20000,
        key: 'FEV'
      },
      {
        group: 'Dataset 3',
        value: 40000,
        key: 'MAR'
      },
      {
        group: 'Dataset 3',
        value: 60213,
        key: 'ABR'
      },
      {
        group: 'Dataset 3',
        value: 25213,
        key: 'MAI'
      }
    ]
  }),
  methods: {}
}
</script>
