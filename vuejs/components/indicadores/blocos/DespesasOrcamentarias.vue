<template><div class="d-flex justify-space-between flex-column h-100">
  <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium">Despesas Orçamentárias</h2>
  <div class="chart-container position-relative" style="height: 100px;">
    <v-progress-circular :value="50" :size="200" width="10" class="chart-empenhados" color="warning"></v-progress-circular>
    <v-progress-circular :value="40" :size="170" width="10" class="chart-liquidados" color="info"></v-progress-circular>
    <v-progress-circular :value="25" :size="140" width="10" class="chart-pagos" color="success"></v-progress-circular>
    <!-- <div class="layout-cover" /> -->
  </div>
  <div>
    <span class="blue-grey--text text--lighten-1 font-size-10">
      <v-icon class="warning--text mr-0" x-small>mdi-circle</v-icon>
      Empenhados
    </span>
    <span class="blue-grey--text text--lighten-1 font-size-10">
      <v-icon class="info--text mr-0 ml-2" x-small>mdi-circle</v-icon>
      Liquidados
    </span>
    <span class="blue-grey--text text--lighten-1 font-size-10">
      <v-icon class="success--text mr-0 ml-2" x-small>mdi-circle</v-icon>
      Pagos
    </span>
  </div>
</div></template>

<script>
import BaseComponent from '@/aspec-toolkit/mixins/BaseComponent.js'
export default {
  name: 'DespesasOrcamentarias',
  extends: BaseComponent,
  props: {
    data: Object
  },
  methods: {}
}
</script>

<style>
  .chart-container {overflow: hidden;}
  .chart-empenhados,
  .chart-liquidados,
  .chart-pagos {position: absolute; left: 50%; transform: rotate(180deg);}
  .chart-empenhados {margin-left: -100px; bottom: -100px;}
  .chart-liquidados {margin-left: -85px; bottom: -85px;}
  .chart-pagos {margin-left: -70px; bottom: -70px;}
  .v-progress-circular__underlay {stroke: white;}
  /*.layout-cover {position: absolute; width: 100%; height: 60px; background: white; bottom: 0;}*/
</style>
