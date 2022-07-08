import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { 
  Tabbar, 
  TabbarItem ,
  Icon, 
  NavBar, 
  Search,
  Swipe,
  SwipeItem  
} from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
