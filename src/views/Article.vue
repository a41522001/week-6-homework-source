<template>
  <Nav></Nav>
  <div class="banner">
    <div class="container px-0">
      <div>
        <img class="img-fluid w-100 object-fit-cover d-none d-sm-block" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/article-banner.png?raw=true" alt="banner">
        <img class="img-fluid w-100 object-fit-cover d-block d-sm-none" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/article-banner-sm.png?raw=true" alt="banner">
      </div>
    </div>
  </div>
  <article class="py-9 py-md-11">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 col-xxl-8 mx-auto mb-12">
          <nav aria-label="breadcrumb mb-4">
            <ol class="breadcrumb mb-0 py-3">
              <li class="breadcrumb-item text-primary-400 fw-bold" aria-current="page">首頁</li>
              <li class="breadcrumb-item text-primary-400 fw-bold" aria-current="page">所有文章</li>
              <li class="breadcrumb-item text-accent-200 fw-bold" aria-current="page">私人島嶼的露營奇遇記</li>
            </ol>
          </nav>
          <h2 class="mb-3 fw-bold fs-2 lh-sm">私人島嶼的露營奇遇記</h2>
          <span class="mb-7 text-gray-300 fw-bold lh-sm d-block">2024 / 5 / 1</span>
          <div class="mb-7" :class="{ blur: toggle }">
            <p class="mb-7 fw-bold">嗨！我是秘境尋蹤小編 Elly，很高興能與你分享我這段令人心曠神怡的旅程。這不僅僅是一次旅行，更是一場對自然、對內心的深度體悟，一次重新與大自然連結的奇妙旅程。希望透過我的分享，你也能感受到這份自然之美，並找到一份屬於自己的心靈寧靜。</p>
            <p class="mb-7 fw-bold">這段旅程的開始，是從一個遙遠的小島。我對於這片土地的認識，僅止於一些遊記和照片，對於它的神秘感與未知感讓我充滿了好奇。一艘小船，帶著我穿越海浪，穿過風暴，終於抵達了這片被大自然雕琢的寶地。當我踏上這片島嶼的那一刻，心中充滿了震撼與喜悅。</p>
            <img class="img-fluid object-fit-cover w-100 d-none d-sm-block" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/content-1.png?raw=true" alt="travel">
            <img class="img-fluid object-fit-cover w-100 d-block d-sm-none" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/content-1-sm.png?raw=true" alt="travel"></img>
          </div>
          <Transition name="fade">
            <div v-if="toggle" class=" d-flex flex-column align-items-center">
              <p class="mb-3 fw-bold">本篇為會員專屬文章，馬上訂閱瀏覽所有內容！</p>
              <button class="btn btn-accent-200 text-white fw-bold d-flex rounded-pill py-3 px-5"
                @click="handleSubscribe">我要訂閱
                <span class="material-symbols-outlined ms-2">
                arrow_forward
                </span>
              </button>
            </div>
            <div v-else>
              <p class="mb-7 fw-bold">這個小島並不大，但卻擁有令人驚艷的景色。在午夜的沙灘上，星空如水晶般璀璨，海浪聲如琴音般撫慰著我的心靈。椰林掩映著沙灘，樹影婆娑，彷彿舞者在天空中翩翩起舞。我選擇在沙灘上搭建了我的帳篷，每一天清晨，太陽的第一縷光照在我的臉上，讓我感受到生命的美好。</p>
              <p class="mb-7 fw-bold">島上的每個角落都充滿了驚喜和挑戰。在叢林中，我發現了許多珍貴的生物，每一種都是大自然的奇蹟。在海邊，我盡情地嬉戲於波濤之間，感受海風撫過臉龐的清涼。我發現，與大自然的親密接觸，讓我感受到了一種無法言喻的喜悅和寧靜。</p>
              <div class="mb-7 d-flex flex-column flex-sm-row">
                <div class="flex-grow-1 mb-5 mb-sm-0">
                  <img class="img-fluid object-fit-cover pe-2 me-1 w-100 d-none d-sm-block" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/content-3.png?raw=true" alt="travel">
                  <img class="img-fluid object-fit-cover w-100 d-block d-sm-none" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/content-3-sm.png?raw=true" alt="travel">
                </div>
                <div class="flex-grow-1">
                  <img class="img-fluid object-fit-cover ps-2 ms-1 w-100 d-none d-sm-block" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/content-4.png?raw=true" alt="travel">
                  <img class="img-fluid object-fit-cover w-100 d-block d-sm-none" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/content-4-sm.png?raw=true" alt="travel">
                </div>
              </div>
              <p class="mb-7 fw-bold">這段旅程不僅僅是一場對自然的探索，更是對自我的反思與成長。在這片與世隔絕的土地上，我找到了內心深處的平靜與寧靜。我學會了放慢腳步，用心感受身邊的一切，珍惜每一個瞬間。我意識到，生活中最美好的事物往往就在我們身邊，只是我們常常忽略了它們。</p>
              <p class="mb-7 fw-bold">回想起這段旅程，我深深地感謝大自然賜予我的一切。我決定將這份寧靜與美好分享給更多的人，讓大家一起感受大自然的魅力。如果你也渴望探索未知，尋找內心的寧靜，那就加入我們的訂閱服務吧！讓我們一起展開一場奇幻的旅程，探索無垠的寧靜，感受大自然的美好！讓我們一同進入那片無垠的寧靜，發現生活中的無盡可能性。希望透過這段旅程的分享，你也能找到屬於自己的心靈寧靜，與大自然一同共舞，感受生命的美好！</p>
              <div class="mb-7">
                <img class="img-fluid object-fit-cover w-100 d-none d-sm-block" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/content-2.png?raw=true" alt="travel">
                <img class="img-fluid object-fit-cover w-100 d-block d-sm-none" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/content-2-sm.png?raw=true" alt="travel">
              </div>
              <div class="d-flex">
                <span class="bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm fs-7 me-3">#秘境尋蹤</span>
                <span class="bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm fs-7 me-3">#露營點</span>
                <span class="bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm fs-7">#山人</span>
              </div>
            </div>
          </Transition>
        </div> 
        <div class="col-xl-10 col-xxl-8  mx-auto">
          <h3 class="mb-5 mb-md-0 fw-bold fs-3">延伸閱讀</h3>
          <div class="swiper">
            <ul class="swiper-wrapper mb-0 list-unstyled">
              <li class="swiper-slide d-flex flex-column flex-md-row pt-0 pt-md-7 pb-5 border-bottom border-1">
                <div class="me-0 me-md-5 mb-3 mb-md-0">
                  <img class="object-fit-cover d-none d-md-block" width="200" height="150" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/read-1.png?raw=true" alt="travel">
                  <img class="img-fluid object-fit-cover w-100 d-block d-md-none" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/read-1-sm.png?raw=true" alt="travel">
                </div>
                <div class="d-flex flex-column">
                  <h3 class="mb-2 fw-bold fs-6 lh-sm">週末說走就走露營記</h3>
                  <p class="mb-2 fw-bold text-gray-400">遠離塵囂,用全新的眼光重塑生活的舒適本味。徜徉在環山綠野間,在這處隱世私家別墅裡,盡情領略池畔優閒時光,任林間微風撫面,聆聽花鳥嘶啞之音,重拾內心深處的寧靜...</p>
                  <a class="text-accent-200 fs-6 fw-bold text-decoration-none mb-1 ms-auto pb-3 text-newsreader">Read More</a>
                </div>
              </li>
              <li class="swiper-slide d-flex flex-column flex-md-row pt-0 pt-md-7 pb-5 border-bottom border-1">
                <div class="me-0 me-md-5 mb-3 mb-md-0">
                  <img class="object-fit-cover d-none d-md-block" width="200" height="150" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/read-2.png?raw=true" alt="travel">
                  <img class="img-fluid object-fit-cover w-100 d-block d-md-none" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/read-2-sm.png?raw=true" alt="travel">
                </div>
                <div class="d-flex flex-column">
                  <h3 class="mb-2 fw-bold fs-6 lh-sm">城市野營日記</h3>
                  <p class="mb-2 fw-bold text-gray-400">終於!我實現了一個看似瘋狂的想法—在熟悉的城市裡野營一晚。說實話,一開始我也有點懷疑自己,畢竟眾目睽睽之下搭帳篷實在有點怪異。不過漸漸地,這股初時的侷促不...</p>
                  <a class="text-accent-200 fs-6 fw-bold text-decoration-none mb-1 ms-auto pb-3 text-newsreader">Read More</a>
                </div>
              </li>
              <li class="swiper-slide d-flex flex-column flex-md-row pt-0 pt-md-7 pb-5 border-bottom border-1">
                <div class="me-0 me-md-5 mb-3 mb-md-0">
                  <img class="object-fit-cover d-none d-md-block" width="200" height="150" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/read-3.png?raw=true" alt="travel">
                  <img class="img-fluid object-fit-cover w-100 d-block d-md-none" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/read-3-sm.png?raw=true" alt="travel">
                </div>
                <div class="d-flex flex-column">
                  <h3 class="mb-2 fw-bold fs-6 lh-sm">和寵物去露營 - 大自然之旅的雙倍體驗</h3>
                  <p class="mb-2 fw-bold text-gray-400">說實話,一開始我有點擔心帶著我的狗狗露營會不會太麻煩。畢竟要照顧牠的飲食起居,還得注意牠的安全。不過這次經驗讓我徹底改觀了!出發前,我特意為狗狗準備了適當...</p>
                  <a class="text-accent-200 fs-6 fw-bold text-decoration-none mb-1 ms-auto pb-3 text-newsreader">Read More</a>
                </div>
              </li>
            </ul>
          </div>
        </div>     
      </div>
    </div>
  </article>
  <Footer></Footer>
