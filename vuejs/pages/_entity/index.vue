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
          <v-btn class="white deep-purple--text text--lighten-2 text-capitalize" elevation="0">
            <v-icon class="warning--text rounded-circle float-left mt-0 mr-2">
            mdi-chart-timeline-variant-shimmer
            </v-icon>
            Receitas
          </v-btn>
          <v-btn class="white mx-2 deep-purple--text text--lighten-2 text-capitalize" elevation="0">
            <v-icon class="warning--text rounded-circle float-left mt-0 mr-2">
            mdi-chart-timeline-variant-shimmer
            </v-icon>
            Despesas
          </v-btn>
          <v-btn class="white mx-2 deep-purple--text text--lighten-2 text-capitalize" elevation="0">
            <v-icon class="warning--text rounded-circle float-left mt-0 mr-2">
            mdi-chart-timeline-variant-shimmer
            </v-icon>
            Folha
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- blocos -->
    <v-row class="px-3 pb-3">
      <v-col
        v-for="obj in blocks"
        :cols="obj.cols"
        :key="obj.title">

        <!-- titulo -->
        <h1 v-if="obj.type == 'title' || !obj.type" class="font-weight-medium lime--text text--darken-4 font-size-24">{{ obj.title }}</h1>

        <!-- simple bar chart -->
        <v-card
          v-if="obj.type === 'simple-bar-chart'"
          class="h-100 rounded-lg pa-3"
          elevation="0"
        >
          <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">{{ obj.title }}</h2>
          <ccv-simple-bar-chart
            v-if="obj.chart"
            :data='obj.chart.data'
            :options='obj.chart.options'
          ></ccv-simple-bar-chart>
        </v-card>

        <!-- pie chart -->
        <v-card
          v-if="obj.type === 'pie-chart'"
          class="h-100 rounded-lg pa-3"
          elevation="0"
        >
          <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">{{ obj.title }}</h2>
          <ccv-pie-chart
            v-if="obj.chart"
            :data='obj.chart.data'
            :options='obj.chart.options'
          ></ccv-pie-chart>
        </v-card>

        <!-- area chart -->
        <v-card
          v-if="obj.type === 'area-chart'"
          class="h-100 rounded-lg pa-3"
          elevation="0"
        >
          <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">{{ obj.title }}</h2>
          <ccv-area-chart
            v-if="obj.chart"
            :data="obj.chart.data"
            :options="obj.chart.options"
          ></ccv-area-chart>
        </v-card>

        <!-- links -->
        <v-card class="h-100 rounded-lg pa-3" elevation="0" v-if="obj.type === 'links'">
          <div class="d-flex align-center mb-5">
            <h2 class="text-uppercase font-size-12 black--text font-weight-medium mr-3">{{ obj.title }}</h2>
            <small class="font-size-13 lime--text text--darken-4">{{ obj.subtitle }}</small>
          </div>
          <div class="d-flex justify-center">
            <div v-for="despesas in obj.data" :key="despesas.slug" class="mr-4 rounded-lg pb-1">
              <div class="d-flex">
                <v-icon class="primary white--text rounded-circle float-left mr-2" dense>{{ despesas.icon }}</v-icon>
                <a class="text-decoration-none font-weight-medium primary--text font-size-15">
                  {{ despesas.title }}
                </a>
              </div>
              <p class="blue-grey--text text--lighten-1 font-weight-medium font-size-14 mb-0">
                <span class="font-size-12">R$</span>
                {{ despesas.valueDesc }}
              </p>
            </div>
          </div>
        </v-card>

        <!-- vertical grouped bar chart -->
        <v-card
          v-if="obj.type === 'vertical-grouped-bar-chart'"
          class="h-100 rounded-lg pa-3"
          elevation="0"
        >
          <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">{{ obj.title }}</h2>
          <ccv-grouped-bar-chart
            v-if="obj.chart"
            :data="obj.chart.data"
            :options="obj.chart.options"
          ></ccv-grouped-bar-chart>
        </v-card>

        <!-- horizontal grouped bar chart -->
        <v-card class="h-100 rounded-lg pa-3" elevation="0" v-if="obj.type === 'horizontal-grouped-bar-chart'">
          <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">{{ obj.title }}</h2>
          <ccv-grouped-bar-chart :data="obj.chart.data" :options="obj.chart.options"></ccv-grouped-bar-chart>
        </v-card>

        <!-- table -->
        <v-card class="h-100 rounded-lg pa-3" elevation="0" v-if="obj.type === 'table'">
          <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">{{ obj.title }}</h2>
          <v-data-table
            :headers="obj.data.headers"
            :items="obj.data.items"
            :items-per-page="-1"
            class="blue-grey--text text--darken-3"
            hide-default-footer
          />
        </v-card>

        <!-- line chart -->
        <v-card class="h-100 rounded-lg pa-3" elevation="0" v-if="obj.type === 'line-chart'">
          <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">{{ obj.title }}</h2>
          <ccv-line-chart :data="obj.chart.data" :options="obj.chart.options"></ccv-line-chart>
        </v-card>

      </v-col>
    </v-row>
    <!-- /blocos -->

    <!-- receitas chart -->
    <v-container class="mb-4">
      <h1 class="font-weight-medium lime--text text--darken-4 font-size-24 mb-4">Receitas</h1>
      <v-row>
        <v-col v-for="items in receitas" :key="items.id" :cols="items.cols">

          <!-- receita mensal -->
          <v-card class="h-100 rounded-lg pa-3" elevation="0" v-if="items.id === 'ReceitaMensal'">
            <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">Receita mensal</h2>
            <ccv-simple-bar-chart :data='items.data.chart' :options='items.options'></ccv-simple-bar-chart>
          </v-card>

          <!-- previsão arrecadação -->
          <v-card class="h-100 rounded-lg pa-3" elevation="0" v-if="items.id === 'PrevisaoArrecadacao'">
            <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">Previsão x Arrecadação</h2>
            <ccv-grouped-bar-chart :data='items.data.chart' :options='items.options'></ccv-grouped-bar-chart>
          </v-card>

          <!-- receita por origem -->
          <v-card class="h-100 rounded-lg pa-3" elevation="0" v-if="items.id === 'ReceitaOrcamentariaOrigem'">
            <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">Receita Orçamentária por Origem</h2>
            <div class="d-flex align-center mb-4">
              <small class="font-size-12 blue-grey--text text--lighten-1 font-weight-bold mt-1 mr-1">R$</small>
              <p class="font-size-20 light-green--text text-lighten-1 ma-0 font-weight-bold">97.755.202,47</p>
            </div>
            <ccv-pie-chart :data='items.data.chart' :options='items.options'></ccv-pie-chart>
          </v-card>

          <!-- receita de transferências -->
          <v-card class="h-100 rounded-lg pa-3" elevation="0" v-if="items.id === 'ReceitaTransferencias'">
            <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">Receita de Transferências</h2>
            <div class="d-flex align-center mb-4">
              <small class="font-size-12 blue-grey--text text--lighten-1 font-weight-bold mt-1 mr-1">R$</small>
              <p class="font-size-20 light-green--text text-lighten-1 ma-0 font-weight-bold">97.755.202,47</p>
            </div>
            <ccv-pie-chart :data='items.data.chart' :options='items.options'></ccv-pie-chart>
          </v-card>

          <!-- receita tributária -->
          <v-card class="h-100 rounded-lg pa-3" elevation="0" v-if="items.id === 'ReceitaTributaria'">
            <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">Receita Tributária</h2>
            <div class="d-flex align-center mb-4">
              <small class="font-size-12 blue-grey--text text--lighten-1 font-weight-bold mt-1 mr-1">R$</small>
              <p class="font-size-20 light-green--text text-lighten-1 ma-0 font-weight-bold">97.755.202,47</p>
            </div>
            <ccv-pie-chart :data='items.data.chart' :options='items.options'></ccv-pie-chart>
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
    receitas () {
      return [
        {
          id: 'ReceitaMensal',
          cols: 8,
          data: {
            chart: [
              { group: 'JAN', value: 280 },
              { group: 'FEV', value: 310 },
              { group: 'MAR', value: 280 },
              { group: 'ABR', value: 340 },
              { group: 'MAI', value: 280 },
              { group: 'JUN', value: 280 },
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
            },
            color: {
              scale: {
                JAN: this.$vuetify.theme.themes.dark.success,
                FEV: this.$vuetify.theme.themes.dark.success,
                MAR: this.$vuetify.theme.themes.dark.success,
                ABR: this.$vuetify.theme.themes.dark.success,
                MAI: this.$vuetify.theme.themes.dark.success,
                JUN: this.$vuetify.theme.themes.dark.success,
                JUL: this.$vuetify.theme.themes.dark.success,
                AGO: this.$vuetify.theme.themes.dark.success,
                SET: this.$vuetify.theme.themes.dark.success,
                OUT: this.$vuetify.theme.themes.dark.success,
                NOV: this.$vuetify.theme.themes.dark.success,
                DEZ: this.$vuetify.theme.themes.dark.success
              }
            }
          }
        }, {
          id: 'PrevisaoArrecadacao',
          cols: 4,
          data: {
            chart: [
              { group: 'Previsão', key: '2019', value: 75000000 },
              { group: 'Previsão', key: '2020', value: 95000000 },
              { group: 'Previsão', key: '2021', value: 100000000 },
              { group: 'Arrecadação', key: '2019', value: 100000000 },
              { group: 'Arrecadação', key: '2020', value: 85000000 },
              { group: 'Arrecadação', key: '2021', value: 90000000 }
            ]
          },
          options: {
            title: '',
            toolbar: { enabled: false },
            height: '200px',
            axes: {
              left: {
                mapsTo: 'key',
                scaleType: 'labels'
              },
              bottom: {
                mapsTo: 'value'
              }
            },
            color: {
              scale: {
                Previsão: this.$vuetify.theme.themes.dark.warning,
                Arrecadação: this.$vuetify.theme.themes.dark.success
              }
            }
          }
        }, {
          id: 'ReceitaOrcamentariaOrigem',
          cols: 4,
          data: {
            chart: [
              { group: 'Rec. Transferências', value: 47900049.2 },
              { group: 'Rec. de Contribuições', value: 37900049.2 },
              { group: 'Rec. Tributária', value: 10000000.2 }
            ]
          },
          options: {
            title: '',
            toolbar: { enabled: false },
            height: '200px',
            color: {
              scale: {
                'Rec. Transferências': this.$vuetify.theme.themes.dark.success,
                'Rec. de Contribuições': this.$vuetify.theme.themes.dark.accent,
                'Rec. Tributária': this.$vuetify.theme.themes.dark.info
              }
            },
            legend: { alignment: 'center' },
            pie: { alignment: 'center' }
          }
        }, {
          id: 'ReceitaTransferencias',
          cols: 4,
          data: {
            chart: [
              { group: 'FPM', value: 47900049.2 },
              { group: 'Educação', value: 37900049.2 },
              { group: 'Saúde', value: 10000000.2 }
            ]
          },
          options: {
            title: '',
            toolbar: { enabled: false },
            height: '200px',
            color: {
              scale: {
                FPM: this.$vuetify.theme.themes.dark.success,
                Educação: this.$vuetify.theme.themes.dark.accent,
                Saúde: this.$vuetify.theme.themes.dark.info
              }
            },
            legend: { alignment: 'center' },
            pie: { alignment: 'center' }
          }
        }, {
          id: 'ReceitaTributaria',
          cols: 4,
          data: {
            chart: [
              { group: 'Taxas', value: 47900049.2 },
              { group: 'IRRF', value: 37900049.2 },
              { group: 'ISS', value: 10000000.2 }
            ]
          },
          options: {
            title: '',
            toolbar: { enabled: false },
            height: '200px',
            color: {
              scale: {
                Taxas: this.$vuetify.theme.themes.dark.success,
                IRRF: this.$vuetify.theme.themes.dark.accent,
                ISS: this.$vuetify.theme.themes.dark.info
              }
            },
            legend: { alignment: 'center' },
            pie: { alignment: 'center' }
          }
        }
      ]
    },

    // blocos
    blocks () {
      const colors = this.$vuetify.theme.themes.dark
      const icon = 'mdi-currency-usd-off'
      return [

        // receitas e despesas
        {
          cols: 12,
          title: 'Comparativo Das Receitas E Despesas Orçamentárias',
          type: 'area-chart',
          chart: {
            data: [
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
            ],
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
                  Arrecadação: colors.info,
                  Empenho: colors.secondary
                }
              },
              height: '200px'
            }
          }
        },

        // despesas - titulo
        { cols: 12, title: 'Despesas' },

        // despesas - despesa por função
        {
          cols: 12,
          title: 'Despesa por função',
          subtitle: 'Despesas liquidadas por Função.',
          type: 'links',
          data: [
            { slug: 'saude', title: 'Saúde', icon, valueDesc: this.randomMoney() },
            { slug: 'educacao', title: 'Educação', icon, valueDesc: this.randomMoney() },
            { slug: 'administracao', title: 'Administração', icon, valueDesc: this.randomMoney() },
            { slug: 'assistencia-social', title: 'Assistência Social', icon, valueDesc: this.randomMoney() },
            { slug: 'gestao-ambiental', title: 'Gestão Ambiental', icon, valueDesc: this.randomMoney() }
          ]
        },

        // despesas - despesa mensal
        {
          cols: 8,
          title: 'Despesa mensal',
          type: 'vertical-grouped-bar-chart',
          chart: {
            data: [
              { group: 'Empenhados', key: 'JAN', value: 350 },
              { group: 'Empenhados', key: 'FEV', value: 50 },
              { group: 'Empenhados', key: 'MAR', value: 110 },
              { group: 'Empenhados', key: 'ABR', value: 60 },
              { group: 'Empenhados', key: 'MAI', value: 120 },
              { group: 'Empenhados', key: 'JUL', value: 50 },
              { group: 'Empenhados', key: 'JUN', value: 280 },
              { group: 'Empenhados', key: 'AGO', value: 50 },
              { group: 'Empenhados', key: 'SET', value: 70 },
              { group: 'Empenhados', key: 'OUT', value: 130 },
              { group: 'Empenhados', key: 'NOV', value: 50 },
              { group: 'Empenhados', key: 'DEZ', value: 140 },
              { group: 'Liquidados', key: 'JAN', value: 80 },
              { group: 'Liquidados', key: 'FEV', value: 90 },
              { group: 'Liquidados', key: 'MAR', value: 200 },
              { group: 'Liquidados', key: 'ABR', value: 110 },
              { group: 'Liquidados', key: 'MAI', value: 130 },
              { group: 'Liquidados', key: 'JUL', value: 115 },
              { group: 'Liquidados', key: 'JUN', value: 200 },
              { group: 'Liquidados', key: 'AGO', value: 210 },
              { group: 'Liquidados', key: 'SET', value: 180 },
              { group: 'Liquidados', key: 'OUT', value: 160 },
              { group: 'Liquidados', key: 'NOV', value: 140 },
              { group: 'Liquidados', key: 'DEZ', value: 50 },
              { group: 'Pagos', key: 'JAN', value: 70 },
              { group: 'Pagos', key: 'FEV', value: 60 },
              { group: 'Pagos', key: 'MAR', value: 10 },
              { group: 'Pagos', key: 'ABR', value: 100 },
              { group: 'Pagos', key: 'MAI', value: 200 },
              { group: 'Pagos', key: 'JUL', value: 150 },
              { group: 'Pagos', key: 'JUN', value: 170 },
              { group: 'Pagos', key: 'AGO', value: 160 },
              { group: 'Pagos', key: 'SET', value: 160 },
              { group: 'Pagos', key: 'OUT', value: 110 },
              { group: 'Pagos', key: 'NOV', value: 50 },
              { group: 'Pagos', key: 'DEZ', value: 200 }
            ],
            options: {
              title: '',
              toolbar: { enabled: false },
              height: '200px',
              axes: {
                left: {
                  mapsTo: 'value'
                },
                bottom: {
                  scaleType: 'labels',
                  mapsTo: 'key'
                }
              },
              color: {
                scale: {
                  Empenhados: this.$vuetify.theme.themes.dark.warning,
                  Liquidados: this.$vuetify.theme.themes.dark.success,
                  Pagos: this.$vuetify.theme.themes.dark.info
                }
              }
            }
          }
        },

        // despesas - fixação x execução
        {
          cols: 4,
          title: 'Fixação x Execução',
          type: 'horizontal-grouped-bar-chart',
          chart: {
            data: [
              { group: 'Fixação', key: '2019', value: 75000000 },
              { group: 'Fixação', key: '2020', value: 95000000 },
              { group: 'Fixação', key: '2021', value: 100000000 },
              { group: 'Execução', key: '2019', value: 100000000 },
              { group: 'Execução', key: '2020', value: 85000000 },
              { group: 'Execução', key: '2021', value: 90000000 }
            ],
            options: {
              title: '',
              toolbar: { enabled: false },
              height: '200px',
              axes: {
                left: {
                  mapsTo: 'key',
                  scaleType: 'labels'
                },
                bottom: {
                  mapsTo: 'value'
                }
              },
              color: {
                scale: {
                  Fixação: this.$vuetify.theme.themes.dark.warning,
                  Execução: this.$vuetify.theme.themes.dark.success
                }
              }
            }
          }
        },

        // despesas - gastos por elemento de despesa
        {
          cols: 12,
          title: 'Gastos por elemento de despesa',
          type: 'table',
          data: {
            headers: [
              { text: 'Elemento de despesa', value: 'elemento' },
              { text: '2021', value: '2021' },
              { text: '%', value: 'percent2021' },
              { text: '2020', value: '2020' },
              { text: '%', value: 'percent2020' }
            ],
            items: [
              {
                elemento: 'Obrigações Patronais',
                2021: '3.805.245,11',
                percent2021: '10,72',
                2020: '3.436.744,8',
                percent2020: '66,03'
              },
              {
                elemento: 'Obrigações Patronais',
                2021: '3.805.245,11',
                percent2021: '10,72',
                2020: '3.436.744,8',
                percent2020: '66,03'
              },
              {
                elemento: 'Despesas de Exercícios Anteriores - Pessoal',
                2021: '28.822,04',
                percent2021: '0,0',
                2020: '0,00',
                percent2020: '0,0'
              },
              {
                elemento: 'Material de Consumo',
                2021: '1.592.546,0',
                percent2021: '2,70',
                2020: '1.550.628,19',
                percent2020: '26,27'
              },
              {
                elemento: 'Outros Serviços de Terceiros - Pessoa Física',
                2021: '267.793,0',
                percent2021: '-29,18',
                2020: '378.146,74',
                percent2020: '-5,30'
              },
              {
                elemento: 'Outros Serviços de Terceiros - Pessoa Jurídica',
                2021: '5.638.550,4',
                percent2021: '-6,08',
                2020: '6.003.701,77',
                percent2020: '5,65'
              },
              {
                elemento: 'Despesas de Exercícios Anteriores',
                2021: '89.236,14',
                percent2021: '-85,61',
                2020: '620.255,52',
                percent2020: '14,46'
              },
              {
                elemento: 'Obras e Instalações',
                2021: '1.465.690,4',
                percent2021: '46,25',
                2020: '1.002.187,31',
                percent2020: '17,71'
              },
              {
                elemento: 'Equipamentos e Material Permanente',
                2021: '146.359,10',
                percent2021: '-79,69',
                2020: '720.456,91',
                percent2020: '50,72'
              }
            ]
          }
        },

        // despesas - procedimentos administrativos
        {
          cols: 6,
          title: 'Procedimentos administrativos para aquisição de bens e serviços',
          type: 'pie-chart',
          chart: {
            data: [{ group: 'Taxas', value: 47900049.2 }, { group: 'IRRF', value: 37900049.2 }, { group: 'ISS', value: 10000000.2 }],
            options: {
              title: '',
              height: '200px',
              legend: { alignment: 'center' },
              pie: { alignment: 'center' },
              toolbar: { enabled: false },
              color: { scale: { Taxas: colors.success, IRRF: colors.accent, ISS: colors.info } }
            }
          }
        },

        // despesas - processos licitatórios
        {
          cols: 6,
          title: 'Processos licitatórios: Pagamentos por modalidade de licitação',
          type: 'pie-chart',
          chart: {
            data: [{ group: 'Taxas', value: 47900049.2 }, { group: 'IRRF', value: 37900049.2 }, { group: 'ISS', value: 10000000.2 }],
            options: {
              title: '',
              height: '200px',
              legend: { alignment: 'center' },
              pie: { alignment: 'center' },
              toolbar: { enabled: false },
              color: { scale: { Taxas: colors.success, IRRF: colors.accent, ISS: colors.info } }
            }
          }
        },

        // despesas - despesa mensal por exercício
        {
          cols: 12,
          title: 'Despesa mensal por exercício',
          type: 'line-chart',
          chart: {
            data: [
              { group: '2021', key: 'JAN', value: 100 },
              { group: '2021', key: 'FEV', value: 200 },
              { group: '2021', key: 'MAR', value: 180 },
              { group: '2021', key: 'ABR', value: 270 },
              { group: '2021', key: 'MAI', value: 250 },
              { group: '2021', key: 'JUN', value: 220 },
              { group: '2021', key: 'JUL', value: 140 },
              { group: '2021', key: 'AGO', value: 130 },
              { group: '2021', key: 'SET', value: 150 },
              { group: '2021', key: 'OUT', value: 170 },
              { group: '2021', key: 'NOV', value: 300 },
              { group: '2021', key: 'DEZ', value: 200 },
              { group: '2020', key: 'JAN', value: 150 },
              { group: '2020', key: 'FEV', value: 110 },
              { group: '2020', key: 'MAR', value: 50 },
              { group: '2020', key: 'ABR', value: 80 },
              { group: '2020', key: 'MAI', value: 20 },
              { group: '2020', key: 'JUN', value: 140 },
              { group: '2020', key: 'JUL', value: 150 },
              { group: '2020', key: 'AGO', value: 130 },
              { group: '2020', key: 'SET', value: 250 },
              { group: '2020', key: 'OUT', value: 300 },
              { group: '2020', key: 'NOV', value: 100 },
              { group: '2020', key: 'DEZ', value: 130 },
              { group: '2019', key: 'JAN', value: 80 },
              { group: '2019', key: 'FEV', value: 20 },
              { group: '2019', key: 'MAR', value: 150 },
              { group: '2019', key: 'ABR', value: 30 },
              { group: '2019', key: 'MAI', value: 80 },
              { group: '2019', key: 'JUN', value: 70 },
              { group: '2019', key: 'JUL', value: 20 },
              { group: '2019', key: 'AGO', value: 270 },
              { group: '2019', key: 'SET', value: 220 },
              { group: '2019', key: 'OUT', value: 250 },
              { group: '2019', key: 'NOV', value: 130 },
              { group: '2019', key: 'DEZ', value: 140 }
            ],
            options: {
              title: '',
              toolbar: { enabled: false },
              height: '200px',
              axes: {
                left: {
                  mapsTo: 'value',
                  scaleType: 'linear'
                },
                bottom: {
                  scaleType: 'labels',
                  mapsTo: 'key'
                }
              },
              color: {
                scale: {
                  2021: this.$vuetify.theme.themes.dark.warning,
                  2020: this.$vuetify.theme.themes.dark.success,
                  2019: this.$vuetify.theme.themes.dark.info
                }
              }
            }
          }
        },

        // folha - titulo
        { cols: 12, title: 'Folha' },

        // folha - pagamento
        {
          cols: 8,
          title: 'Folha de pagamento - vencimentos e vantagens',
          type: 'simple-bar-chart',
          chart: {
            data: [
              { group: 'JAN', value: 280 }, { group: 'FEV', value: 310 }, { group: 'MAR', value: 280 }, { group: 'ABR', value: 340 }, { group: 'MAI', value: 280 }, { group: 'JUN', value: 280 }, { group: 'JUL', value: 280 }, { group: 'AGO', value: 280 }, { group: 'SET', value: 300 }, { group: 'OUT', value: 0 }, { group: 'NOV', value: 0 }, { group: 'DEZ', value: 0 }
            ],
            options: {
              title: '',
              toolbar: { enabled: false },
              height: '200px',
              axes: {
                left: { mapsTo: 'value' },
                bottom: { mapsTo: 'group', scaleType: 'labels' }
              },
              color: {
                scale: { JAN: colors.success, FEV: colors.success, MAR: colors.success, ABR: colors.success, MAI: colors.success, JUN: colors.success, JUL: colors.success, AGO: colors.success, SET: colors.success, OUT: colors.success, NOV: colors.success, DEZ: colors.success }
              }
            }
          }
        },

        // folha - vinculo funcional
        {
          cols: 4,
          title: 'Folha por vínculo funcional',
          type: 'pie-chart',
          chart: {
            data: [{ group: 'Taxas', value: 47900049.2 }, { group: 'IRRF', value: 37900049.2 }, { group: 'ISS', value: 10000000.2 }],
            options: {
              title: '',
              height: '200px',
              legend: { alignment: 'center' },
              pie: { alignment: 'center' },
              toolbar: { enabled: false },
              color: { scale: { Taxas: colors.success, IRRF: colors.accent, ISS: colors.info } }
            }
          }
        },

        // folha - diarias
        {
          cols: 8,
          title: 'Diárias',
          type: 'simple-bar-chart',
          chart: {
            data: [
              { group: 'JAN', value: 280 }, { group: 'FEV', value: 310 }, { group: 'MAR', value: 280 }, { group: 'ABR', value: 340 }, { group: 'MAI', value: 280 }, { group: 'JUN', value: 280 }, { group: 'JUL', value: 280 }, { group: 'AGO', value: 280 }, { group: 'SET', value: 300 }, { group: 'OUT', value: 0 }, { group: 'NOV', value: 0 }, { group: 'DEZ', value: 0 }
            ],
            options: {
              title: '',
              toolbar: { enabled: false },
              height: '200px',
              axes: {
                left: { mapsTo: 'value' },
                bottom: { mapsTo: 'group', scaleType: 'labels' }
              },
              color: {
                scale: { JAN: colors.success, FEV: colors.success, MAR: colors.success, ABR: colors.success, MAI: colors.success, JUN: colors.success, JUL: colors.success, AGO: colors.success, SET: colors.success, OUT: colors.success, NOV: colors.success, DEZ: colors.success }
              }
            }
          }
        },

        // folha - agentes por unidade
        {
          cols: 4,
          title: 'Quantidade de agentes por unidade orçamentária',
          type: 'pie-chart',
          chart: {
            data: [{ group: 'Taxas', value: 47900049.2 }, { group: 'IRRF', value: 37900049.2 }, { group: 'ISS', value: 10000000.2 }],
            options: {
              title: '',
              height: '200px',
              legend: { alignment: 'center' },
              pie: { alignment: 'center' },
              toolbar: { enabled: false },
              color: { scale: { Taxas: colors.success, IRRF: colors.accent, ISS: colors.info } }
            }
          }
        },

        // folha - MENSAL PAGAMENTO VENCIMENTOS VANTAGENS
        {
          cols: 12,
          title: 'Despesa mensal com folha de pagamento - vencimentos e vantagens - por exercício',
          type: 'area-chart',
          chart: {
            data: [
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
            ],
            options: {
              title: '',
              toolbar: { enabled: false },
              axes: {
                bottom: { title: '', mapsTo: 'key', scaleType: 'labels' },
                left: { mapsTo: 'val', title: '', scaleType: 'linear' }
              },
              color: { scale: { Arrecadação: colors.info, Empenho: colors.secondary } },
              height: '200px'
            }
          }
        }

      ]
    }
    // END - blocos

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
