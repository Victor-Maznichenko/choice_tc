<template>
  <div class="catalog">
    <div class="catalog__inner">
      <div class="catalog__top">
        <h1 class="catalog__title title">ВЫБЕРИТЕ транспортное средство</h1>
        <div class="catalog__selects">
          <div class="select">
            <div class="select__top">
              <span>НАЗВАНИЕ</span>
              <svg width="10" height="6" viewBox="0 0 10 6">
                <path
                  d="M4.99999 3.78134L8.29999 0.481339L9.24266 1.424L4.99999 5.66667L0.757324 1.424L1.69999 0.481339L4.99999 3.78134Z"
                  fill="white" />
              </svg>
            </div>
            <div class="select__container">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogView'
}
</script>
