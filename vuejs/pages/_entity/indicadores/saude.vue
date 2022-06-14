<template>
  <v-container v-cloak class="pt-10">

    <!-- header -->
    <v-row>
      <h1 class="font-weight-medium blue-grey--text text--darken-4 font-size-24">
        Saúde
      </h1>
    </v-row>

  </v-container>
</template>

<script>
import BaseView from '@/mixins/BaseView.js'
export default {
  layout: 'logged',
  mixins: [BaseView]
}
</script>
