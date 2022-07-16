<template>
  <div class="catalog">
    <div class="catalog__inner">
      <div class="catalog__top">
        <TitleH1 />
        <div class="catalog__selects">
          <!-- Вернуться сюда чуть позже -->
          <Select class="baz boo" />
        </div>
        <Search />
      </div>
    </div>
    <button class="close-btn">
      <svg width="10" height="10" viewBox="0 0 10 10">
        <path
          d="M4.99993 3.93938L8.71243 0.226883L9.77293 1.28738L6.06043 4.99988L9.77293 8.71238L8.71243 9.77288L4.99993 6.06038L1.28743 9.77288L0.226929 8.71238L3.93943 4.99988L0.226929 1.28738L1.28743 0.226883L4.99993 3.93938Z"
          fill="white" />
      </svg>
    </button>
  </div>
</template>

<script>
import Select from '@/components/Select'
import TitleH1 from '@/components/TitleH1'
import Search from '../components/Search.vue'

export default {
  name: 'CatalogView',
  components: {
    Select,
    TitleH1,
    Search
  }
}
</script>

<style lang="sass">
  .catalog
    color: white
    background: rgba(18, 20, 52, 0.98)
    backdrop-filter: blur(24px)
    border-radius: unit(24)
    max-width: unit(790)
    width: 100%
    height: unit(640)
    &__inner
        padding: unit(25) unit(23) unit(37)
</style>
