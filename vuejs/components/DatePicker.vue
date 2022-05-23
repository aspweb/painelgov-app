<template><div>
  <v-menu
    ref="showCalendar"
    v-model="showCalendar"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px">
    <template #activator="{ on }">
      <v-text-field
        v-model="model"
        @input="updateModelValue(model)"
        @blur="dateIso = parseDate(model)"
        :rules="rules"
        :label="label"
        persistent-hint
        append-icon="mdi-calendar"
        v-on="on"
        required
        :outlined="outlined"
        :dense="dense"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="dateIso"
      @change="updateModelValue(formatDate(dateIso))"
      no-title
      @input="showCalendar = false">
    </v-date-picker>
  </v-menu>
</div></template>

<script>
import BaseComponent from '@/aspec-toolkit/mixins/BaseComponent.js'
const data = () => ({
  showCalendar: false,
  dateIso: ''
})
const props = {
  label: String,
  outlined: { type: Boolean, default: false },
  dense: { type: Boolean, default: false }
}
const methods = {
  formatDate (date) {
    if (!date || !date.match(/^\d{4}-\d{2}-\d{2}$/)) return null
    const [year, month, day] = date.split('-')
    return `${day}/${month}/${year}`
  },
  parseDate (date) {
    if (!date || !date.match(/^\d{2}\/\d{2}\/\d{4}$/)) return null
    const [day, month, year] = date.split('/')
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  }
}
export default {
  name: 'DatePicker',
  extends: BaseComponent,
  props,
  data,
  methods
}
</script>
