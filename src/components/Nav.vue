<template>
  <nav class="navbar navbar-expand-lg bg-body position-sticky top-0 z-3">
    <div class="container-xl py-4 py-lg-6">
      <h1 v-if="toggle" class="mb-0 me-6 d-lg-block">
        <a class="navbar-brand d-block p-0" href="#">
          <img src="@/../public/Vector.svg" alt="">
        </a>
      </h1>
      <button class="navbar-toggler ms-auto border-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation" @click="toggle = !toggle">
        <span v-if="toggle" class="navbar-toggler-icon"></span>
        <span v-else type="button" class="btn-close navbar-toggler" aria-label="Close"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="input-group align-items-center mx-auto w-lg-auto mt-5 mt-lg-0 ms-lg-1 px-4 py-2 rounded-pill bg-white border-1">
          <input type="text" class="form-control border-0 bg-white p-0 my-1" placeholder="搜尋文章" aria-label="Username" aria-describedby="basic-addon1">
          <span class="material-symbols-outlined fs-5 text-accent-200">
          search
          </span>
        </div>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-start align-items-lg-center">
          <li class="nav-item me-0 me-lg-4 mt-5 mt-lg-0">
            <router-link to="/article" class="nav-link py-2 px-4 fw-bold">所有文章</router-link>
          </li>
          <li class="nav-item me-0 me-lg-4 mt-5 mt-lg-0">
            <router-link to="/subscribe" class="nav-link py-2 px-4 fw-bold">訂閱方案</router-link>
          </li>     
          <li class="nav-item me-0 me-lg-4 mt-5 mt-lg-0">
            <router-link to="/about" class="nav-link py-2 px-4 fw-bold">關於我們</router-link>
          </li>
          <li class="nav-item mt-7 mt-lg-0 w-100 w-lg-auto align-items-center">
            <button class="btn btn-accent-200 text-white rounded-pill py-3 px-5 
            fw-bold w-100 w-md-50 w-lg-auto d-block mx-auto" @click="goToSignupPage">登入 / 註冊</button>
          </li>       
        </ul>
      </div>
    </div>
  </nav>
  <!-- 遮罩元素 -->
  <div v-if="!toggle" class="menu-overlay"></div>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch } from "vue";
  import { useRouter } from "vue-router";
  const router = useRouter();
  const goToSignupPage = () => {
    router.push("/loginAndSignup");
  }
  const toggle = ref<boolean>(true);
  onMounted(() => {
    toggle.value = true;
    document.body.style.overflow = '';
  })
  watch(toggle, () => {
    if(toggle.value) {
      document.body.style.overflow = ''; 
    }else {
      document.body.style.overflow = 'hidden'; // 禁止滾動
    }
  })
</script>

<style scoped lang="scss">
  .navbar-toggler:focus {
      box-shadow: 0 0 0 ;
  }
  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }
  @media (max-width: 991px) {
    .input-group{
      max-width: 351px;
      width: 100%;
    }
  }
</style>
