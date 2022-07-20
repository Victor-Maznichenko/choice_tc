<template>
    <div class="card-number">
        <span class="card-number__bg"></span>
        <span class="card-number__text">{{number}}</span>
    </div>
</template>

<script>
export default {
    name: 'CardNumber',
    props: {
        number: {
            type: String
        }
    }
}
</script>

<style lang="sass">
.card-number
    padding: 0 unit(8)
    display: inline-block
    position: relative
    &__bg
        position: absolute
        left: 0
        top: 0
        z-index: -1
        width: 100%
        display: block
        height: 100%
        background-color: #EAA800
        box-shadow: inset 0 unit(2) unit(2) unit(2) #FFD600
        border-radius: unit(2)
        &::before,&::after
            content: ''
            width: unit(2)
            height: unit(4)
            position: absolute
            background-color: rgba(255, 255, 255, 0.75)
            border-radius: unit(2)
            top: 50%
            transform: translateY(-50%)
        &::before
            left: unit(3)
        &::after
            right: unit(3)
        
    &__text
        font-family: 'Oswald'
        color: #040506
        letter-spacing: -0.04em
        text-transform: uppercase
        font-weight: 600
        font-size: unit(10)
        line-height: unit(14)
</style>