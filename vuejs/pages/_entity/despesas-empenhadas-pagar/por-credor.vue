<template>
  <v-container v-cloak class="pt-8">

    <!-- header -->
    <v-container>
      <v-row class="px-2">
        <h1 class="font-weight-medium blue-grey--text text--darken-4 font-size-24 mb-10">
          <v-icon class="warning--text rounded-circle float-left mt-0 mr-2">
            mdi-book-open-page-variant
          </v-icon>
          Despesa Empenhada a Pagar
        </h1>
      </v-row>
    </v-container>

    <!-- chart -->
    <v-container>
      <v-row class="mb-12 px-2">
        <v-card elevation="0" class="pa-5 border-top" width="100%">
          <v-row>
            <v-col class="pa-0 px-3" md="auto">
              <v-card-title tag="h2" class="pa-0 text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium">Credores</v-card-title>
            </v-col>
            <v-col md="auto" class="pa-0 px-3 ml-auto mt-2">
              <span class="text-right font-size-14 text--darken-4">{{ credores.length }} maiores despesas por credores</span>
            </v-col>
          </v-row>

          <v-row>
            <v-col height="auto" cols="12">
              <ccv-treemap-chart :data="credores" :options="options"></ccv-treemap-chart>
            </v-col>
        </v-row>
      </v-card>
      </v-row>
    </v-container>

    <!-- table -->
    <v-container>
      <v-row class="flex-column mb-3 px-2">
        <h1 class="font-weight-medium lime--text text--darken-4 font-size-24 mb-4">Análise detalhada</h1>
        <v-card class="pt-3" elevation="0">
          <v-data-table
            :headers="tableHeaders"
            :items="tableItems"
            :items-per-page="-1"
            class="blue-grey--text text--darken-3"
            hide-default-footer
          />
        </v-card>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import lib from '@/aspec-toolkit/utils/lib'
import BaseView from '@/mixins/BaseView.js'
export default {
  layout: 'logged',
  mixins: [BaseView],
  data: () => ({
    credores: [
      { name: 'Secretaria de Estado da Educacao', value: 4549217377.4, showLabel: true },
      { name: 'Instituto de Previdencia do Estado de Santa Catarina', value: 2190634451.2, showLabel: true },
      { name: 'Secretaria de Estado da Fazenda', value: 796521427.36, showLabel: true },
      { name: 'Secretaria de Estado da Fazenda', value: 796521427.36, showLabel: true },
      { name: 'Policia Militar do Estado de Santa Catarina', value: 2257377238.8, showLabel: true },
      { name: 'Fundo Estadual de Saude', value: 1805899627.5, showLabel: true },
      { name: 'Fundo de Melhoria da Policia Civil - FUMPC', value: 1770153102.03, showLabel: true },
      { name: 'Fundo de Melhoria da Policia Civil - FUMPC', value: 769153102.03, showLabel: true },
      { name: 'Credenciado SC Saude - Pessoa Juridica', value: 715788262.16, showLabel: true },
      { name: 'Credenciado SC Saude - Pessoa Juridica', value: 715788262.16, showLabel: true }
    ],
    tableItems: [
      {
        legenda: 'Manutenção das Atividades do Hospital e Maternidade Antonina Aderaldo Castelo',
        empenhado: '12607749.41',
        liquidado: '12198704.92',
        pago: '11916174.6'
      },
      {
        legenda: 'Manutenção dos Serviços de Atenção Básica em Saúde',
        empenhado: '10017829.2',
        liquidado: '9405433.31',
        pago: '9267006.26'
      },
      {
        legenda: 'Manutenção da Rede de Serviços Especializados em Saúde',
        empenhado: '2124166.66',
        liquidado: '1989612.29',
        pago: '197688.7'
      },
      {
        legenda: 'Manutenção dos Serviços de Vigilância em Saúde',
        empenhado: '10017829.2',
        liquidado: '9405433.31',
        pago: '9267006.26'
      },
      {
        legenda: 'Manutenção das Atividades da Secretaria de Saúde',
        empenhado: '2.124.166,66',
        liquidado: '1.989.612,29',
        pago: '197.688,7'
      },
      {
        legenda: 'Conservação das Estradas Vicinais',
        empenhado: '10.017.829,2',
        liquidado: '9.405.433,31',
        pago: '9.267.006,26'
      },
      {
        legenda: 'Transferência para Consórcio Intermunicipal de Saúde',
        empenhado: '2.124.166,66',
        liquidado: '1.989.612,29',
        pago: '197.688,7'
      },
      {
        legenda: 'Construção, Ampliação e Reforma de Unida des Básicas de Saúde - USB',
        empenhado: '2.124.166,66',
        liquidado: '1.989.612,29',
        pago: '197.688,7'
      },
      {
        legenda: 'Serviços de Proteção Social Básica',
        empenhado: '10.017.829,2',
        liquidado: '9.405.433,31',
        pago: '9.267.006,26'
      },
      {
        legenda: 'Manutenção dos Serviços de Assistência Farmaceutica',
        empenhado: '2.124.166,66',
        liquidado: '1.989.612,29',
        pago: '197.688,7'
      }
    ]
  }),
  computed: {
    tableHeaders () {
      return [
        { text: 'Especificação', value: 'legenda' },
        { text: 'Empenhado', value: 'empenhado' },
        { text: 'Liquidado', value: 'liquidado' },
        { text: 'Pago', value: 'pago' }
      ]
    },
    options () {
      const colors = lib.getThemeColors(this.$vuetify.theme.themes.dark)
      const scale = []
      this.credores.forEach((obj, idx) => {
        const pos = idx % colors.length
        scale[obj.name] = colors[idx] || colors[pos]
      })
      return {
        width: '100%',
        height: '200px',
        toolbar: { enabled: false },
        color: { scale }
      }
    }
  }
}
</script>
