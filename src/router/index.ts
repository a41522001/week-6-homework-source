import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Article from "@/views/Article.vue";
import LoginAndSignup from "@/views/LoginAndSignup.vue";
import Subscribe from "@/views/Subscribe.vue";
import Payment from "@/views/Payment.vue";
import PaySuccess from "@/views/PaySuccess.vue";
import About from "@/views/About.vue";
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: "/article",
    name: "article",
    component: Article
  },
  {
    path: "/loginAndSignup",
    name: "loginAndSignup",
    component: LoginAndSignup
  },
  {
    path: "/subscribe",
    name: "subscribe",
    component: Subscribe
  },
  {
    path: "/payment",
    name: "payment",
    component: Payment
  },
  {
    path: "/paySuccess",
    name: "paySuccess",
    component: PaySuccess
  },
  {
    path: "/about",
    name: "about",
    component: About
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});
export default router;
