<template>
    <button class="default-btn" type="button"
    :class="className"
    >
        <img class="default-btn__img" v-if="icon" :src="require(`@/assets/images/icons/${icon}`)" alt="">
        <span class="default-btn__text">{{title}}</span>
    </button>
</template>

<script>
export default {
    name: 'DefaultButton',
    props: {
        title: {
            type: String,
            default: 'Кнопка'
        },
        icon: {
            type: String,
            default: ''
        },
        styleOutline:{
            type: Boolean,
            default: false
        },
        styleYellow:{
            type: Boolean,
            default: false
        },
        styleWhite:{
            type: Boolean,
            default: false
        },
        disabled:{
            type: Boolean,
            default: false
        }
    },
    computed: {
        className() {
            return{
                'default-btn_disabled': this.disabled,
                'default-btn_outline': this.styleOutline,
                'default-btn_yellow': this.styleYellow,
                'default-btn_white': this.styleWhite,
            }
        }
    }
}
</script>

<style lang="sass">
.default-btn
    font-family: 'Rubik', sans-serif
    font-weight: 700
    padding: unit(12) unit(10)
    border-radius: unit(10)
    font-size: unit(12)
    line-height: unit(14)
    max-width: unit(174)
    outline: none
    width: 100%
    color: white
    border: none
    text-transform: uppercase
    position: relative
    transition: all .3s
    justify-content: center
    display: flex
    align-items: center
    &__img
        display: block
        height: unit(12)
        width: unit(12)
        margin-right: unit(6)
        transform: translateY(unit(-1))
    &::after
        content: ''
        position: absolute
        z-index: -1
        top: 0
        transition: all .3s
        border-radius: unit(10)
        left: 0
        width: 100%
        height: 100%
        transform: skewX(-13deg)
        background: -moz-linear-gradient(100deg, rgba(36,107,253,1) 0%, rgba(69,76,244,1) 65%, rgba(89,86,255,1) 123%)
        background: -webkit-linear-gradient(100deg, rgba(36,107,253,1) 0%, rgba(69,76,244,1) 65%, rgba(89,86,255,1) 123%)
        background: linear-gradient(100deg, rgba(36,107,253,1) 0%, rgba(69,76,244,1) 65%, rgba(89,86,255,1) 123%)
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#246bfd",endColorstr="#5956ff",GradientType=1) 
    &::before
        content: ''
        position: absolute
        z-index: -1
        transition: all .3s
        top: 0
        border-radius: unit(10)
        left: 0
        width: 100%
        height: 100%
        transform: skewX(-13deg)
        background-color: rgb(36,107,253)
    &:hover
        &::before
            background-color: #333BE9
            filter: none
            box-shadow: 0 unit(4) unit(28) rgba(51, 59, 233, 0.5)
            border-radius: unit(10)
        &::after
            opacity: 0
    &_yellow
        &::before
            background-color: rgb(253,205,36)
        &::after
            background: -moz-linear-gradient(101deg, rgba(253,205,36,1) 0%, rgba(244,132,69,1) 53%, rgba(253,205,36,1) 100%)
            background: -webkit-linear-gradient(101deg, rgba(253,205,36,1) 0%, rgba(244,132,69,1) 53%, rgba(253,205,36,1) 100%)
            background: linear-gradient(101deg, rgba(253,205,36,1) 0%, rgba(244,132,69,1) 53%, rgba(253,205,36,1) 100%)
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fdcd24",endColorstr="#fdcd24",GradientType=1)
        &:hover
            &::before
                background-color: #F58925
                background: #F58925
                filter: none
                box-shadow: 0 unit(4) unit(28) rgba(245, 137, 37, 0.5)
                border-radius: unit(10)
    &_white
        color: #000
        &::before
            background-color: #fff
        &::after
            background: linear-gradient(119.5deg, #246BFD 0%, #454CF4 114.66%, #5956FF 215.84%)
            opacity: 0
        &:hover
            color: #fff
            &::before
                background-color: rgb(36,107,253)
            &::after
                box-shadow: 0 unit(4) unit(28) rgba(51, 59, 233, 0.5)
                opacity: 1
            
    &_outline
        &::before
            border: double unit(2) transparent
            border-radius: unit(10)
            background-image: linear-gradient(rgba(18, 20, 52, 0.98), rgba(18, 20, 52, 0.98)), linear-gradient(100deg, rgba(36,107,253,1) 0%, rgba(69,76,244,1) 65%, rgba(89,86,255,1) 123%)
            background-origin: border-box
            background-clip: content-box, border-box
            background-color: transparent
        &::after
            background: transparent
    &_disabled
        opacity: 0.3
        pointer-events: none
</style>