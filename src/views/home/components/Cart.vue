<template>
  <div class="cart">
     <van-icon size="50" :name="cartImage" badge="12"/> 
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Cart",
  data() {
    return {
      cartImage: require("assets/img/购物车入口.png")
    }  
  }  
}
</script>
<style lang="less">
  .cart {
    position: fixed;
    bottom: 300px;
  }  
</style>
<style>
.cart .van-info {
   top: 20px;
   right: 16px; 
}
</style>