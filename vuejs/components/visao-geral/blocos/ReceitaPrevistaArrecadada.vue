<template><div>
  <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">Receita prevista e arrecadada</h2>
  <p class="blue-grey--text text--lighten-1 font-size-12">
    <span>Total previsto</span><br>
    R$ <span class="font-size-20 success--text font-weight-bold">{{ data.totalPrevisto }}</span>
  </p>
  <p class="blue-grey--text text--lighten-1 font-size-12">
    <span>Total arrecadado</span><br>
    R$ <span class="font-size-20 warning--text font-weight-bold">{{ data.totalArrecadado }}</span>
  </p>
  <span class="blue-grey--text text--lighten-1 font-size-12">Acumulado do ano</span>
</div></template>

<script>
import BaseComponent from '@/aspec-toolkit/mixins/BaseComponent.js'
export default {
  name: 'ReceitaPrevistaArrecadada',
  extends: BaseComponent,
  props: {
    data: Object
  },
  methods: {}
}
</script>
