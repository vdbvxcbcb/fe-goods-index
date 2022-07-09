<template>
  <div class="home-wrapper">
    <div class="top">
      <nav-bar class="nav">
        <div slot="center">订货无忧</div>
      </nav-bar>
    </div>
    <scroll class="content">
      <div class="color-wrapper">
        <div class="search-wrapper">
          <van-search
            v-model="value"
            shape="round"
            :left-icon="searchImage"
            show-action
            placeholder="搜索商品名称"
            background="#f45c6d"
          >
            <template #action>
              <van-icon :name="messageImage" size="20" badge="2" />
            </template>
          </van-search>
        </div>
        <van-swipe
         class="my-swipe"
         :autoplay="3000"
         indicator-color="white"
         @change="onChange"
        >
         <van-swipe-item v-for="(image, index) in swipeImages" :key="index">
           <img :src="image" />
         </van-swipe-item>
         <template #indicator>
           <ul class="indicators">
             <li
               v-for="(item, index) in swipeImages"
               :key="index"
               :class="{ active: checkActive(index) }"
             ></li>
           </ul>
         </template>
        </van-swipe>
      </div>
      <div class="bottom">
        <activity-nav/>
        <discount-limit/>
        <hot-product/>
      </div> 
    </scroll>
     <cart/>
  </div>
</template>

<script>
import Scroll from "common/scroll/Scroll";
import NavBar from "common/navBar/NavBar";
import ActivityNav from "./components/ActivityNav";
import DiscountLimit from "./components/DiscountLimit";
import HotProduct from "./components/HotProduct";
import Cart from "./components/Cart";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    NavBar,
    ActivityNav,
    DiscountLimit,
    HotProduct,
    Scroll,
    Cart
  },
  data() {
    return {
      active: 0,
      value: "",
      messageImage: require("assets/img/消息.png"),
      searchImage: require("assets/img/搜索.png"),
      swipeImages: [
        require("assets/img/banner.png"),
        require("assets/img/banner.png"),
        require("assets/img/banner.png"),
      ],
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    checkActive(index) {
      return index === this.current; // current为监听的轮播index
    },
  },
};
</script>

<style lang="less" scoped>
.top, .color-wrapper {
  background: rgb(244, 92, 109);
}
.content {
  position: absolute;
  top: 100px;
  bottom: 100px;
  left: 0;
  right: 0; 
}
.bottom {
  background: #f4f5f8;
  padding: 30px 30px 32px 30px;
}
.search-wrapper {
  background: rgb(244, 92, 109);
}
.my-swipe {
  .van-swipe-item {
    height: 360px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.indicators {
  position: absolute;
  bottom: 22px;
  left: 50%;
  display: flex;
  height: 10px;
  align-items: center;
  transform: translateX(-50%);
}

.indicators li {
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  opacity: 0.3;
  transition: opacity 0.5s;

  &:not(:last-child) {
    margin-right: 6px;
  }

  &.active {
    width: 26px;
    height: 8px;
    border-radius: 3px;
    background-color: white;
    opacity: 1;
  }
}
</style>
<style lang="less">
.search-wrapper {
  .van-search {
    height: 110px;
  }
  .van-search__content {
    background: #f88d99;
  }
  .van-search__action {
    display: flex;
    align-items: center;
  }
  .van-info {
    color: #f88d99;
    background: #fff;
  }
  .van-field__left-icon {
    display: flex;
    align-items: center;
  }
  .van-field__control {
    color: #fff;
  }
  input::-webkit-input-placeholder {
    color: #fff;
  }
}
</style>
