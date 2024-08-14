<template>
  <Nav></Nav>
  <main>
    <div class="container-xl py-9 py-md-12 border-top border-gray-300">
      <nav aria-label="breadcrumb mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active text-gray-400 fw-bold" aria-current="page">首頁</li>
          <li class="breadcrumb-item active text-gray-400 fw-bold" aria-current="page">訂閱方案</li>
          <li class="breadcrumb-item active text-accent-200 fw-bold" aria-current="page">付款</li>
        </ol>
      </nav>
      <h2 class="mb-8 fs-2 fw-bold lh-sm">付款</h2>
      <div class="row align-items-start justify-content-center">
        <div class="col-md-10 col-lg-7 mb-5 mb-lg-0">
          <div class="mb-5 p-5 p-md-7 bg-white border border-primary-300 rounded-2">
            <h3 class="mb-7 fw-bold fs-5 lh-sm text-black">購買人</h3>
            <form>
              <div class="mb-3">
                <label for="form-name" class="form-label fw-bold">姓名</label>
                <input type="text" class="form-control bg-gray-100 py-2" style="color: #ADB5BD" id="form-name" placeholder="請輸入姓名">
              </div>
              <div class="mb-3">
                <label for="form-password" class="form-label fw-bold">密碼</label>
                <input type="password" class="form-control bg-gray-100 py-2" style="color: #ADB5BD" id="form-password" placeholder="請輸入密碼">
              </div>
              <div class="mb-5">
                <label for="form-email" class="form-label fw-bold">電子信箱</label>
                <input type="email" class="form-control bg-gray-100 py-2" style="color: #ADB5BD" id="form-email" placeholder="請輸入電子信箱">
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form-info">
                <label class="form-check-label" for="form-info">
                  記住我的資訊
                </label>
              </div>
            </form>
          </div>
          <div class="p-5 p-md-7 bg-white border border-primary-300 rounded-2">
            <h3 class="mb-7 fw-bold fs-5 lh-sm text-black">付款方式</h3>
            <form>
              <h3 class="mb-3 fw-bold fs-7">Pay With</h3>
              <div class="form-check mb-7">
                <input class="form-check-input" type="radio" name="credit" id="form-creditCard">
                <label class="form-check-label fw-bold" for="form-creditCard" style="color: #343A40">
                  信用卡
                </label>
              </div>
              <div class="mb-5">
                <label for="form-creditCardNumber" class="form-label fw-bold">信用卡號碼</label>
                <input type="text" class="form-control bg-gray-100 py-2" style="color: #ADB5BD" id="form-creditCardNumber" placeholder="1234 5678 1234 5678">
              </div>
              <div class="mb-5 d-flex">
                <div class="flex-grow-1 me-5">
                  <label for="form-creditCardExp" class="form-label fw-bold">過期日</label>
                  <input type="text" class="form-control bg-gray-100 py-2" style="color: #ADB5BD" id="form-creditCardExp" placeholder="MM/YY">
                </div>
                <div class="flex-grow-1">
                  <label for="form-creditCardCvv" class="form-label fw-bold">認證碼</label>
                  <input type="number" class="form-control bg-gray-100 py-2" style="color: #ADB5BD" id="form-creditCardCvv" placeholder="CVV">
                </div>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form-creditInfo">
                <label class="form-check-label" for="form-creditInfo">
                  記住卡片資訊
                </label>
              </div>           
            </form>
          </div>
        </div>
        <div class="col-md-10 col-lg-5">
          <div class="mb-5 p-5 p-md-7 bg-white border border-primary-300 rounded-2">
            <h3 class="pb-7 mb-0 fw-bold fs-5 lh-sm text-accent-200 border-bottom">訂單資訊</h3>
            <div class="p-5 ps-0 pe-0 pe-md-5 mb-7">
              <div class="d-flex justify-content-between">
                <span class="mb-1 fw-bold fs-6" style="color: #09090B;">輕量型方案</span>
                <span class="mb-1 fw-bold fs-6 text-newsreader" style="color: #09090B;">NT 1,188</span>
              </div>
              <p class="mb-0 mt-2 text-gray-400">年繳</p>
            </div>
            <div class="mb-7">
              <span class="mb-3 fw-bold text-gray-500 d-inline-block">折扣碼</span>
              <div class="d-flex align-items-center">
                <input type="text" class="form-control bg-gray-100 py-2 me-1" style="color: #ADB5BD" id="form-off" placeholder="請輸入折扣碼">
                <label for="form-creditCardExp" class="form-label rounded-pill fw-bold text-gray-400 flex-grow-1 flex-shrink-0 ms-2 mb-0 py-2 px-4 bg-gray-100">套用</label>
              </div>
            </div>
            <div class="py-5 mb-7 border-top border-bottom">
              <div class="d-flex justify-content-between mb-3">
                <span class="fw-bold">小計</span>
                <span class="text-newsreader fs-6 fw-bold">NT 1,188</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="fw-bold">折扣</span>
                <span class="text-newsreader fs-6 fw-bold">0</span>
              </div>
            </div>
            <div class="mb-7 d-flex justify-content-between">
              <span class="fw-bold">總計</span>
                <span class="text-newsreader fs-4 fw-bold" style="color: #09090B">NT 1,188</span>
            </div>
            <button class="w-100 btn btn-accent-200 text-white fw-bold d-flex justify-content-center rounded-pill py-3"
                @click="handlePay">立即付款
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
</template>

<script setup lang="ts">
  import Nav from "@/components/Nav.vue";
  import Footer from "@/components/Footer.vue";
  import { useRouter } from "vue-router";
  const router = useRouter();
  const handlePay = () => {
    router.push("/paySuccess");
  }
</script>

<style scoped lang="scss">
.form-check-input:checked {
  background-color: #569573;
  border-color:  #569573;
}
</style>
