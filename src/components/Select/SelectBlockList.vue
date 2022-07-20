<template>
    <div class="catalog__selects">
        <SelectBlock 
        class="catalog__selects-item" 
        v-for="select in dataSelects" 
        :key="select.id" 
        :dataSelect=select
        @open_select="openSelect"
        @select="optionSelect"
         />
    </div>
</template>



<script>
import SelectBlock from '@/components/Select/SelectBlock.vue'

export default {
    name: 'SelectBlockList',
    components: {
        SelectBlock
    },
    props: {
        dataSelects: {
            type: Object
        },
        openSelect: {
            type: Function
        },
        optionSelect: {
            type: Function
        }
    }
}
</script>