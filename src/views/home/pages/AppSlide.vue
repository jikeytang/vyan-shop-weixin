<template>
  <cube-slide class="app-header-slide" ref="slide" :data="items" @change="changePage">
    <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
      <a :href="item.url">
        <img :src="item.image">
      </a>
    </cube-slide-item>
  </cube-slide>
</template>

<script>
export default {
  name: 'AppSlide',
  data () {
    return {
      items: [
        {
          url: 'http://www.jing-ui.com/',
          image: 'http://jing-ui.com/Public/uploads/1394098765.jpg'
        },
        {
          url: 'http://www.jing-ui.com/',
          image: 'http://jing-ui.com/Public/uploads/1408290688.jpg'
        },
        {
          url: 'http://www.jing-ui.com/',
          image: 'http://jing-ui.com/Public/uploads/banner-02.jpg'
        }
      ]
    }
  },
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
.app-header-slide {
  height: 200px;
  img {
    max-width: 100%;
    height: auto;
    // min-height: 100%;
  }
}
</style>
