<template>

  <div class="wrapper">
    <header>
      <Nav></Nav>
    </header> 
    <main>
      <div class="container py-9 py-md-12 border-top border-gray-300">
        <div class="row">
          <div class="col-md-10 col-lg-8 col-xl-6 mx-auto bg-white rounded-3">
            <div class="p-5 p-sm-7">
              <p class="mb-7 text-accent-200 fw-bold fs-5 lh-sm">{{ text }}</p>
              <form @submit.prevent class="mb-5 mb-sm-7">
                <div class="mb-5">
                  <label for="member-account" class="form-label fw-bold text-primary-500">會員帳號</label>
                  <input type="text" class="form-control bg-gray-100 mt-1 rounded-2 py-2 px-3" id="member-account" style="color: #ADB5BD" placeholder="請輸入會員帳號">
                </div>
                <div class="mb-5 mb-sm-7" :class="{ 'mb-5': mode === 1, 'mb-sm-7': mode === 1, }">
                  <label for="member-password" class="form-label fw-bold text-primary-500">密碼</label>
                  <input type="password" class="form-control bg-gray-100 mt-1 rounded-2 py-2 px-3" id="member-password" style="color: #ADB5BD" placeholder="請輸入密碼">
                </div>
                <div v-if="mode === 0" class="mb-5 mb-sm-7">
                  <label for="member-email" class="form-label fw-bold text-primary-500">電子信箱</label>
                  <input type="email" class="form-control bg-gray-100 mt-1 rounded-2 py-2 px-3" id="member-email" style="color: #ADB5BD" placeholder="請輸入電子信箱">
                </div>
                <button class="btn btn-accent-200 w-100 py-2 d-flex justify-content-center text-white fw-bold rounded-pill">
                  立即{{ text }}
                  <span class="material-symbols-outlined ms-3 text-white">arrow_forward</span>
                </button>
              </form>
              <div class="mb-5 mb-sm-7 d-flex justify-content-center align-items-center">
                <div class="line-decoration"></div>
                <span class="d-inline-block px-3 text-center text-gray-300 fw-bold">或以其他方式{{ text }}</span>
                <div class="line-decoration"></div>
              </div>
              <div class="mb-5 mb-sm-7">
                <button class="mb-2 btn bg-gray-100 text- fw-bold border-gray-100 w-100 py-2 
                d-flex align-items-center justify-content-center rounded-pill" style="color: #52525B">
                  <img class="me-2" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/icons-google.png?raw=true" alt="google">
                  <span class="ms-1">使用 Google{{ text }}</span>
                </button>
                <button class="mb-2 btn bg-gray-100 text- fw-bold border-gray-100 w-100 py-2 
                d-flex align-items-center justify-content-center rounded-pill" style="color: #52525B">
                  <img class="me-2" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/icons-facebook.png?raw=true" alt="google">
                  <span class="ms-1">使用 Facebook{{ text }}</span>
                </button>
              </div>
              <div class="d-flex align-items-center justify-content-center">
                <p class="mb-0 me-2 fw-bold" style="#212121">已經是會員了?</p>
                <a @click="handleMode" class="cursor-pointer text-decoration-none ms-1 text-accent-200 fw-bold">點此{{ mode === 0 ? "登入" : "註冊" }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
  import Nav from "@/components/Nav.vue";
  import Footer from "@/components/Footer.vue";
  import { ref, computed } from "vue";
  //註冊0 登入1
  const mode = ref<number>(0);
  const text = computed(() => mode.value === 0 ? "註冊" : "登入")
  const handleMode = () => {
    window.scrollTo(0, 0)
    mode.value = mode.value === 0 ? 1 : 0;
  }
</script>

<style scoped lang="scss">
  .wrapper{
    min-height: 100vh;
    height: 100%;
  }
  .line-decoration{
    flex-grow: 1;
    height: 2px;
    background-color: #DEE2E6;
  }
</style>
