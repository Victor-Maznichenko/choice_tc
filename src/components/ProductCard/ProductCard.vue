<template>
    <div class="card" :class="className">
        <CardPreview :lock="productCard.lock" :typeName="productCard.preview.typeName" :imgName="productCard.preview.ImgName" />
        <div class="card__info">
            <h4 class="card__title">{{ productCard.info.brand }}</h4>
            <p class="card__model">{{ productCard.info.model }}</p>
            <div class="card__properties">
                <CardNumber class="card__properties-number" :number="productCard.info.number" />
                <CardColour class="card__properties-color" :colors="productCard.info.colors" />
                <CardFuel :fuel="productCard.info.fuel" />
            </div>
            <div class="card__btn-wrapper">
                <DefaultButton class="card__btn" :title="productCard.btnInfo.title"
                    :styleOutline="productCard.btnInfo.styleOutline" :styleYellow="productCard.btnInfo.styleYellow"
                    :styleWhite="productCard.btnInfo.styleWhite" :disabled="productCard.btnInfo.disabled"
                    :icon="productCard.btnInfo.icon" />
            </div>
        </div>
    </div>
</template>

<script>
import DefaultButton from '@/components/DefaultButton.vue'
import CardNumber from './CardNumber.vue'
import CardFuel from './CardFuel.vue'
import CardColour from './CardColour.vue'
import CardPreview from './CardPreview.vue'

export default {
    name: 'ProductCard',
    components: {
        DefaultButton,
        CardNumber,
        CardFuel,
        CardColour,
        CardPreview
    },
    props: {
        productCard: {
            type: Object,
            lock: {
                type: Boolean,
                default: false
            }
        }
    },
    computed: {
        className() {
            return {
                'card_lock': this.productCard.lock,
            }
        }
    }
}
</script>

<style lang="sass">
.card
    max-width: unit(205)
    border-radius: unit(18)
    transition: all .3s
    background-color: #191B41
    position: relative
    &::before
        content: ''
        position: absolute
        transition: all .3s
        z-index: -1
        width: calc(100% + unit(8))
        height: calc(100% + unit(8))
        top: 50%
        left: 50%
        background: linear-gradient(138.15deg, #246BFD 24.85%, #454CF4 52.03%, #5956FF 77.6%)
        border-radius: unit(18)
        transform: translateX(-50%) translateY(-50%)
        opacity: 0
    &:hover
        &::before
            opacity: 1
    &_lock
        pointer-events: none

    &__info
        position: relative
        z-index: 2
        padding: unit(12) unit(12) unit(16) unit(12)
    &__title
        margin-bottom: unit(6)
        text-transform: uppercase
    &__model
        margin-bottom: unit(5)
        color: #8285B4
    &__properties
        display: flex
        align-items: center
        margin-bottom: unit(12)
        &-number
            margin-right: unit(10)
        &-color
            margin-right: unit(10)
    &__btn
        &-wrapper
            width: 100%
            text-align: center
</style>