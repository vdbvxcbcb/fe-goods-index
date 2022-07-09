<template>
  <div class="discount-limit-wrapper">
    <div class="discount-top">
      <h2 class="discount-title">限时折扣</h2>
      <div class="more">
        更多
      </div>
    </div>
    <div class="discount-list">
      <div class="discount-item" v-for="(item, index) in images" :key="index">
        <div class="discount-good"><img :src="item.img" :alt="altImage"></div>
        <div class="discount-price"><div class="discount-icon">折后价</div>￥{{item.discountPrice}}</div>
        <div class="original-price">原价￥{{item.price}}</div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscountLimit",
  data() {
    return {
      images: [
        { img: require("assets/img/折扣商品.jpg"), price: 2200, discountPrice: 600 },
        { img: require("assets/img/折扣商品.jpg"), price: 2200, discountPrice: 600 },
        { img: require("assets/img/折扣商品.jpg"), price: 2200, discountPrice: 600 },
      ],
       altImage: require("assets/img/无产品图.png"),
    }
  }
};
</script>

<style lang="less" scoped>
.discount-limit-wrapper {
  box-sizing: border-box;
  height: 386px;
  padding: 20px 32px 32px 32px;
  background: #fff;
  border-radius: 10px;
}
.discount-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.discount-title {
  font-size: 32px; 
  margin: 0; 
}
.more {
  display: flex;
  align-items: center;
  color: #999;
  font-size: 26px;
}
.more::after {
  display: inline-block;
  content: "";
  width: 10px;
  height: 10px;
  border-top: 2px solid #999;
  border-right: 2px solid #999;
  transform: rotate(45deg);
}
.discount-list {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.discount-good {
  img {
    width: 190px;
    height: 190px;
  }
  border-radius: 10px;
  margin-bottom: 12px;
}
.discount-price {
  font-size: 30px;
  font-weight: bold;
  .discount-icon {
    display: inline-block;
    width: 90px;
    height: 40px;
    font-size: 12px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-weight: bold;
    border-radius: 8px;
    background-image: linear-gradient(to right, #a060ec 0%, #c65fd4 100%);
  }
}
.original-price {
  font-size: 20px;  
  color: #999;  
  text-decoration: line-through;
}
</style>