</template>

<script setup lang="ts">
  import Nav from "@/components/Nav.vue";
  import Footer from "@/components/Footer.vue";
  import { ref, Transition, onMounted } from "vue";
  import Swiper from 'swiper';
  import { Autoplay, Navigation } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/autoplay';
  import { useRoute, useRouter} from "vue-router";
  const route = useRoute();
  const router = useRouter();
  const condition = route.query.toggle;
  const toggle = ref<boolean>(true);
  const handleSubscribe = () => {
    router.push("/subscribe");
  } 
  onMounted(() => {
    if(condition === "ok") toggle.value = false;
    console.log(condition);
  })
  onMounted(() => {
    const swiper = new Swiper(".swiper", {
      modules: [ Navigation, Autoplay ],
      // autoplay: {
      //   delay: 3000, // 設定為每 3000 毫秒（3秒）自動切換一次
      // },
      breakpoints: {
        320: {
          direction: "horizontal",
          simulateTouch: true,
          loop: true,
          slidesPerView: 1, 
        },
        768: {
          direction: "vertical",
          slidesPerView: 3,
          loop: false,
          simulateTouch: false,
        }
      }
    })
  })
</script>

<style scoped lang="scss">
  .blur {
    position: relative;
    overflow: hidden;
  }
  .blur::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    backdrop-filter: blur(2px);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
</style>
