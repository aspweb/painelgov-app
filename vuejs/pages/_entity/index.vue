<template>
  <v-container v-cloak>

    <!-- header // TODO - trocar -->
    <div class="d-flex mx-3 mt-3">
      <v-spacer />
      <v-col
        v-if="exercicios.length"
        cols="12"
        md="4"
        class="pb-0">
        <v-select
          v-model="exer"
          :items="exercicios"
          :rules="[v => !!v || 'Exercício obrigatório']"
          required
          dense
          @change="setExercicio(exer)"
          item-text="nome"
          item-value="id"
          return-object
          label="Exercício"
          outlined
        />
      </v-col>
      <v-spacer />
    </div>

    <!-- areas de atuacao -->
    <AreasAtuacao :items="areasAtuacao" class="mb-3" />

    <!-- visao geral -->
    <VisaoGeral :items="gridBlocks" />

    <!-- TESTES - RETIRAR
    <v-container>
      <v-row>
        <v-btn
          v-for="(btn, i) in [
            'primary',
            'secondary',
            'success',
            'info',
            'error',
            'warning',
            'accent'
          ]"
          :key="i"
          :color="btn"
          rounded>
          {{ btn }}
        </v-btn>
      </v-row>
    </v-container> -->

  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import BaseView from '@/mixins/BaseView.js'
import lib from '@/aspec-toolkit/utils/lib.js'
export default {
  name: 'Entidade',
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
        { title: 'Saúde', icon, valueDesc: this.randomMoney() },
        { title: 'Educação', icon, valueDesc: this.randomMoney() },
        { title: 'Administração', icon, valueDesc: this.randomMoney() },
        { title: 'Assistência Social', icon, valueDesc: this.randomMoney() },
        { title: 'Gestão Ambiental', icon, valueDesc: this.randomMoney() }
      ]
    },
    gridBlocks () {
      return [
        {
          id: 'ReceitaPrevistaArrecadada',
          cols: 3,
          data: {
            totalPrevisto: this.randomMoney(),
            totalArrecadado: this.randomMoney()
          }
        }, {
          id: 'DespesasOrcamentarias',
          cols: 3,
          data: {
            empenhados: 50,
            liquidados: 40,
            pagos: 30
          }
        }, {
          id: 'RecursosFederaisRecebidos',
          cols: 3,
          data: {
            totalPrevisto: this.randomMoney(),
            totalLiberado: this.randomMoney()
          }
        }, {
          id: 'DespesasCategoriaEconomica',
          cols: 3,
          data: {
            list: [
              {
                label: 'Despesas correntes',
                color: 'secondary',
                autorizado: 85,
                pago: 45
              }, {
                label: 'Despesas de capital',
                color: 'secondary',
                autorizado: 65,
                pago: 35
              }, {
                label: 'Reserva de contingência',
                color: 'secondary',
                autorizado: 45,
                pago: 24
              }
            ]
          }
        }, {
          id: 'ReceitasDespesas',
          cols: 12,
          data: {
            chart: [
              { group: 'Receitas', val: 10000, key: 'JAN' },
              { group: 'Receitas', val: 65000, key: 'FEV' },
              { group: 'Receitas', val: 10000, key: 'MAR' },
              { group: 'Receitas', val: 49213, key: 'ABR' },
              { group: 'Receitas', val: 51213, key: 'MAI' },
              { group: 'Despesas', val: 20000, key: 'JAN' },
              { group: 'Despesas', val: 25000, key: 'FEV' },
              { group: 'Despesas', val: 60000, key: 'MAR' },
              { group: 'Despesas', val: 30213, key: 'ABR' },
              { group: 'Despesas', val: 55213, key: 'MAI' }
            ]
          }
        }, {
          id: 'NumerosGerais',
          cols: 6,
          data: {
            header: [
              { txt: 'Saldo das Contas', val: '16.171.907,44', color: 'success' },
              { txt: 'Comprometido', val: '24.479.730,62', color: 'success' },
              { txt: 'Disponível', val: '-10.169.024,47', color: 'warning' }
            ],
            body: [
              { txt: 'Orçamento', val: '786.785,66' },
              { txt: 'Habitantes', val: '786.785,66' },
              { txt: 'Servidores', val: '786.785,66' },
              { txt: 'IDEB', val: '786.785,66' },
              { txt: 'Empresas', val: '786.785,66' },
              { txt: 'Ímóveis', val: '786.785,66' },
              { txt: 'Patrimônio', val: '786.785,66' },
              { txt: 'Investimento em obras', val: '786.785,66' }
            ]
          }
        }, {
          id: 'OrgaosMaioresGastos',
          cols: 6,
          data: {}
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
