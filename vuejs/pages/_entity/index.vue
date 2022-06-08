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

    <!-- TODO - retirar -->
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
    </v-container>

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
          totalPrevisto: this.randomMoney(),
          totalArrecadado: this.randomMoney()
        }, {
          id: 'DespesasOrcamentarias',
          cols: 3,
          empenhados: 50,
          liquidados: 40,
          pagos: 30
        }, {
          id: 'RecursosFederaisRecebidos',
          cols: 3,
          totalPrevisto: this.randomMoney(),
          totalLiberado: this.randomMoney()
        }, {
          id: 'DespesasCategoriaEconomica',
          cols: 3,
          data: [
            {
              group: 'Qty',
              value: 65000
            }, {
              group: 'More',
              value: 29123
            }, {
              group: 'Sold',
              value: 35213
            }, {
              group: 'Restocking',
              value: 51213
            }, {
              group: 'Misc',
              value: 16932
            }
          ]
        }, {
          id: 'ReceitasDespesas',
          cols: 12,
          data: [
            { group: 'Receitas', value: 10000, key: 'JAN' },
            { group: 'Receitas', value: 65000, key: 'FEV' },
            { group: 'Receitas', value: 10000, key: 'MAR' },
            { group: 'Receitas', value: 49213, key: 'ABR' },
            { group: 'Receitas', value: 51213, key: 'MAI' },
            { group: 'Despesas', value: 20000, key: 'JAN' },
            { group: 'Despesas', value: 25000, key: 'FEV' },
            { group: 'Despesas', value: 60000, key: 'MAR' },
            { group: 'Despesas', value: 30213, key: 'ABR' },
            { group: 'Despesas', value: 55213, key: 'MAI' }
          ]
        }, {
          id: 'NumerosGerais',
          cols: 6
        }, {
          id: 'OrgaosMaioresGastos',
          cols: 6
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
