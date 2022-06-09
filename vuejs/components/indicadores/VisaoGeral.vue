<template><v-container>

  <!-- header -->
  <v-row>
    <h1 class="font-weight-medium blue-grey--text text--darken-4 font-size-24 mx-2">
      <v-icon class="warning--text rounded-circle float-left mt-1 mr-1">mdi-view-dashboard</v-icon>
      Visão Geral
    </h1>
  </v-row>

  <!-- body -->
  <v-row>
    <v-col
      v-for="block in items"
      :key="block.id"
      :md="block.cols"
      cols="12"
      class="px-2 py-3"
    >
      <v-card class="h-100 rounded-lg pa-3" elevation="0">
        <ReceitaPrevistaArrecadada v-if="block.id === 'ReceitaPrevistaArrecadada'" :data="block.data" />
        <DespesasOrcamentarias v-if="block.id == 'DespesasOrcamentarias'" :data="block.data" />
        <RecursosFederaisRecebidos v-if="block.id == 'RecursosFederaisRecebidos'" :data="block.data" />
        <DespesasCategoriaEconomica v-if="block.id == 'DespesasCategoriaEconomica'" :data="block.data" />
        <ReceitasDespesas v-if="block.id == 'ReceitasDespesas'" :data="block.data" />
        <NumerosGerais v-if="block.id == 'NumerosGerais'" :data="block.data" />
        <OrgaosMaioresGastos v-if="block.id == 'OrgaosMaioresGastos'" :data="block.data" />
      </v-card>
    </v-col>
  </v-row>

</v-container></template>

<script>
import BaseComponent from '@/aspec-toolkit/mixins/BaseComponent.js'
export default {
  name: 'VisaoGeral',
  extends: BaseComponent,
  props: { items: Array }
}
</script>
