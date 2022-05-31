<template>
  <v-container>
    <v-row>
      <v-col class="pr-0" cols="12" md="2">
        <h4 class="font-weight-medium blue-grey--text text--darken-4 text-uppercase font-size-12">Áreas de atuação</h4>
        <p class="blue-grey--text text--lighten-1 font-size-12 mb-0">Maiores despesas autorizadas por Função.</p>
      </v-col>
      <div v-for="area in items" :key="area.title" class="pt-3 pr-2">
        <v-card class="px-2 pt-2 pb-1 rounded-lg" elevation="0">
          <div class="d-flex">
            <v-icon class="primary white--text rounded-circle float-left mr-2" dense>{{ area.icon }}</v-icon>
            <h4 class="font-weight-medium primary--text font-size-15">{{ area.title }}</h4>
          </div>
          <p class="blue-grey--text text--lighten-1 font-weight-medium font-size-14 mb-0">
            <span class="font-size-12">R$</span>
            {{ area.valueDesc }}
          </p>
        </v-card>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import BaseComponent from '@/aspec-toolkit/mixins/BaseComponent.js'
export default {
  name: 'AreasAtuacao',
  extends: BaseComponent,
  props: { items: Array },
  methods: {}
}
</script>
