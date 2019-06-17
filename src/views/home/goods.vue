<template>
  <div class="app-goods">
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
          <img :src="item.image">
        </a>
      </cube-slide-item>
    </cube-slide>
    <water-fall></water-fall>
  </div>
</template>

<script>
import WaterFall from './pages/waterFall'

export default {
  name: 'Goods',
  components: {
    WaterFall
  },
  data () {
    return {
      items: [
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
        }
      ]
    }
  },
  created () {},
  methods: {
    changePage (current) {
      // console.log('当前轮播图序号为:' + current)
    },
    clickHandler (item, index) {
      console.log(item, index)
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-swiper {
  height: 250px;
  .banner-item {
    float: left;
    width: 100%;
    height: 100%;
    line-height: 250px;
    text-align: center;
    font-size: 28px;
    color: #fff;
    box-align: center;
    align-items: center;
    box-pack: center;
    justify-content: center;
    text-decoration-line: none;
    img {
      max-width: 100%;
    }
  }
}
</style>
