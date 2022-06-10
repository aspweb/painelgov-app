<template><div>

  <!-- header -->
  <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">Órgãos com maiores gastos</h2>
  <div class="d-flex mb-3">
    <div v-for="(obj, $i) in data.header" :key="$i" class="mr-7">
      <strong class="font-size-14 blue-grey--text text--lighten-1 font-weight-medium">
        {{ obj.txt }}
      </strong>
      <br>
      <span class="font-size-12 blue-grey--text text--lighten-1 font-weight-medium">R$</span>
      <span
        class="font-site-18 font-weight-bold"
        :class="[(obj.color + '--text')]"
      >{{ obj.val }}</span>
    </div>
  </div>

  <!-- table -->
  <div class="mx-n3">
    <v-data-table
      :headers="data.table.headers"
      :items="data.table.data"
      :items-per-page="-1"
      class="blue-grey--text text--darken-3"
      hide-default-footer
    ></v-data-table>
  </div>

</div></template>

<script>
import BaseComponent from '@/aspec-toolkit/mixins/BaseComponent.js'
export default {
  name: 'OrgaosMaioresGastos',
  extends: BaseComponent,
  props: {
    data: Object
  },
  methods: {}
}
</script>

<style>
  table td {border-bottom: none !important;}
  table th span {font-weight: bold; font-size: .813rem !important;}
</style>
