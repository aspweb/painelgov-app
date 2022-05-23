<template>
  <v-app dark class="pa-10">
    <h1 class="display-1 mb-5">
      {{ error.statusCode === 404 ? '404 Conteúdo não encontrado' : 'Ops... Algo deu errado!' }}
    </h1>
    <pre class="mb-5">{{ error }}</pre>
    <div>
      <v-btn :to="homeLink" color="primary" class="mr-3" rounded>Voltar ao início</v-btn>
      <v-btn @click="$router.back()" color="secondary" rounded>Página anterior</v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    homeLink () {
      return this.$route.params.entity
        ? '/' + this.$route.params.entity
        : '/login'
    }
  }
}
</script>

<style scoped>
h1 {font-size: 20px;}
</style>
