<template>
  <div class="app-header">
    <header class="search-header">
      <a href="#" class="logo">
        <img class="wyan" :src="require('@/assets/wyan-logo.png')" alt="">
      </a>
      <div class="search-field ">
        <div class="cube-input">
          <input type="text" class="header-input" name="" id="" placeholder="搜索商品、品牌">
        </div>
        <!-- <cube-input v-model="value" :clearable="clearable" placeholder="电视盒子"></cube-input> -->
      </div>
    </header>
  </div>
</template>

<script>

export default {
  name: 'AppHeader',
  data () {
    return {
      value: '',
      clearable: {
        visible: true,
        blurHidden: true
      }
    }
  }
}
</script>

<style lang="scss">
.search-header{
  display:flex;
  border-bottom: 1px solid #e2e4ea;
  background: #fff;
  align-items: center;
  .logo{
    text-align:center;
    font-size:25px;
    color: #f0374e;
    .wyan{
      width: 40px;
      padding: 0 15px;
    }
  }
  .search-field{
    flex:1;
    .cube-input{
      input{
        border:0;
        line-height:50px;
        &:focus{
          outline:none;
          box-shadow:none;
        }
      }
    }
  }
}
</style>
