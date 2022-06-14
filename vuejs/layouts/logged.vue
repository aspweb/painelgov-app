<template><v-app :class="{ 'theme--dense': dense }"><!-- eslint-disable-line -->

  <!-- sidebar -->
  <Sidebar :menu="menu"></Sidebar>

  <!-- header -->
  <Header>
    <template v-slot:midle>
      <SelectExercicio
        @change="setExercicio"
        :exercicio="exercicio"
        :exercicios="exercicios"
      />
    </template>
  </Header>

  <!-- conteudo da view -->
  <v-main class="light-green lighten-5">
    <v-container fluid class="pa-0">
      <Nuxt />
    </v-container>
  </v-main>

  <!-- sidebar options -->
  <!-- <OptionsSidebar /> -->

  <!-- snackbars -->
  <DefaultSnackbars />

  <!-- progress loader -->
  <Progress v-if="loading.length > 0" />

</v-app></template><!-- eslint-disable-line -->

<script>
// import moment from 'moment'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import BaseView from '@/mixins/BaseView.js'

const mixins = [BaseView]

const created = function () {
  this.bootEntidade()
}

const watch = {
  exercicios (to, from) {
    if (to[0]) this.setExercicio(to[0])
  }
}

const computed = {
  ...mapGetters('integration/govtrans', [
    'entidade',
    'exercicios',
    'exercicio'
  ]),
  menu () {
    const arr = [
      {
        icon: 'mdi-home',
        title: 'Visão geral',
        to: '/' + this.entidade.idTenancy
      }, {
        icon: 'mdi-view-dashboard',
        title: 'Indicadores',
        items: [
          {
            icon: 'mdi-checkbox-blank-circle-outline',
            title: 'Saúde',
            to: '/' + this.entidade.idTenancy + '/indicadores/saude'
          }
        ]
      }, {
        divider: true,
        icon: 'mdi-book-open-page-variant',
        title: 'Despesas Empenhadas a Pagar',
        items: [
          {
            icon: 'mdi-checkbox-blank-circle-outline',
            title: 'Por credor',
            to: '/' + this.entidade.idTenancy + '/despesas-empenhadas-pagar/por-credor'
          }
        ]
      }, {
        icon: 'mdi-power',
        title: 'Sair',
        to: '/logout',
        divider: true
      }
    ]
    return arr
  }
}

const data = () => ({
  exer: null
})

const methods = {
  ...mapActions([
    'saveStateLocally'
  ]),
  ...mapActions('integration/govtrans', [
    'loadEntidade',
    'loadExercicios',
    'loadUnidadesGestoras',
    'loadRemessas'
  ]),
  ...mapActions('firebase', ['startFirebase']),
  ...mapMutations('integration/govtrans', ['setExercicio']),
  bootEntidade () {
    const entidade = this.$route.params.entity
    // this.startFirebase() // TODO
    this.loadEntidade(entidade)
    this.loadExercicios(entidade)
    this.loadUnidadesGestoras(entidade)
    this.loadRemessas(entidade)
    if (!window.saveStorageEvent) {
      this.addCloseTabEvent(this.saveStateLocally) // TODO - melhorar com teste
      window.saveStorageEvent = true
    }
  },
  addCloseTabEvent (action) { // TODO - organizar em um local melhor
    window.addEventListener('beforeunload', action)
  }
}

export default {
  mixins,
  computed,
  watch,
  created,
  data,
  methods
}
</script>
