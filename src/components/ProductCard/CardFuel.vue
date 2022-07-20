<template>
    <div class="fuel">
        <img class="fuel__img" src="@/assets/images/icons/thereIsNotFuel.svg" alt="" v-if="fuel == 0">
        <img class="fuel__img" src="@/assets/images/icons/thereIsFuel.svg" alt="" v-if="fuel > 0">
        <span class="fuel__count"><b>{{fuel}}</b>/999</span>
    </div>
</template>

<script>
export default {
    name: 'CardFuel',
    props: {
        fuel: {
            type: Number
        }
    }
}
</script>

<style lang="sass">
.fuel
    display: flex
    align-items: center
    &__img
        display: block
        width: unit(13)
        height: unit(14)
        margin-right: unit(6)
    &__count
        line-height: 100%
        font-size: unit(11)
        color: #8285B4
        b
            font-size: unit(12)
            font-weight: 500
            color: #FFFFFF
            
</style>