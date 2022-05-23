<template><v-sheet v-if="listTotal > pageSize">
  <v-divider />
  <v-row class="ma-0">
    <v-col class="d-flex align-center py-0">
      <span class="page-data font-weight-light px-1">
        Exibindo:
        <strong class="font-weight-bold">{{ firstItemNumber }}</strong> a
        <strong class="font-weight-bold">{{ lastItemNumber }}</strong> de
        <strong class="font-weight-bold">{{ listTotal }}</strong> registros
      </span>
    </v-col>
    <v-col class="py-0 pr-0">
      <v-pagination
        v-model="model"
        :length="totalPages"
        :total-visible="totalVisible"
        class="pagination justify-end"
        @input="paginate"
      ></v-pagination>
    </v-col>
  </v-row>
</v-sheet></template>

<script>
import BaseComponent from '@/aspec-toolkit/mixins/BaseComponent.js'

const created = function () { this.model = this.page || 1 }

const props = {
  page: Number,
  listTotal: Number,
  totalPages: Number,
  pageSize: Number,
  totalVisible: { type: Number, default: 9 }
}

const watch = {
  page (val) { this.model = val }
}

const computed = {
  firstItemNumber () {
    return (this.page - 1) * this.pageSize + 1
  },
  lastItemNumber () {
    return this.page !== this.totalPages
      ? (this.page - 1) * this.pageSize + this.pageSize
      : this.listTotal
  }
}

const methods = {
  paginate (val) {
    this.$emit('paginate', val)
  }
}

export default {
  name: 'Pagination',
  extends: BaseComponent,
  created,
  props,
  watch,
  computed,
  methods
}
</script>

<style>
#pagination .page-data {font-size: 1.1rem;}
#pagination .v-pagination {justify-content: flex-end;}
#pagination .v-pagination .v-pagination__navigation,
#pagination .v-pagination .v-pagination__item,
#pagination .v-pagination .v-pagination__more {font-size: 0.8rem; box-shadow: none; border-radius: 0; border-left: 1px solid rgba(255, 255, 255, 0.12); padding: 0; margin:  0; line-height: 52px; height: 52px; width: 52px;}
.theme--light #pagination .v-pagination .v-pagination__navigation,
.theme--light #pagination .v-pagination .v-pagination__item,
.theme--light #pagination .v-pagination .v-pagination__more {border-left: 1px solid rgba(0, 0, 0, 0.12);}
</style>
