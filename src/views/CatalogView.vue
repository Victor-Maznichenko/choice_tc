<template>
  <div class="catalog">
    <div class="catalog__inner">
      <div class="catalog__top">
        <TitleH1 class="catalog__title" />
        <SelectBlockList :dataSelects=dataSelects :openSelect="openSelect" :optionSelect="optionSelect" />
        <Search />
      </div>
      <div class="catalog__items">
        <ProductCardList :productCards=productCards />
      </div>
    </div>
    <CloseBtn />
  </div>
</template>

<script>
import SelectBlockList from '@/components/Select/SelectBlockList.vue'
import TitleH1 from '@/components/TitleH1'
import Search from '@/components/Search.vue'
import CloseBtn from '@/components/CloseBtn.vue'
import ProductCardList from '@/components/ProductCard/ProductCardList.vue'

export default {
  name: 'CatalogView',
  components: {
    SelectBlockList,
    TitleH1,
    Search,
    CloseBtn,
    ProductCardList
  },
  data() {
    return {
      dataSelects: [
        {
          id: 0,
          options: ['Мой транспорт', 'Чужой транспорт', 'Весь транспорт'],
          selected: 'Мой транспорт',
          isSelectOpen: false
        },
        {
          id: 1,
          options: ['Любой класс', 'Машина', 'Самолет', 'Вертолет', 'Мотоцикл', 'Квадроцикл'],
          selected: 'Любой класс',
          isSelectOpen: false
        },
        {
          id: 2,
          options: ['Сначала дороже', 'Сначала дешевле', 'По популярности'],
          selected: 'Сначала дороже',
          isSelectOpen: false
        }
      ],
      productCards: [
        {
          id: 0,
          preview: {
            typeName: 'passenger',
            ImgName: "productCart-1.png"
          },
          info: {
            brand: 'Bravado',
            model: 'Buffalo XS Series',
            fuel: 832,
            number: '55DOC720',
            colors: ['#FF2F2F', '#2B2D49'],
          },
          btnInfo: {
            title: 'Забрать',
            icon: ''
          },
          lock: false
        },
        {
          id: 1,
          preview: {
            typeName: 'airplane',
            ImgName: "productCart-2.png"
          },
          info: {
            brand: 'Western',
            model: 'Cargobob 2000',
            fuel: 0,
            number: '55DOC720',
            colors: ['#FFCA0D', '#2B2D49'],
          },
          btnInfo: {
            title: 'Арендовать',
            icon: '',
            styleWhite: true
          },
          lock: false
        },
        {
          id: 2,
          preview: {
            typeName: 'passenger',
            ImgName: "productCart-3.png"
          },
          info: {
            brand: 'Nagasaki',
            model: 'Buzzard Attack Chopper',
            fuel: 279,
            number: '55DOC720',
            colors: ['#50FF33', '#2B2D49'],
          },
          btnInfo: {
            title: 'Поставить',
            icon: '',
            styleOutline: true
          },
          lock: false
        },
        {
          id: 3,
          preview: {
            typeName: 'helicopter',
            ImgName: "productCart-4.png"
          },
          info: {
            brand: 'Bravado',
            model: 'Buffalo XS Series',
            fuel: 832,
            number: '55DOC720',
            colors: ['#FF2F2F', '#2B2D49'],
          },
          btnInfo: {
            title: 'Забрать',
            disabled: true,
            icon: ''
          },
          lock: true
        },
        {
          id: 4,
          preview: {
            typeName: 'motorbike',
            ImgName: "productCart-5.png"
          },
          info: {
            brand: 'Western',
            model: 'Cargobob 2000',
            fuel: 0,
            number: '55DOC720',
            colors: ['#FFCA0D', '#2B2D49'],
          },
          btnInfo: {
            title: 'Поставить',
            disabled: true,
            icon: ''
          },
          lock: true
        },
        {
          id: 5,
          preview: {
            typeName: 'quadBike',
            ImgName: "productCart-6.png"
          },
          info: {
            brand: 'Nagasaki',
            model: 'Buzzard Attack Chopper',
            fuel: 279,
            number: '55DOC720',
            colors: ['#50FF33', '#2B2D49'],
          },
          btnInfo: {
            title: 'Заправить',
            icon: 'fuel-btn.svg',
            styleYellow: true
          },
          lock: false
        },
        {
          id: 6,
          preview: {
            typeName: 'passenger',
            ImgName: "productCart-1.png"
          },
          info: {
            brand: 'Bravado',
            model: 'Buffalo XS Series',
            fuel: 832,
            number: '55DOC720',
            colors: ['#FF2F2F', '#2B2D49'],
          },
          btnInfo: {
            title: 'Забрать',
            icon: '',
            styleWhite: true
          },
          lock: false
        },
        {
          id: 7,
          preview: {
            typeName: 'airplane',
            ImgName: "productCart-2.png"
          },
          info: {
            brand: 'Western',
            model: 'Cargobob 2000',
            fuel: 0,
            number: '55DOC720',
            colors: ['#FFCA0D', '#2B2D49'],
          },
          btnInfo: {
            title: 'Арендовать',
            icon: '',
            styleOutline: true
          },
          lock: false
        },
        {
          id: 8,
          preview: {
            typeName: 'passenger',
            ImgName: "productCart-3.png"
          },
          info: {
            brand: 'Nagasaki',
            model: 'Buzzard Attack Chopper',
            fuel: 279,
            number: '55DOC720',
            colors: ['#50FF33', '#2B2D49'],
          },
          btnInfo: {
            title: 'Поставить',
            disabled: true,
            icon: ''
          },
          lock: true
        },
        {
          id: 9,
          preview: {
            typeName: 'passenger',
            ImgName: "productCart-4.png"
          },
          info: {
            brand: 'Bravado',
            model: 'Buffalo XS Series',
            fuel: 832,
            number: '55DOC720',
            colors: ['#FF2F2F', '#2B2D49'],
          },
          btnInfo: {
            title: 'Забрать',
            icon: '',
            styleWhite: true
          },
          lock: false
        },
        {
          id: 10,
          preview: {
            typeName: 'airplane',
            ImgName: "productCart-5.png"
          },
          info: {
            brand: 'Western',
            model: 'Cargobob 2000',
            fuel: 0,
            number: '55DOC720',
            colors: ['#FFCA0D', '#2B2D49'],
          },
          btnInfo: {
            title: 'Заправить',
            icon: 'fuel-btn.svg',
            styleYellow: true
          },
          lock: false
        },
        {
          id: 11,
          preview: {
            typeName: 'passenger',
            ImgName: "productCart-6.png"
          },
          info: {
            brand: 'Nagasaki',
            model: 'Buzzard Attack Chopper',
            fuel: 279,
            number: '55DOC720',
            colors: ['#50FF33', '#2B2D49'],
          },
          btnInfo: {
            title: 'Поставить',
            icon: '',
            disabled: true,
            styleOutline: true
          },
          lock: true
        }
      ]
    }
  },
  methods: {
    openSelect(id) {
      this.dataSelects.forEach(element => {
        if (element.id != id) {
          element.isSelectOpen = false
        }
      });
      this.dataSelects[id].isSelectOpen = !this.dataSelects[id].isSelectOpen
    },
    optionSelect(option, id) {
      this.dataSelects[id].selected = option
      this.dataSelects[id].isSelectOpen = false
    }
  }
}
</script>

