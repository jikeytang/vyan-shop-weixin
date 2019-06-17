<template>
  <div class="app-home">
    <app-header/>
    <app-slide/>
    <app-nav/>
    <app-item-sale/>
    <water-fall/>
  </div>
</template>
<script>
import WaterFall from './pages/waterFall'
import AppSlide from './pages/AppSlide'
import AppNav from './pages/AppNav'
import AppItemSale from './pages/AppItemSale'

export default {
  name: 'Goods',
  components: {
    WaterFall,
    AppSlide,
    AppNav,
    AppItemSale
  },
  data () {
    return {
    }
  },
  created () {},
  methods: {
    clickHandler (item, index) {
      console.log(item, index)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
