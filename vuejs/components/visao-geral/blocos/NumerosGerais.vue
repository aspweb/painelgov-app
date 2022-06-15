<template><div class="d-flex align-start flex-column h-100">

  <!-- header -->
  <h2 class="text-uppercase font-size-12 blue-grey--text text--lighten-1 font-weight-medium mb-4">Números gerais</h2>
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

  <!-- body -->
  <v-simple-table dense class="mb-4 blue-grey--text text--darken-3">
    <tbody>
      <tr v-for="(obj, $i) in data.body" :key="$i">
        <td class="pl-0 border-0">{{ obj.txt }}</td>
        <td class="pl-0 border-0 text-center">{{ obj.val }}</td>
      </tr>
    </tbody>
  </v-simple-table>

  <!-- footer -->
  <div class="font-size-14 blue-grey--text text--lighten-1 font-weight-medium mb-0 mt-auto">Fonte: IBGE, IDEB, FUNDEB, Tesouro Nacional</div>
</div></template>

<script>
import BaseComponent from '@/aspec-toolkit/mixins/BaseComponent.js'
export default {
  name: 'NumerosGerais',
  extends: BaseComponent,
  props: {
    data: Object
  },
  methods: {}
}
</script>
