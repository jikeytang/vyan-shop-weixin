<template>
  <div class="app-bottom">
    <cube-tab-bar class="app-tab-bar" v-model="selectedLabelSlots" show-slider @click="clickHandler">
      <cube-tab v-for="(item, index) in tabLabels" :label="item.label" :key="index">
        <i slot="icon" :class="item.icon"></i>
        <p>{{item.label}}</p>
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script>
export default {
  name: 'AppTabBar',
  data () {
    return {
      selectedLabelSlots: '首页',
      tabLabels: [
        { label: '首页', icon: 'cubeic-home', path: '/' },
        { label: '分类', icon: 'cubeic-like', path: 'category' },
        { label: '购物车', icon: 'cubeic-mall', path: 'cart' },
        { label: '我的微燕', icon: 'cubeic-person', path: 'user' }
      ]
    }
  },
  computed: {
    initialIndex () {
      let index = 0
      index = this.tabLabels.findIndex(item => item.label === this.selectedLabel)
      return index
    }
  },
  methods: {
    clickHandler (label) {
      console.log('b')
      this.tabLabels.forEach(item => {
        if (item.label === label) {
          this.$router.push(item.path)
        }
      })
    }
  }
}
</script>

<style lang="scss">
.app-bottom {
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 5555;
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
  background-color: #fff;
  .app-tab-bar{
    font-size: 15px;
    padding: 5px 0;
    i{
      font-size: 30px;
    }
    p{
      margin-top: 5px;
    }
  }
}
</style>
