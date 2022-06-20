<template>
  <v-container v-cloak class="pt-8">

    <!-- header -->
    <v-container>
      <v-row class="px-2">
        <h1 class="font-weight-medium blue-grey--text text--darken-4 font-size-24 mb-10 mr-5">
          <v-icon class="warning--text rounded-circle float-left mt-0 mr-2">
            mdi-chart-timeline-variant-shimmer
          </v-icon>
          Indicadores
        </h1>
        <v-col class="pa-0">
          <v-btn class="deep-purple--text text--lighten-2 text-capitalize">
            <v-icon class="warning--text rounded-circle float-left mt-0 mr-2">
            mdi-chart-timeline-variant-shimmer
            </v-icon>
            Receitas
          </v-btn>
          <v-btn class="mx-2 deep-purple--text text--lighten-2 text-capitalize">
            <v-icon class="warning--text rounded-circle float-left mt-0 mr-2">
            mdi-chart-timeline-variant-shimmer
            </v-icon>
            Despesas
          </v-btn>
          <v-btn class="mx-2 deep-purple--text text--lighten-2 text-capitalize">
            <v-icon class="warning--text rounded-circle float-left mt-0 mr-2">
            mdi-chart-timeline-variant-shimmer
            </v-icon>
            Folha
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- receitas e despesas chart -->
    <v-container>
      <v-card class="h-100 rounded-lg pa-3" elevation="0">
        <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">Comparativo das receitas e despesas orçamentárias</h2>
        <v-container v-for="items in comparativo" :key="items.id" class="pa-0">
          <ccv-area-chart v-if="items.id === 'ArrecadacaoEmpenho'" :data='items.data.chart' :options='items.options'></ccv-area-chart>
        </v-container>
      </v-card>
    </v-container>

  <!-- receitas chart -->
    <v-container>
      <v-row>
        <v-col v-for="items in receitas" :key="items.id" :cols="items.cols">
          <v-card class="h-100 rounded-lg pa-3" elevation="0" v-if="items.id === 'ReceitaMensal'">
            <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">Receita mensal</h2>
            <ccv-simple-bar-chart :data='items.data.chart' :options='items.options'></ccv-simple-bar-chart>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import BaseView from '@/mixins/BaseView.js'
import lib from '@/aspec-toolkit/utils/lib.js'
export default {
  name: 'Indicadores',
  layout: 'logged',
  mixins: [BaseView],
  computed: {
    ...mapGetters('integration/govtrans', [
      'entidade',
      'exercicios',
      'exercicio'
    ]),
    areasAtuacao () {
      const icon = 'mdi-currency-usd-off'
      return [
        { slug: 'saude', title: 'Saúde', icon, valueDesc: this.randomMoney() },
        { slug: 'educacao', title: 'Educação', icon, valueDesc: this.randomMoney() },
        { slug: 'administracao', title: 'Administração', icon, valueDesc: this.randomMoney() },
        { slug: 'assistencia-social', title: 'Assistência Social', icon, valueDesc: this.randomMoney() },
        { slug: 'gestao-ambiental', title: 'Gestão Ambiental', icon, valueDesc: this.randomMoney() }
      ]
    },
    comparativo () {
      return [
        {
          id: 'ArrecadacaoEmpenho',
          data: {
            chart: [
              { group: 'Arrecadação', val: 50, key: 'JAN' },
              { group: 'Arrecadação', val: 50, key: 'FEV' },
              { group: 'Arrecadação', val: 80, key: 'MAR' },
              { group: 'Arrecadação', val: 75, key: 'ABR' },
              { group: 'Arrecadação', val: 85, key: 'MAI' },
              { group: 'Arrecadação', val: 75, key: 'JUN' },
              { group: 'Arrecadação', val: 100, key: 'AGO' },
              { group: 'Arrecadação', val: 150, key: 'SET' },
              { group: 'Arrecadação', val: 130, key: 'OUT' },
              { group: 'Arrecadação', val: 200, key: 'NOV' },
              { group: 'Arrecadação', val: 220, key: 'DEZ' },
              { group: 'Empenho', val: 30, key: 'JAN' },
              { group: 'Empenho', val: 30, key: 'FEV' },
              { group: 'Empenho', val: 60, key: 'MAR' },
              { group: 'Empenho', val: 55, key: 'ABR' },
              { group: 'Empenho', val: 65, key: 'MAI' },
              { group: 'Empenho', val: 55, key: 'JUN' },
              { group: 'Empenho', val: 80, key: 'AGO' },
              { group: 'Empenho', val: 130, key: 'SET' },
              { group: 'Empenho', val: 110, key: 'OUT' },
              { group: 'Empenho', val: 180, key: 'NOV' },
              { group: 'Empenho', val: 200, key: 'DEZ' }
            ]
          },
          options: {
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
                Arrecadação: this.$vuetify.theme.themes.dark.info,
                Empenho: this.$vuetify.theme.themes.dark.secondary
              }
            },
            height: '200px'
          }
        }
      ]
    },
    receitas () {
      return [
        {
          id: 'ReceitaMensal',
          cols: 12,
          data: {
            chart: [
              { group: 'JAN', value: 280 },
              { group: 'FEV', value: 310 },
              { group: 'MAR', value: 280 },
              { group: 'ABR', value: 340 },
              { group: 'MAI', value: 280 },
              { group: 'JUL', value: 280 },
              { group: 'JUL', value: 280 },
              { group: 'AGO', value: 280 },
              { group: 'SET', value: 300 },
              { group: 'OUT', value: 0 },
              { group: 'NOV', value: 0 },
              { group: 'DEZ', value: 0 }
            ]
          },
          options: {
            title: '',
            toolbar: { enabled: false },
            height: '200px',
            axes: {
              left: {
                mapsTo: 'value'
              },
              bottom: {
                mapsTo: 'group',
                scaleType: 'labels'
              }
            }
            // color: {
            //   scale: {
            //     Arrecadação: this.$vuetify.theme.themes.dark.info,
            //     Empenho: this.$vuetify.theme.themes.dark.secondary
            //   }
            // }
          }
        }
      ]
    }
  },
  data: () => ({
    exer: null
  }),
  methods: {
    ...mapMutations('integration/govtrans', [
      'setExercicio'
    ]),
    randomMoney () { // TODO - retirar apos uso da API
      return lib.numberToMoney(lib.getRandomArbitrary(999, 999999999))
    }
  }
}
</script>
