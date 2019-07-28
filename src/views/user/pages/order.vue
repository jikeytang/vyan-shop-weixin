<template>
  <div class="user-order">
    <div slot="content">
      <cube-tab-bar
        class="tab-bar"
        v-model="selectedLabel"
        show-slider
        :use-transition="false"
        ref="tabNav"
        :data="tabLabels"
        @change="tabBarChange"
      ></cube-tab-bar>
      <div class="tab-slide-container">
        <cube-slide
          ref="slide"
          :loop="false"
          :initial-index="initialIndex"
          :auto-play="false"
          :show-dots="false"
          :options="slideOptions"
          @scroll="scroll"
          @change="changePage"
        >
          <!-- 全部 -->
          <cube-slide-item>
            <all></all>
          </cube-slide-item>

          <!-- 待付款 -->
          <cube-slide-item>
            <obligations></obligations>
          </cube-slide-item>

          <!-- 待发货 -->
          <cube-slide-item>
            <back-orders></back-orders>
          </cube-slide-item>

          <!-- 待收获 -->
          <cube-slide-item>
            <receivable></receivable>
          </cube-slide-item>

          <!-- 待评价 -->
          <cube-slide-item>
            <evaluable></evaluable>
          </cube-slide-item>
        </cube-slide>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import all from './order/all'
import obligations from './order/obligations'
import backOrders from './order/back-orders'
import receivable from './order/receivable'
import evaluable from './order/evaluable'

export default {
  components: { all, obligations, backOrders, receivable, evaluable },
  data () {
    return {
      selectedLabel: '',
      initialIndex: 0,
      tabLabels: [
        {
          label: '全部'
        },
        {
          label: '待付款'
        },
        {
          label: '待发货'
        },
        {
          label: '待收货'
        },
        {
          label: '待评价'
        }
      ],
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        /* lock y-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0
      },
      scrollOptions: {
        /* lock x-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0
      }
    }
  },
  // computed: {
  //   initialIndex () {
  //     let qt = Number(this.$route.query.type)
  //     return isNaN(qt) ? 0 : qt
  //   }
  // },
  methods: {
    tabBarChange (label) {
      this.initialIndex = this.tabLabels.findIndex(item => item.label === label)
    },
    changePage (current) {
      this.selectedLabel = this.tabLabels[current].label
    },
    scroll (pos) {
      const x = Math.abs(pos.x)
      const tabItemWidth = this.$refs.tabNav.$el.clientWidth
      const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
      const deltaX = (x / slideScrollerWidth) * tabItemWidth
      this.$refs.tabNav.setSliderTransform(deltaX)
    }
  },
  created () {
    let qt = Number(this.$route.query.type)
    this.initialIndex = isNaN(qt) ? 0 : qt
    this.changePage(this.initialIndex)
  }
}
</script>
<style lang="scss" scoped>
  .user-order{
    .tab-bar {
      color: #666;
      height: 0.8rem;
      /*background-color: #fff;*/
    }
    .tab-slide-container{
      padding: 0.2rem;
    }
  }
</style>
