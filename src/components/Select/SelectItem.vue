<template>
  <label class="select__container-item " :class="selected == optionName ? '_active' : ''">
    <span>{{ optionName }}</span>
    <input type="checkbox">
    <CheckBox v-if="selected == optionName" class="select__container-checkbox _active" />
  </label>
</template>

<script>
import CheckBox from '@/components/CheckBox.vue'

export default {
  name: 'SelectItem',
  components: {
    CheckBox
  },
  props: {
    optionName: {
      type: String,
      default: 'Параметр пуст'
    },
    selected: {
      type: String,
      default: 'Выберите значение'
    }
  }
}
</script>

<style lang="sass">
.select__container-item
  display: flex
  justify-content: space-between
  font-size: unit(14)
  cursor: pointer
  transition: all .15s
  align-items: center
  margin-right: unit(30)
  &+&
      margin-top: unit(20)
  input
      width: 0
      opacity: 0
      appearance: none
  &._active
    margin-right: 0
    color: #246BFD
</style>
