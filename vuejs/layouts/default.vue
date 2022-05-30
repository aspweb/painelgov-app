<template><v-app><!-- eslint-disable-line -->

  <!-- conteudo da view -->
  <v-main>
    <v-container fluid class="pa-0">
      <Nuxt />
    </v-container>
  </v-main>

  <!-- progress loader -->
  <Progress v-if="loading.length > 0" />

  <!-- snackbars -->
  <DefaultSnackbars />

</v-app></template><!-- eslint-disable-line -->

<script>
import BaseView from '@/mixins/BaseView.js'
const mixins = [BaseView]
export default { mixins }
</script>
