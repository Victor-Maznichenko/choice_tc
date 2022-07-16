<template>
    <div class="select">
        <div class="select__top">
            <span>НАЗВАНИЕ</span>
            <img src="@/assets/images/icons/arrow-bottom.svg" alt="">
        </div>
        <!-- <div class="select__container">
            <div class="select__container-list">
                <div class="select__container-item">
                    <span>Сначала дороже</span>
                    <input type="checkbox" name="" id="">
                </div>
                <div class="select__container-item">
                    <span>Сначала дороже</span>
                    <input type="checkbox" name="" id="">
                </div>
            </div>
        </div> -->
    </div>
</template>

<style lang="sass">
.select
    position: relative
    &__top
        font-size: unit(12)
        font-weight: 400
    &__container
        position: absolute
        background: #191B41
        box-shadow: 0px 32px 48px rgba(0, 0, 0, 0.12)
        border-radius: 12px
</style>
