<template><div>
  <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">Despesas Categoria Econômica</h2>
  <div v-for="obj in teste" :key="obj.label" class="pb-3">
    <div class="d-flex">
      <div class="d-flex">
        <span class="font-size-12 blue-grey--text text--lighten-1" style="width: 80px;">{{ obj.label }}</span>
      </div>
      <div class="w-100 d-flex flex-column align-center overflow-hidden">
        <v-progress-linear v-model="obj.autorizado" color="secondary" height="9" rounded class="mt-auto mb-1 ml-n2" />
        <v-progress-linear v-model="obj.pago" color="warning" height="9" rounded class="mb-auto ml-n2" />
      </div>
    </div>
  </div>
  <div class="text-center">
    <span class="blue-grey--text text--lighten-1 font-size-10">
      <v-icon class="warning--text mr-0" x-small>mdi-circle</v-icon>
      Autorizado
    </span>
    <span class="blue-grey--text text--lighten-1 font-size-10">
      <v-icon class="success--text mr-0 ml-2" x-small>mdi-circle</v-icon>
      Pago
    </span>
  </div>
</div></template>

<script>
import BaseComponent from '@/aspec-toolkit/mixins/BaseComponent.js'
export default {
  name: 'DespesasCategoriaEconomica',
  extends: BaseComponent,
  props: { data: Object },
  data: () => ({
    teste: [
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
    ],
    options: {
      chart: {
        title: 'Company Performance',
        subtitle: 'Sales, Expenses, and Profit: 2014-2017'
      }
    }
  }),
  methods: {}
}
</script>
