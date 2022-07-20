<template>
    <label class="search">
        <img class="search__img" src="@/assets/images/icons/search.svg" alt="">
        <input class="search__input" type="search" placeholder="Поиск">
    </label>
</template>

<script>
export default {
  name: 'SearchBlock'
}
</script>

<style lang="sass">
.search
    display: block
    width: 100%
    border: unit(1) solid #26294C
    padding: unit(11) unit(12)
    display: flex
    align-items: center
    border-radius: unit(6)
    &__img
        margin-right: unit(8)
        display: block
        width: unit(12)
        height: unit(12)

    &__input
        background-color: transparent
        outline: none
        border: none
        color: inherit
        width: 100%
        &[type="search"]
            appearance: none
</style>
