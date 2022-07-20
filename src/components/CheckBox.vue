<template>
    <span class="checkbox">
        <img src="@/assets/images/icons/success.svg" alt="">
    </span>
</template>

<style lang="sass">
.checkbox
    display: flex
    align-items: center
    justify-content: center
    border: unit(1) solid #2F355D
    width: unit(18)
    min-width: unit(18)
    height: unit(18)
    border-radius: 50%
    transition: all .3s
    img
        display: block
        transition: all .3s
        opacity: 0
        pointer-events: none
        width: unit(8)
        height: unit(6)
    &._active
        background: rgb(36,107,253)
        background: -moz-linear-gradient(101deg, rgba(36,107,253,1) 0%, rgba(69,76,244,1) 53%, rgba(89,86,255,1) 100%)
        background: -webkit-linear-gradient(101deg, rgba(36,107,253,1) 0%, rgba(69,76,244,1) 53%, rgba(89,86,255,1) 100%)
        background: linear-gradient(101deg, rgba(36,107,253,1) 0%, rgba(69,76,244,1) 53%, rgba(89,86,255,1) 100%)
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#246bfd",endColorstr="#5956ff",GradientType=1)
        img
            opacity: 1
</style>