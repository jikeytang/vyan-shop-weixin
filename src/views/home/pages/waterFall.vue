<template>
  <div class="water-fall">
    <ul class="water-list">
      <li class="item" v-for="(item, index) in new Array(10)" :key="index">
        <a href="#">
          <div class="similar-product">
            <div class="similar-posre"><img src="//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/11821/36/13554/133495/5c99cb1bE2f4607a6/645a9314c3ce023e.jpg!q70.dpg" class="j_rec_goods_pic opa1 ll_fadeIn"></div>
            <span class="similar-product-text">【送货上楼】中雀麻将机全自动过山车麻将桌餐桌式机麻免推牌调试棋牌家用机麻 灿鸿过山车【全国通用】44-136/144</span>
            <p class="similar-product-info">
              <span class="similar-product-price"><span class="big-price">2499</span></span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'WaterFall',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.water-list{
  margin-left:.2rem;
  margin-right:.2rem;
  margin-bottom:.2rem;
  li{
    float:left;
    width:50%;
    box-sizing:border-box;
    padding-bottom:25px;
    position:relative;
    &:nth-child(2n+1){
      padding-right:10px;
    }
    &:nth-child(2n){
      padding-left:10px;
    }
    .similar-product{
      background-color:#fff;
      padding-bottom:15px;
      font-size:0;
      img{
        max-width:100%;
      }
      .sam-price{
        display:inline-block;
        color:#1a68bc;
        height:14px;
        outline:14px;
        position:relative;
        font-size:13px;
      }
      .similar-product-text{
        box-sizing:border-box;
        height:70px;
        font-size:20px;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        word-break:break-word;
        color:#232326;
        margin-top:15px;
        line-height:35px;
        margin-bottom:13px;
        padding:0 4px;
      }
      .similar-product-info{
        height:22px;
        font-size:13px;
        overflow:hidden;
      }
      .similar-product-price{
        color:#f23030;
        display:inline-block;
        padding:0 5px 0 4px;
        position:relative;
        top:1px;
        height:25px;
        line-height:25px;
        .big-price{
          font-size:16px;
        }
      }
      .guess-button{
        display:block;
        position:absolute;
        top:0;
        right:8px;
        text-align:center;
        color:#686868;
        font-size:12px;
        width:49px;
        height:24px;
        line-height:25px
      }
      .guess-button:after{
        content:"";
        width:200%;
        height:200%;
        position:absolute;
        top:0;
        left:0;
        border:1px solid #bfbfbf;
        border-radius:4px;
        -webkit-transform:scale(.5, .5);
        transform:scale(.5, .5);
        -webkit-transform-origin:top left;
        transform-origin:top left
      }
    }
  }
}
</style>
