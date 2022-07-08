<template>
  <van-tabbar v-model="active" active-color="#f77674">
    <van-tabbar-item replace to="/home">
      <van-icon class="mb-4" class-prefix="my-icon" name="1" />
      <div class="text-size">首页</div>
    </van-tabbar-item>
    <van-tabbar-item replace to="/category">
      <van-icon class="mb-4" class-prefix="my-icon" name="fenlei" />
      <div class="text-size">分类</div>
    </van-tabbar-item>
    <van-tabbar-item replace to="/order" badge="2">
      <van-icon class="mb-4" class-prefix="my-icon" name="dingdan" />
      <div class="text-size">订单</div>
    </van-tabbar-item>
    <van-tabbar-item replace to="/profile" badge="2">
      <van-icon class="mb-4" class-prefix="my-icon" name="iconfuzhi" />
      <div class="text-size">我的</div>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
.mb-4 {
  display: block;
  font-size: 46px;
  margin-bottom: 5px;
}
.text-size {
  font-size: 22px;
}
</style>
<style>
.van-tabbar {
  height: 100px; 
}
.van-tabbar-item .van-info {
  right: -20px;
}
</style>
