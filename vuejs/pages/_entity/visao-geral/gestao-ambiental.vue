<template>
  <v-container v-cloak class="pt-10 px-8">

    <!-- header -->
    <v-row>
      <h1 class="font-weight-medium blue-grey--text text--darken-4 font-size-24">
        Gestão Ambiental
      </h1>
    </v-row>

    <!-- timeline -->
    <v-row>
      <v-col class="px-0 py-3">
        <v-card class="h-100 rounded-lg pa-3" elevation="0">
          <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">Despesas orçamentárias por função: Saúde</h2>
          <v-row>
            <v-col v-for="(step, $i) in steps" :key="$i">
              <!-- <v-icon :class="[(step.color + '--text')]">mdi-arrow-collapse-right</v-icon> -->
              <v-icon :class="[(step.color + '--text')]">mdi-arrow-right-circle</v-icon>
              <p class="blue-grey--text text--lighten-1 font-size-12 mb-0">
                <span>{{ step.title }}</span>
                <span v-if="step.percent" class="error--text">{{ step.percent }}%</span><br>
                R$
                <span :class="[(step.color + '--text')]" class="font-size-20 font-weight-bold">
                  {{ step.val }}
                </span>
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- charts -->
    <v-row>
      <v-col class="px-0 py-3">
        <v-card class="h-100 rounded-lg pa-3" elevation="0">
          <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">Pagamentos orçamentários por subfunção</h2>
          <ccv-pie-chart :data='subfuncao' :options='options'></ccv-pie-chart>
        </v-card>
      </v-col>
      <v-col class="px-2 py-3">
        <v-card class="h-100 rounded-lg pa-3" elevation="0">
          <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">Pagamentos orçamentários por programa</h2>
          <ccv-pie-chart :data='programa' :options='options'></ccv-pie-chart>
        </v-card>
      </v-col>
    </v-row>

    <!-- table -->
    <v-row>
      <v-col class="px-0 py-3">
        <v-card class="h-100 rounded-lg" elevation="0">
          <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium pa-3 mb-1">Pagamentos orçamentários por Projeto/Atividade</h2>
          <v-data-table
            :headers="tableHeaders"
            :items="tableItems"
            :items-per-page="-1"
            class="blue-grey--text text--darken-3"
            hide-default-footer
          />
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import lib from '@/aspec-toolkit/utils/lib'
import BaseView from '@/mixins/BaseView.js'
export default {
  layout: 'logged',
  mixins: [BaseView],
  computed: {
    options () {
      const colors = lib.getThemeColors(this.$vuetify.theme.themes.dark)
      const scale = []
      this.subfuncao.forEach((obj, idx) => {
        const pos = idx % colors.length
        scale[obj.group] = colors[idx] || colors[pos]
      })
      this.programa.forEach((obj, idx) => {
        const pos = idx % colors.length
        scale[obj.group] = colors[idx] || colors[pos]
      })
      return {
        toolbar: { enabled: false },
        resizable: true,
        legend: { alignment: 'center' },
        pie: { alignment: 'center' },
        height: '200px',
        color: { scale }
      }
    },
    tableHeaders () {
      return [
        { text: 'Especificação', value: 'legenda', sortable: false },
        { text: 'Empenhado', value: 'empenhado', sortable: false },
        { text: 'Liquidado', value: 'liquidado', sortable: false },
        { text: 'Pago', value: 'pago', sortable: false }
      ]
    }
  },
  data: () => ({
    steps: [
      { title: 'Fixado', val: '23.421.142,00', color: 'primary' },
      { title: 'Autorizado', val: '30.522.953,44', color: 'warning' },
      { title: 'Empenhado', val: '29.051.873,01 ', color: 'warning' },
      { title: 'Liquidado', val: '29.051.873,01', color: 'success' },
      { title: 'Pago', val: '27.156.010,72', color: 'success', percent: 89 }
    ],
    subfuncao: [
      {
        group: 'Vigilância Sanitária',
        value: 20000
      }, {
        group: 'Assistência Hospitalar e Ambulatorial',
        value: 65000
      }, {
        group: 'Atenção Básica',
        value: 75000
      }, {
        group: 'Exemplo',
        value: 1200
      }, {
        group: 'Outro Exemplo',
        value: 10000
      }
    ],
    programa: [
      {
        group: 'Combate ao Coronavírus',
        value: 10000
      }, {
        group: 'Gestão dos Serviços de Atenção Hospitalar e Ambulatorial',
        value: 75000
      }, {
        group: 'Gestão dos Serviços de Atenção Básica em Saúde',
        value: 65000
      }
    ],
    tableItems: [
      {
        legenda: 'Manutenção das Atividades do Hospital e Maternidade Antonina Aderaldo Castelo',
        empenhado: 12607749.41,
        liquidado: 12198704.92,
        pago: 11916174.6
      },
      {
        legenda: 'Manutenção dos Serviços de Atenção Básica em Saúde',
        empenhado: 10017829.2,
        liquidado: 9405433.31,
        pago: 9267006.26
      },
      {
        legenda: 'Manutenção dos Serviços de Atenção Básica em Saúde',
        empenhado: 10017829.2,
        liquidado: 9405433.31,
        pago: 9267006.26
      },
      {
        legenda: 'Manutenção dos Serviços de Atenção Básica em Saúde',
        empenhado: 10017829.2,
        liquidado: 9405433.31,
        pago: 9267006.26
      }
    ]
  })
}
</script>
