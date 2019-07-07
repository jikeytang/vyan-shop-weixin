<template>
  <div class="container">
    <header class="header">
      <div class="profile">
        <img src="https://wwc.alicdn.com/avatar/getAvatar.do?userId=2405174948&width=80&height=80&type=sns" alt="" srcset="" class="avatar">
        <span class="nickname">Yu</span>
        <div class="settings">
          <a class="setting-item" href="#"><i class="fa fa-cog fa-fw"></i></a>
        </div>
      </div>
      <div class="my">
        <a class="cell">
          <span class="value">10</span>
          <span>收藏夹</span>
        </a>
        <a class="cell">
          <span class="value">10</span>
          <span>关注店铺</span>
        </a>
        <a class="cell">
          <span class="value">10</span>
          <span>足迹</span>
        </a>
        <a class="cell">
          <span class="value">10</span>
          <span>红包卡劵</span>
        </a>
      </div>
      <div class="slider-news">
        <cube-slide
          ref="slide"
          :loop="true"
          :initial-index="0"
          :auto-play="true"
          :show-dots="false"
          :interval="2000"
          direction="vertical"
        >
          <cube-slide-item>
            <div class="news-item">
              您的订单已发货，请确认签收。
            </div>
          </cube-slide-item>

          <cube-slide-item>
            <div class="news-item">
              您有订单未评价
            </div>
          </cube-slide-item>
        </cube-slide>
      </div>
    </header>
    <main class="body">
      <div class="orders">
        <div class="order-header">
          <span class="title">我的订单</span>
          <router-link :to="{name: 'UserOrder'}">查看全部订单></router-link>
        </div>
        <div class="order-status">
          <router-link :to="{name: 'UserOrder', query: {type: 1}}"><span class="icon"><i class="cubeic-mall"></i><span class="count">10</span></span>待付款</router-link>
          <router-link :to="{name: 'UserOrder', query: {type: 2}}"><span class="icon"><i class="cubeic-mall"></i><span class="count">10</span></span>待发货</router-link>
          <router-link :to="{name: 'UserOrder', query: {type: 3}}"><span class="icon"><i class="cubeic-mall"></i><span class="count">10</span></span>待收货</router-link>
          <router-link :to="{name: 'UserOrder', query: {type: 4}}"><span class="icon"><i class="cubeic-mall"></i><span class="count">10</span></span>评价</router-link>
          <router-link :to="{}"><span class="icon"><i class="cubeic-mall"></i><span class="count">10</span></span>待付款</router-link>
          <router-link :to="{}"><span class="icon"><i class="cubeic-mall"></i><span class="count">10</span></span>退款/售后</router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: 'A'
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #e8864c;
  margin-bottom: 0.5rem;
  padding: 0 0.2rem;
  .profile {
    align-items: flex-start;
    display: flex;
    height: 100%;
    padding: 0.2rem 0.0rem;
    .avatar {
      width: 0.80rem;
      height: 0.80rem;
      border-radius: 50%;
      border: 1px solid #fff;
    }

    .nickname {
      padding: 0.30rem 0.20rem 0;
      font-size: 0.4rem;
      color: #fff;
      flex: 1;
    }

    .settings {
      display: flex;
      align-items: flex-start;
      height: 100%;
      color: #fff;
      font-size: 0.4rem;
      .setting-item {
        color: inherit;
      }
    }
  }

  .my {
    display: flex;
    .cell {
      display: inline-block;
      flex: 1;
      color: #fff;
      font-size: 100%;
      span {
        display: block;
        text-align: center;
        letter-spacing: 1px;
      }
      .value {
        font-size: 150%;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
      }
    }
  }
  .slider-news {
    height: 1rem;
    background-color: #fff;
    border-radius: 0.2rem;
    transform: translateY(50%);
    overflow: hidden;
    .news-item {
      width: 100%;
      height: 100%;
      background-color: #fff;
      padding: 0.1rem;
    }
  }
}
.body {
  width: 100%;
  padding: 0 0.2rem;
  box-sizing: border-box;
  .orders {
    margin-top: 0.5rem + 0.2rem;
    border-radius: 0.2rem;
    background-color: #fff;
    color: #666;
    .order-header {
      padding: 0.2rem;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      align-items: center;
      .title {
        flex: 1;
        font-size: 0.30rem;
      }
      a {
        color: #999;
      }
    }
    .order-status {
      display: flex;
      padding: 0.4rem 0 0.2rem;
      align-items: center;
      a {
        text-align: center;
        flex: 1;
        display: inline-block;
        color: #666;
        .icon {
          display: block;
          font-size: 0.6rem;
          padding-bottom: 0.1rem;
          color: #e8864c;
          position: relative;
          width: 1rem;
          margin: 0 auto;
          .count {
            background-color: #fff;
            z-index: 1;
            position: absolute;
            top: -0.04rem;
            right: 0.04rem;
            display: block;
            width: 0.3rem;;
            height: 0.3rem;
            line-height: 0.3rem;
            border: 1px solid #e8864c;
            border-radius: 50%;
            font-size: 0.22rem;
          }
        }
      }
    }
  }
}
</style>
