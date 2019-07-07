<template>
    <div class="order-item">
      <div class="order-item-header">
        <span class="store-name">xxx旗舰店 ></span>
        <span class="order-status">交易成功</span>
      </div>
      <div class="order-item-product">
        <img src="//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/11821/36/13554/133495/5c99cb1bE2f4607a6/645a9314c3ce023e.jpg!q70.dpg" class="product-pic j_rec_goods_pic opa1 ll_fadeIn">
        <div class="product-info">
          <div class="product-text">【送货上楼】中雀麻将机全自动过山车麻将桌餐桌式机麻免推牌调试棋牌家用机麻 灿鸿过山车【全国通用】44-136/144</div>
          <div class="product-text product-property">balabalabalabablalbalblalbablalbalblalblalbalblalblalblababalabalabalabablalbalblalbablalbalblalblalbalblalblalblaba</div>
          <div class="product-text">
            <span class="product-feature">微燕购</span>
            <span class="product-feature">七天退换</span>
            <span class="product-feature">微燕购</span>
            <span class="product-feature">七天退换</span>
            <span class="product-feature">微燕购</span>
            <span class="product-feature">七天退换</span>
          </div>
        </div>
      </div>
      <div class="product-count">
        共1件商品 合计：¥19.90
      </div>
    </div>
</template>

<script>
export default {
  name: 'order-item'
}
</script>

<style lang="scss" scoped>
  .order-item {
    background-color: #fff;
    padding: 0.2rem;
    /*width: 100%;*/
    box-sizing: border-box;
    border-radius: 0.2rem;
    overflow: hidden;
    margin-bottom: 0.2rem;
    .order-item-header {
      color: #666;
      display: flex;
      padding: 0 0rem 0.2rem;
      .store-name {
        flex: 1;
      }
      .order-status{
        color: #e8864c;
      }
    }
    .order-item-product {
      padding: 0.2rem 0;
      display: flex;
      .product-pic {
        width: 2rem;
        border-radius: 0.1rem;
      }
      .product-info {
        flex: 1;
        padding: 0 0.2rem;
        .product-text {
          margin-bottom: 0.1rem;
          width: 100%;
          text-overflow: ellipsis;
          display: -webkit-box;
          white-space: normal;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          word-break: break-word;
        }
        .product-property {
          color: #999;
        }
        .product-feature {
          color: #e8864c;
          background-color: rgba(232, 134, 76, 0.1);
          font-size: 0.12rem;
          padding: 0rem 0.1rem;
          margin-right: 0.1rem;
          border-radius: 0.2rem;
          display: inline-block;
          margin-top: 0.1rem;
        }
      }
    }

    .product-count {
      font-size: 0.12rem;
      color: #666;
      text-align: right;
    }
  }
  /*product-pic*/
</style>
