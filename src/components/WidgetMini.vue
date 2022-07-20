<template>
    <div class="widget" :class="className" v-if="imgName">

        <Icon class="widget__img" :iconName="imgName"/>

        <div class="widget__message">
            Транспорт на штрафстоянке (на транспорт выписан заказ на эвакуацию)
        </div>
    </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
    name: 'WidgetMini',
    props: {
        imgName: {
            type: String
        },
        transparency: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        positionBottom: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Icon
    },
    computed: {
        className() {
            return {
                'widget_transparency': this.transparency,
                'widget_disabled': this.disabled,
                'widget_position-bottom': this.positionBottom
            }
        }
    }
}
</script>

<style lang="sass">
.widget
    width: unit(32)
    height: unit(19)
    border-radius: unit(2)
    background: rgba(0, 0, 0, 0.7)
    display: flex
    align-items: center
    justify-content: center
    &__img
        width: 75%
        height: 85%
    &_transparency
        background: rgba(0, 0, 0, 0.4)
    &__message
        position: absolute
        background-color: #191B41
        pointer-events: none
        opacity: 0
        border-radius: unit(12)
        padding: unit(12)
        line-height: 133%
        bottom: calc(100% + unit(13))
        z-index: 2
        &::before
            content: ''
            position: absolute
            bottom: 0
            left: 50%
            transform: translateX(-50%)
            width: unit(10)
            height: unit(10)
    &_position-bottom
        top: calc(100% + unit(13))
        bottom: auto
</style>