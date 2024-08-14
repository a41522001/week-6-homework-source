<template>
  <Nav></Nav>
  <main>
    <div class="container-xl py-9 py-md-12 border-top border-gray-300">
      <nav aria-label="breadcrumb mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active text-gray-400 fw-bold" aria-current="page">首頁</li>
          <li class="breadcrumb-item active text-accent-200 fw-bold" aria-current="page">訂閱方案</li>
        </ol>
      </nav>
      <h2 class="mb-8 fs-2 fw-bold lh-sm">訂閱方案</h2>
      <div class="d-flex justify-content-center w-100 mb-7">
        <button class="btn border-0 rounded-0 fw-bold btn-accent-200 text-white py-2 px-sm-11 w-50 w-sm-auto">年繳</button>
        <button class="btn border-0 rounded-0 fw-bold text-gray-400 py-2 px-sm-11 w-50 w-sm-auto">月繳</button>
      </div>
      <div class="row justify-content-center">
        <div class="mb-5 mb-lg-0 col-md-8 col-lg-4" >
          <div class="h-100 d-flex flex-column align-items-center bg-white border-1 border rounded-3 p-5 p-md-7"
            :class="{ 'border-accent-200': modelType === 1, 'border-primary-300': modelType !== 1 }" @click="modelType = 1">
            <p class="text-gray-400 fw-bold fs-6">輕量型</p>
            <p class="mb-6 mb-lg-12 fw-bold fs-2" :class="{ 'text-gray-400': modelType !== 1, 'text-accent-200': modelType === 1 }">NT 99 <span class="fs-5 text-gray-400"> / 月</span></p>
            <ul class="mb-9 list-unstyled">
              <li class="mb-5">
                <div class="form-check d-flex align-items-center">
                  <input class="form-check-input me-2" :class="{ 'custom-form-check-input': modelType === 1 }" type="checkbox" checked>
                  <label class="form-check-label fw-bold fs-6" :class="{ 'text-gray-400': modelType !== 1 ,'text-gray-500': modelType === 1 }">
                    每月最新文章無限閱讀
                  </label>
                </div>
              </li>
              <li class="mb-5">
                <div class="form-check d-flex align-items-center">
                  <input class="form-check-input me-2" :class="{ 'custom-form-check-input': modelType === 1 }" type="checkbox" checked>
                  <label class="form-check-label fw-bold fs-6" :class="{ 'text-gray-400': modelType !== 1 ,'text-gray-500': modelType === 1 }">
                    專屬會員限定內容
                  </label>
                </div>
              </li>
              <li>
                <div class="form-check d-flex align-items-center">
                  <input class="form-check-input me-2" :class="{ 'custom-form-check-input': modelType === 1 }" type="checkbox" checked>
                  <label class="form-check-label fw-bold fs-6" :class="{ 'text-gray-400': modelType !== 1 ,'text-gray-500': modelType === 1 }">
                    定期電子報
                  </label>
                </div>
              </li>
            </ul>
            <div class="mt-auto w-100">
              <button class="w-100 btn btn-gray-100 text-primary-400 fw-bold d-flex justify-content-center rounded-pill py-3"
                :class="{ 'btn-accent-200': modelType === 1, 'text-white': modelType === 1 }" @click="handleSubscribe">我要訂閱
                <span class="material-symbols-outlined ms-2">
                arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="mb-5 mb-lg-0 col-md-8 col-lg-4">
          <div class="h-100 d-flex flex-column align-items-center bg-white border-1 border rounded-3 p-5 p-md-7"
          :class="{ 'border-accent-200': modelType === 2, 'border-primary-300': modelType !== 2 }" @click="modelType = 2">
            <p class="text-gray-400 fw-bold fs-6">玩咖型</p>
            <p class="mb-6 mb-lg-12 text-gray-400 fw-bold fs-2" :class="{ 'text-gray-400': modelType !== 2, 'text-accent-200': modelType === 2 }">NT 159 <span class="fs-5 text-gray-400"> / 月</span></p>
            <ul class="mb-9 list-unstyled">
              <li class="mb-5">
                <div class="form-check d-flex align-items-center">
                  <input class="form-check-input me-2" :class="{ 'custom-form-check-input': modelType === 2 }" type="checkbox" checked>
                  <label class="form-check-label fw-bold fs-6" :class="{ 'text-gray-400': modelType !== 2 ,'text-gray-500': modelType === 2 }">
                    每月最新文章無限閱讀
                  </label>
                </div>
              </li>
              <li class="mb-5">
                <div class="form-check d-flex align-items-center">
                  <input class="form-check-input me-2" :class="{ 'custom-form-check-input': modelType === 2 }" type="checkbox" checked>
                  <label class="form-check-label fw-bold fs-6" :class="{ 'text-gray-400': modelType !== 2 ,'text-gray-500': modelType === 2 }">
                    專屬會員限定內容
                  </label>
                </div>
              </li>
              <li class="mb-5">
                <div class="form-check d-flex align-items-center">
                  <input class="form-check-input me-2" :class="{ 'custom-form-check-input': modelType === 2 }" type="checkbox" checked>
                  <label class="form-check-label fw-bold fs-6" :class="{ 'text-gray-400': modelType !== 2 ,'text-gray-500': modelType === 2 }">
                    定期電子報
                  </label>
                </div>
              </li>
              <li>
                <div class="form-check d-flex align-items-center">
                  <input class="form-check-input me-2" :class="{ 'custom-form-check-input': modelType === 2 }" type="checkbox" checked>
                  <label class="form-check-label fw-bold fs-6" :class="{ 'text-gray-400': modelType !== 2 ,'text-gray-500': modelType === 2 }">
                    年度精選禮物
                  </label>
                </div>
              </li>
            </ul>
            <div class="mt-auto w-100">
              <button class="w-100 btn btn-gray-100 text-primary-400 fw-bold d-flex justify-content-center rounded-pill py-3"
                :class="{ 'btn-accent-200': modelType === 2, 'text-white': modelType === 2 }" @click="handleSubscribe">我要訂閱
                <span class="material-symbols-outlined ms-2">
                arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-8 col-lg-4">
          <div class="h-100 d-flex flex-column align-items-center bg-white border-1 border rounded-3 p-5 p-md-7"
          :class="{ 'border-accent-200': modelType === 3, 'border-primary-300': modelType !== 3 }" @click="modelType = 3">
            <p class="text-gray-400 fw-bold fs-6">家庭型</p>
            <p class="fw-bold fs-2" :class="{ 'text-gray-400': modelType !== 3, 'text-accent-200': modelType === 3 }">NT 599 <span class="fs-5 text-gray-400"> / 月</span></p>
            <p class="mb-6 mb-lg-7 text-gray-300 fw-bold fs-5 text-decoration-line-through">NT 899</p>
            <ul class="mb-9 pt-0 pt-lg-1 list-unstyled">
              <li class="mb-5">
                <div class="form-check d-flex align-items-center">
                  <input class="form-check-input me-2" :class="{ 'custom-form-check-input': modelType === 3 }" type="checkbox" checked>
                  <label class="form-check-label fw-bold fs-6" :class="{ 'text-gray-400': modelType !== 3 ,'text-gray-500': modelType === 3 }">
                    每月最新文章無限閱讀
                  </label>
                </div>
              </li>
              <li class="mb-5">
                <div class="form-check d-flex align-items-center">
                  <input class="form-check-input me-2" :class="{ 'custom-form-check-input': modelType === 3 }" type="checkbox" checked>
                  <label class="form-check-label fw-bold fs-6" :class="{ 'text-gray-400': modelType !== 3 ,'text-gray-500': modelType === 3 }">
                    專屬會員限定內容
                  </label>
                </div>
              </li>
              <li class="mb-5">
                <div class="form-check d-flex align-items-center">
                  <input class="form-check-input me-2" :class="{ 'custom-form-check-input': modelType === 3 }" type="checkbox" checked>
                  <label class="form-check-label fw-bold fs-6" :class="{ 'text-gray-400': modelType !== 3 ,'text-gray-500': modelType === 3 }">
                    定期電子報
                  </label>
                </div>
              </li>
              <li class="mb-5">
                <div class="form-check d-flex align-items-center">
                  <input class="form-check-input me-2" :class="{ 'custom-form-check-input': modelType === 3 }" type="checkbox" checked>
                  <label class="form-check-label fw-bold fs-6" :class="{ 'text-gray-400': modelType !== 3 ,'text-gray-500': modelType === 3 }">
                    年度精選禮物
                  </label>
                </div>
              </li>
              <li class="mb-5">
                <div class="form-check d-flex align-items-center">
                  <input class="form-check-input me-2" :class="{ 'custom-form-check-input': modelType === 3 }" type="checkbox" checked>
                  <label class="form-check-label fw-bold fs-6" :class="{ 'text-gray-400': modelType !== 3 ,'text-gray-500': modelType === 3 }">
                    24/7 優先客戶服務
                  </label>
                </div>
              </li>
              <li class="mb-5">
                <div class="form-check d-flex align-items-center">
                  <input class="form-check-input me-2" :class="{ 'custom-form-check-input': modelType === 3 }" type="checkbox" checked>
                  <label class="form-check-label fw-bold fs-6" :class="{ 'text-gray-400': modelType !== 3 ,'text-gray-500': modelType === 3 }">
                    為每個成員量身打造專屬行程
                  </label>
                </div>
              </li>
              <li>
                <div class="form-check d-flex align-items-center">
                  <input class="form-check-input me-2" :class="{ 'custom-form-check-input': modelType === 3 }" type="checkbox" checked>
                  <label class="form-check-label fw-bold fs-6" :class="{ 'text-gray-400': modelType !== 3 ,'text-gray-500': modelType === 3 }">
                    最多 5 個家庭成員共享
                  </label>
                </div>
              </li>
            </ul>
            <div class="mt-auto w-100">
              <button class="w-100 btn btn-gray-100 text-primary-400 fw-bold d-flex justify-content-center rounded-pill py-3"
                :class="{ 'btn-accent-200': modelType === 3, 'text-white': modelType === 3 }" @click="handleSubscribe">我要訂閱
                <span class="material-symbols-outlined ms-2">
                arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<script setup lang="ts">
  import Nav from "@/components/Nav.vue";
  import Footer from "@/components/Footer.vue";
  import { useRouter } from "vue-router";
  import { ref } from "vue";
  const router = useRouter();
  const modelType = ref<number>(3);
  const handleSubscribe = () => {
    router.push("/payment");
  }
</script>

<style scoped lang="scss">
.form-check-input {
  pointer-events: none;
  opacity: 1;
}

.form-check-input:checked {
  background-color: #6C757D;
  border-color: #6C757D;
}
.custom-form-check-input:checked {
  background-color: #343A40;
  border-color: #343A40;
}
</style>
