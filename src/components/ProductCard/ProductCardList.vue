<template>
    <div class="catalog__items-list">
        <ProductCard class="catalog__item" v-for="item in productCards" :key="item.id" :productCard="item" />
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard/ProductCard.vue'

export default {
    name: 'ProductCardList',
    components: {
        ProductCard
    },
    props: {
        productCards: {
            type: Object
        }
    }
}
</script>