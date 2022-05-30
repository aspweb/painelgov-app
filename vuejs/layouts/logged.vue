<template><v-app :class="{ 'theme--dense': dense }"><!-- eslint-disable-line -->

  <!-- sidebar -->
  <Sidebar :menu="menu"></Sidebar>

  <!-- header -->
  <!-- <Header /> -->

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
import { mapActions } from 'vuex'
import BaseView from '@/mixins/BaseView.js'

const mixins = [BaseView]

const created = function () {
  this.bootEntidade()
}

const computed = {
  // ...mapGetters([
  //   'remessas'
  // ]),
  // ...mapGetters(['devMode']),
  // logo () {
  //   return '/sao-goncalo-do-amarante.png'
  //   // return (!this.entidade || !this.entidade.urlBrasao)
  //   //   ? '/question.png'
  //   //   : this.entidade.urlBrasao
  // },
  // ultimaRemessa () {
  //   return this.remessas
  //     ? moment(this.remessas.ultimaRemessa).format('DD/MM/YYYY')
  //     : ''
  // },
  // primeiroMovimento () {
  //   return this.remessas
  //     ? moment(this.remessas.primeiroMovimento).format('MM/YYYY')
  //     : ''
  // },
  // ultimoMovimento () {
  //   return this.remessas
  //     ? moment(this.remessas.ultimoMovimento).format('MM/YYYY')
  //     : ''
  // },
  menu () {
    const arr = [
      {
        icon: 'mdi-home',
        title: 'Indicadores',
        to: '/' + this.entidade.idTenancy
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

const methods = {
  ...mapActions('integration/govtrans', [
    'loadEntidade',
    'loadExercicios',
    'loadUnidadesGestoras',
    'loadRemessas'
  ]),
  ...mapActions([
    'saveStateLocally'
  ]),
  ...mapActions('firebase', ['startFirebase']),
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
  created,
  methods
}
</script>
