<template>
  <div class="hot-product-wrapper">
    <h1 class="hot-title">热销产品</h1>
    <div class="hot-list">
      <div class="hot-item" v-for="(item, index) in images" :key="index">
        <div class="hot-good">
          <img v-if="item.img" :src="item.img">
          <img v-else :src="altImage">
        </div>
        <div class="hot-good-name">{{item.name}}</div>
        <span class="hot-tag one-pixel-border" v-for="(tag, index) in item.tags" :key="index">{{tag}}</span>
        <div class="hot-price">￥{{item.price}}<div class="hot-discount" v-if="item.hasDiscount">优惠价</div></div>
      </div>    
    </div>    
  </div>
</template>

<script>
export default {
  name: "HotProduct",
  data() {
    return {
      images: [
        { 
          name: "焕活紧致收细专属套组" ,
          tags: ["满800减200"],
          img: require("assets/img/热销产品1.jpg"), 
          price: 600, 
          hasDiscount: false 
        },
        { 
          name: "小气泡面部活化套组", 
          tags: ["2折", "满800减200"],
          price: 600, 
          hasDiscount: true 
        },
        { 
          name: "焕活紧致收细专属套组", 
          tags: ["特惠套餐"], 
          img: require("assets/img/热销产品2.jpg"), 
          price: 6000, 
          hasDiscount: true 
        },
        { 
          name: "焕活紧致收细专属套组",
          tags: ["2折"], 
          img: require("assets/img/热销产品3.jpg"), 
          price: 600, 
          hasDiscount: true 
        },
      ],
      altImage: require("assets/img/无产品图.png"),
    }
  }
}
</script>

<style lang="less" scoped>
  .hot-title {
    font-size: 30px;
    margin: 20px 0;
  }
  .hot-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .hot-item  {
      width: 330px;
      height: 440px; 
      background: #fff;
      margin-bottom: 20px;
      img {
        width: 330px;
        height: 280px; 
      }
      .hot-good-name, .hot-price, .hot-tag {
        margin-left: 18px;
      }
      .hot-good-name {
        font-size: 28px;
        margin-top: 8px;
        margin-bottom: 8px;
      }
      .hot-tag {
        display: inline-block;
        font-size: 12px;
        padding: 0 12px;
        text-align: center;
        color: #999;
      }
      .one-pixel-border {
        position: relative;
        &:after{
          content:" ";
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          transform: scale(0.5);
          transform-origin: left top;
          box-sizing: border-box;
          border: 1px solid #999;
          border-radius: 14px;
       }
      }
      .hot-price {
        display: flex;
        align-items: center;
        font-size: 32px;
        margin-top: 8px;
        margin-bottom: 8px;
      }
      .hot-discount {
        display: inline-block;
        font-size: 10px;
        margin-left: 2px;
      }
    }
  }   
</style>