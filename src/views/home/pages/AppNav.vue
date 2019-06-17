<template>
  <div class="app-nav">
    <cube-tab-bar class="app-nav-bar" @click="clickHandler">
      <cube-tab v-for="(item) in tabs" :label="item.label" :key="item.label">
        <i slot="icon" :class="item.icon"></i>
        <p>{{item.label}}</p>
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        {
          label: '休闲零食',
          icon: 'cubeic-home'
        },
        {
          label: '粮油超市',
          icon: 'cubeic-like'
        },
        {
          label: '中外名酒',
          icon: 'cubeic-vip'
        },
        {
          label: '进口食品',
          icon: 'cubeic-person'
        },
        {
          label: '服饰生鲜',
          icon: 'cubeic-person'
        }
      ]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-nav{
  background: #fff;
  margin-bottom: 15px;
}
.app-nav-bar{
  font-size: 15px;
  padding: 8px 0;
  .cube-tab{
    >i{
      font-size: 40px;
      display: inline-block;
      margin-bottom: 5px;
    }
  }
}
</style>