<style lang="sass">
.catalog
    position: relative
    z-index: 1
    color: white
    border-radius: unit(24)
    max-width: unit(790)
    width: 100%
    height: unit(640)
    &::before
        content: ''
        position: absolute
        z-index: -1
        width: 100%
        height: 100%
        left: 0
        top: 0
        backdrop-filter: blur(unit(24))
        background-color: rgba(18, 20, 52, 0.98)
        border-radius: unit(24)
    &__inner
        padding: unit(25) unit(30) unit(37) unit(44)
    &__top
        margin-bottom: unit(15)
    &__title
        text-align: center
        margin-bottom: unit(19)
    &__selects
        display: flex
        align-items: center
        justify-content: center
        margin-bottom: unit(18)
        &-item+&-item
            margin-left: unit(25)
    &__items
        position: relative
        z-index: 1
        &::before
            content: ''
            position: absolute
            z-index: 3
            bottom: unit(-10)
            background-color: #131534
            box-shadow: 0 unit(-12) unit(12) unit(12) #131534
            height: unit(16)
            left: 0
            width: 100%
        &-list
            display: flex
            justify-content: space-between
            flex-wrap: wrap
            padding: unit(4) unit(7) unit(35) unit(4)
            overflow: hidden
            height: unit(440)
            overflow-y: scroll
            &::-webkit-scrollbar
                width: unit(7)
                padding-left: unit(7)
            &::-webkit-scrollbar-track
                background-color: transparent
            &::-webkit-scrollbar-thumb
                background-color: #26294C
                border-radius: unit(24)

    &__item
        margin-top: unit(30)
        &:nth-child(-n + 3)
            margin-top: 0

</style>
