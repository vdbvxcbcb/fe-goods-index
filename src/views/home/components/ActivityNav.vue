<template>
  <div class="activity-nav-wrapper">
    <div class="activity-nav-item" v-for="(image, index) in images" :key="index">
      <h2 class="activity-nav-title" :class="{ one: index === 0, two: index === 1 }">
        {{ image.title }}
      </h2>
      <a>
        <img :src="image.img" :alt="altImage" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityNav",
  data() {
    return {
      images: [
        { title: "满减送", img: require("assets/img/满减送.png") },
        { title: "特惠套餐", img: require("assets/img/特惠套餐.png") },
      ],
      altImage: require("assets/img/无产品图.png"),
    };
  },
};
</script>

<style lang="less" scoped>
.activity-nav-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  .activity-nav-item {
    position: relative;
    a,
    img {
      display: inline-block;
      width: 330px;
      height: 180px;
      border-radius: 10px;
    }
  }
  .activity-nav-title {
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 30px;
  }
  .one {
    color: #ec5661;
  }
  .two {
    color: #c7792a;
  }
}
</style>
