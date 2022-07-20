<template>
    <div class="select">
        <div class="select__top" v-on:click="selectOpen(dataSelect.id)">
            <span>{{dataSelect.selected}}</span>
            <img src="@/assets/images/icons/arrow-bottom.svg" alt="">
        </div>
        <div class="select__container" v-if="dataSelect.isSelectOpen" :style="cssProps">
            <div class="select__container-list">
                <SelectItem 
                v-for="(selectOption, id) in dataSelect.options" 
                :key="id"
                :optionName="selectOption"
                :selected="dataSelect.selected"
                @click="selectChange(selectOption, dataSelect.id)"
                 />
            </div>
        </div>
    </div>
</template>
<script>
import SelectItem from './SelectItem.vue'


export default {
    name: 'SelectBlock',
    components: {
        SelectItem,
    },
    props: {
        dataSelect: {
            type: Object
        },
        containerWidth:{
            type: String,
            default: '195'
        }
    },
    methods: {
        selectOpen(id){
            this.$emit('open_select', id)
        },
        selectChange(option, id){
            this.$emit('select', option, id)
        }
    },
    computed: {
        cssProps() {
            return {
                '--container_width': this.containerWidth,
            }
        }
    }
}
</script>
<style lang="sass">
.select
    position: relative
    z-index: 3
    &__top
        font-size: unit(12)
        color: #8285B4
        cursor: pointer
        font-weight: 400
        display: flex
        align-items: center
        span
            margin-right: unit(4)
        img
            width: unit(10)
            height: unit(10)
    &__container
        position: absolute
        top: calc(100% + unit(13))
        left: 50%
        transform: translateX(-50%)
        background-color: #191B41
        box-shadow: 0 unit(32) unit(32) rgba(0, 0, 0, 0.12)
        border-radius: unit(12)
        padding: unit(18)
        width: unit(var(--container_width))
        &::before
            content: ''
            position: absolute
            top: calc(unit(-6))
            width: unit(10)
            height: unit(10)
            left: 50%
            transform: translateX(-50%) rotate(45deg)
            background-color: #191B41
        &-checkbox
            margin-left: unit(12)
</style>
