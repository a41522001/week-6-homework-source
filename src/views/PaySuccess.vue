<template>
  <div class="wrapper">
    <Nav></Nav>
    <main>
      <div class="container-xl py-9 py-md-12 border-top border-gray-300">
        <div class="mb-7 d-flex align-items-center justify-content-center">
          <span class="material-symbols-outlined fs-1 text-accent-200">check_circle</span>
          <span class="ms-4 fs-2 fw-bold text-accent-200">付款成功</span>
        </div>
        <div class="row">
          <div class="col-sm-10 col-md-8 col-lg-6 mx-auto">
            <div class="p-5 p-sm-7 bg-white rounded-2 border border-primary-300">
              <h3 class="mb-5 fw-bold text-primary-600 fs-5">訂購資訊</h3>
              <div class="py-5 mb-7 border-top border-bottom">
                <div class="mb-2 d-flex justify-content-between align-items-center">
                  <span class="fw-bold text-primary-600 fs-6">輕量型方案</span>
                  <span class="fw-bold text-primary-600 fs-6 text-newsreader">NT 1,188</span>
                </div>
                <p class="mt-1 mb-7 text-primary-400 fw-bold">年繳</p>
                <div class="mb-3 d-flex justify-content-between">
                  <span class="text-primary-400 fw-bold">開始日</span>
                  <span class="fw-bold text-primary-400 fw-bold text-newsreader">2024 / 5 / 1</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span class="text-primary-400 fw-bold">終止日</span>
                  <span class="fw-bold text-primary-400 fw-bold text-newsreader">2024 / 5 / 1</span>
                </div>
              </div>
              <button class="w-100 btn btn-accent-200 text-white fw-bold d-flex justify-content-center rounded-pill py-3"
                @click="handleBrowse">瀏覽文章
                <span class="material-symbols-outlined ms-2">
                arrow_forward
                </span>
              </button>
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
  import { useRouter } from "vue-router";
  const router = useRouter();
  const handleBrowse = () => {
    router.push({ path: "/article", query: { toggle: "ok"} });
  }
</script>

<style scoped lang="scss">
  .wrapper{
    min-height: 100vh;
    height: 100%;
  }
</style>
