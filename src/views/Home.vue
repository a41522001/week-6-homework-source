<template>
  <Nav class=""></Nav>
  <div class="banner py-sm-11">
    <div class="container banner-container d-flex align-items-end 
    align-items-sm-center justify-content-center justify-content-sm-start">
      <div class="px-9 d-flex d-sm-block flex-column align-items-center 
      pb-8 pb-sm-0 text-center text-sm-start">
        <p class="mb-3 fs-6 fw-bold lh-sm text-white">獻給新世代的生活風格誌</p>
        <p class="mb-5 fs-2 fw-bold lh-sm text-white">一起探索生活的無限可能</p>
        <button class="btn btn-accent-200 text-white fw-bold d-flex rounded-pill py-3 px-5">
          馬上訂閱
          <span class="material-symbols-outlined ms-2">
          arrow_forward
          </span>
        </button>
      </div>
    </div>
  </div>
  <main class="py-8 py-sm-11">
    <div class="container px-md-0">
      <h2 class="fw-bold fs-3 lh-sm mb-5">熱門主題</h2>
      <div class="row g-2 g-sm-5">
        <div v-for="{ title, url } in theme" class="col-sm-6 col-lg-3" :key="title">
          <div class="position-relative">
            <img class="img-fluid w-100 w-lg-auto rounded-top-start-5 rounded-bottom-end-5" :src="url" :alt="title">
            <h3 class="mb-0 fw-bold fs-6 lh-sm text-white position-absolute top-50 start-50 translate-middle">{{ title }}</h3>
          </div> 
        </div>
      </div>
    </div>
  </main>
  <article class="py-8 py-md-11">
    <div class="container px-md-0">
      <div class="row">
        <div class="col-md-4 d-flex flex-column pb-5 pb-md-6 pb-xl-8 position-relative">
          <h2 class="mb-0 fw-bold fs-3 lh-sm">精選文章</h2>
          <div class="d-md-block d-none mt-auto">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">1</li>
                <li class="breadcrumb-item">5</li>
              </ol>
            </nav>         
          </div>
          <div class="controller d-none d-md-flex align-items-center">
            <button class="swiper-button-prev">
              <span class="material-symbols-outlined">
              arrow_back
              </span>
            </button>
            <div class="line mx-md-2 mx-xl-4"></div>
            <button class="swiper-button-next">
              <span class="material-symbols-outlined">
              arrow_forward
              </span>
            </button>
          </div>    
        </div>
        <div class="col-md-8">
          <div class="swiper h-auto h-md-100">
            <div class="swiper-wrapper">
              <div class="swiper-slide w-100 w-md-50 h-100 pe-0 pe-md-5">
                <div class="d-flex flex-column h-100 pb-5 border-bottom border-primary-500">
                  <div class="mb-5">
                    <img class="img-fluid w-100 object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/articles-1.png?raw=true" alt="">                 
                  </div>
                  <h3 class="fs-5 fw-bold lh-sm mb-2">私人島嶼的露營奇遇記</h3>
                  <p class="text-primary-400 fw-semibold mb-5">遠離塵囂,用全新的眼光重塑生活的舒適本味。徜徉在環山綠野間,在這處隱世私家別墅裡,盡情領略池畔優閒時光,任林間微風撫面,聆聽花鳥嘶啞之音,重拾內心深處的寧靜安詳...</p>
                  <span class="fw-bold fs-6 lh-sm text-accent-200 text-newsreader mt-auto text-newsreader">Read More</span>
                </div>       
              </div>
              <div class="swiper-slide w-100 w-md-50 h-100 ps-0 ps-md-5">
                <div class="d-flex flex-column h-100 pb-5 border-bottom border-primary-500">
                  <div class="mb-5">
                    <img class="img-fluid w-100 object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/articles-2.png?raw=true" alt="">
                  </div>
                  <h3 class="fs-5 fw-bold lh-sm mb-2">窺探米其林三星主廚的絕密手藝</h3>
                  <p class="text-primary-400 fw-semibold mb-5">在這間隱世餐廳,來一場味蕾與靈魂的盛宴。幽微燈火下,透過巨匠大師的獨門料理,領略食材中蘊藏的大自然馨香脈絡。營造只屬於你我的私密小宇宙,沉浸其中,品嘗人生至臻至美的風味...</p>
                  <div class="mt-auto d-flex justify-content-between align-items-center">
                    <span class="fw-bold fs-6 lh-sm text-accent-200 text-newsreader ">Read More</span>
                    <span class="px-2 py-1 rounded-1 text-primary bg-primary-300 text-newsreader">會員專屬</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex d-md-none align-items-center mt-7">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item">1</li>
                  <li class="breadcrumb-item">5</li>
                </ol>
              </nav>
              <button class="swiper-button-prev ms-auto">
                <span class="material-symbols-outlined">
                arrow_back
                </span>
              </button>
              <div class="line"></div>
              <button class="swiper-button-next">
                <span class="material-symbols-outlined">
                arrow_forward
                </span>
              </button>
            </div>           
          </div>
        </div>
        <div class="d-none">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">1</li>
              <li class="breadcrumb-item">5</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </article>
  <section class="pt-8 pt-md-11 bg-primary-200 position-relative overflow-hidden">
    <div class="container px-xl-0 pb-8 pb-xl-0">
      <div class="row align-items-end justify-content-center">
        <div class="col-xl-4 d-none d-xl-block">
          <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/bg-1.png?raw=true" alt="bg">
        </div>
        <div class="col-xl-4 pb-0 pb-xl-8 align-self-center d-flex flex-column align-items-center">
          <h2 class="mb-5 fs-5 fw-bold lh-sm text-accent-200 text-xl-primary-400">\ 母親節強檔活動 /</h2>
          <h3 class="mb-5 fs-3 fw-bold 1h-sm">家庭訂閱方案限時 7 折</h3>
          <ul class="mb-5 mb-xl-8 list-unstyled">
            <li class="d-flex mb-3">
              <span class="material-symbols-outlined me-2">
              check
              </span>
              <p class="mb-0 ms-1 text-primary-400 fw-semibold">每月最新文章無限閱讀</p>
            </li>
            <li class="d-flex mb-3">
              <span class="material-symbols-outlined me-2">
              check
              </span>
              <p class="mb-0 ms-1 text-primary-400 fw-semibold">專屬會員限定內容</p>
            </li>
            <li class="d-flex mb-3">
              <span class="material-symbols-outlined me-2">
              check
              </span>
              <p class="mb-0 ms-1 text-primary-400 fw-semibold">定期電子報</p>
            </li>
            <li class="d-flex mb-3">
              <span class="material-symbols-outlined me-2">
              check
              </span>
              <p class="mb-0 ms-1 text-primary-400 fw-semibold">年度精選禮物</p>
            </li>
            <li class="d-flex mb-3">
              <span class="material-symbols-outlined me-2">
              check
              </span>
              <p class="mb-0 ms-1 text-primary-400 fw-semibold">24 /7 優先客戶服務</p>
            </li>
            <li class="d-flex">
              <span class="material-symbols-outlined me-2">
              check
              </span>
              <p class="mb-0 ms-1 text-primary-400 fw-semibold">為每個成員量身打造專屬行程</p>
            </li>
          </ul>
          <button class="btn btn-accent-200 rounded-pill text-white py-3 px-5 fs-6 fw-bold 1h-sm">我想了解</button>
        </div>
        <div class="col-xl-4 d-flex justify-content-end">
          <img class="d-none d-xl-inline" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/bg-2.png?raw=true" alt="bg">      
        </div>
      </div>
    </div>
    <img class="img-fluid d-inline d-xl-none object-fit-cover 
        position-absolute bottom-0 end-0 overflow-hidden" style="transform: translateX(30%);"
        src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/bg-2-sm.png?raw=true" alt="bg">
  </section>
  <section class="py-8 py-md-11">
    <div class="container">
      <h2 class="mb-5 mb-xl-8 fw-bold fs-3 lh-sm">大家都在看</h2>
      <div class="row d-none d-sm-flex">
        <div class="col-xl-3 d-none d-xl-block">
          <aside class="p-5 bg-white shadow-sm h-100">
            <ul class="mb-0 list-unstyled">
              <li class="p-3 mb-5 bg-accent-100 d-flex">
                <span class="fs-6">•</span>
                <p class="mb-0 fw-bold fs-6 lh-sm" style="color:#212529">酒精路跑地圖</p>
              </li>
              <li class="p-3 mb-5 d-flex">
                <span class="fs-6">•</span>
                <p class="mb-0 fw-bold fs-6 lh-sm" style="color:#212529">台北拉麵圖鑑</p>
              </li>
              <li class="p-3 mb-5 d-flex">
                <span class="fs-6">•</span>
                <p class="mb-0 fw-bold fs-6 lh-sm" style="color:#212529">海島自由行</p>
              </li>
              <li class="p-3 mb-5 d-flex">
                <span class="fs-6">•</span>
                <p class="mb-0 fw-bold fs-6 lh-sm" style="color:#212529">短天數出國推薦</p>
              </li>
              <li class="p-3 d-flex">
                <span class="fs-6">•</span>
                <p class="mb-0 fw-bold fs-6 lh-sm" style="color:#212529">週末露營趣</p>
              </li>
            </ul>
          </aside>
        </div>
        <div class="col-xl-9">
          <div class="px-xl-7 py-xl-7">
            <div class="py-5 px-0 px-xl-5">
              <h3 class="mb-5 text-accent-200 fw-bold fs-5 lh-sm">酒精路跑地圖</h3>
              <ul class="mb-0 list-unstyled">
                <li class="mb-4">
                  <p class="mb-0 fw-bold lh-sm">｜城市酒吧人氣榜,盤點當紅熱門酒吧</p>
                </li>
                <li class="mb-4">
                  <p class="mb-0 fw-bold lh-sm">｜你要的調酒師在這裡！五月全台酒吧客座活動整理</p>
                </li>
                <li>
                  <p class="mb-0 fw-bold lh-sm">｜台南老宅手工酒藏,尋味百年人文釀意</p>
                </li>
              </ul>
            </div>
            <div class="d-flex justify-content-around justify-content-center py-3 px-0 px-xl-3 mb-3">
              <div class="me-1">
                <img class="img-fluid object-fit-cover rounded-start-4" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-1.png?raw=true" alt="pub">
              </div>
              <div class="me-1">
                <img class="img-fluid object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-2.png?raw=true" alt="pub">
              </div>
              <div class="me-1">
                <img class="img-fluid object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-3.png?raw=true" alt="pub">
              </div>
              <div class="">
                <img class="img-fluid rounded-end-4 object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-4.png?raw=true" alt="pub">
              </div>
            </div>
            <div class="d-flex align-items-center py-5 px-0 px-xl-5">
              <span class="bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm me-3">#夜貓行程</span>
              <span class="bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm me-3">#barhopping</span>
              <span class="bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm">#全台酒吧</span>
              <a class="me-2 text-newsreader text-decoration-none ms-auto link-accent-200 fs-6 fw-bold lh-sm">View More</a>
              <span class="ms-1 material-symbols-outlined text-accent-200">
              arrow_forward
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper d-sm-none">
        <div class="swiper-wrapper">
          <div class="swiper-slide p-3 bg-white shadow-sm rounded-3">
            <div>
              <h3 class="mb-3 fs-6 fw-bold lh-sm text-accent-200">酒精路跑地圖</h3>
              <ul class="list-unstyled mb-3">
                <li class="mb-2">
                  <p class="mb-0 mb-bold">｜城市酒吧人氣榜,盤點當紅熱門酒吧</p>
                </li>
                <li class="mb-2">
                  <p class="mb-0 mb-bold">｜你要的調酒師在這裡！五月全台酒...</p>
                </li>
                <li class="mb-2">
                  <p class="mb-0 mb-bold">｜台南老宅手工酒藏,尋味百年人文釀意</p>
                </li>
              </ul>
              <div class="mb-3">
                <img class="img-fluid w-100 object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-1-sm.png?raw=true" alt="pub">
              </div>
              <div class="d-flex align-items-center py-2 px-0">
                <span class="swiper-tag bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm me-2 fs-9">#夜貓行程</span>
                <span class="swiper-tag bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm me-2 fs-9">#barhopping</span>
                <span class="swiper-tag bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm fs-9">#全台酒吧</span>
              </div>
              <div class="d-flex justify-content-center py-3">
                <a class="me-2 text-newsreader text-decoration-none link-accent-200 fs-6 fw-bold lh-sm">View More</a>
                <span class="ms-1 material-symbols-outlined text-accent-200">
                arrow_forward
                </span>
              </div>
            </div>          
          </div>
          <div class="swiper-slide p-3 bg-white shadow-sm rounded-3">
            <div>
              <h3 class="mb-3 fs-6 fw-bold lh-sm text-accent-200">台北拉麵圖鑑</h3>
              <ul class="list-unstyled mb-3">
                <li class="mb-2">
                  <p class="mb-0 mb-bold">｜城市酒吧人氣榜,盤點當紅熱門酒吧</p>
                </li>
                <li class="mb-2">
                  <p class="mb-0 mb-bold">｜你要的調酒師在這裡！五月全台酒...</p>
                </li>
                <li class="mb-2">
                  <p class="mb-0 mb-bold">｜台南老宅手工酒藏,尋味百年人文釀意</p>
                </li>
              </ul>
              <div class="mb-3">
                <img class="img-fluid w-100 object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-3-sm.png?raw=true" alt="noodle">
              </div>
              <div class="d-flex align-items-center py-2 px-0">
                <span class="swiper-tag bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm me-2 fs-9">#雞白湯</span>
                <span class="swiper-tag bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm me-2 fs-9">#拉麵</span>
                <span class="swiper-tag bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm fs-9">#台北美食</span>
              </div>
              <div class="d-flex justify-content-center py-3">
                <a class="me-2 text-newsreader text-decoration-none link-accent-200 fs-6 fw-bold lh-sm">View More</a>
                <span class="ms-1 material-symbols-outlined text-accent-200">
                arrow_forward
                </span>
              </div>
            </div>          
          </div>
          <div class="swiper-slide p-3 bg-white shadow-sm rounded-3">
            <div>
              <h3 class="mb-3 fs-6 fw-bold lh-sm text-accent-200">海島自由行</h3>
              <ul class="list-unstyled mb-3">
                <li class="mb-2">
                  <p class="mb-0 mb-bold">｜私島慢活島嶼生活 - 在熱帶天堂品...</p>
                </li>
                <li class="mb-2">
                  <p class="mb-0 mb-bold">｜海島漂流記 - 在陽光、沙灘和比基...</p>
                </li>
                <li class="mb-2">
                  <p class="mb-0 mb-bold">｜島嶼蹤跡 - 揭開加勒比海上世外桃...</p>
                </li>
              </ul>
              <div class="mb-3">
                <img class="img-fluid w-100 object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-4-sm.png?raw=true" alt="sea">
              </div>
              <div class="d-flex align-items-center py-2 px-0">
                <span class="swiper-tag bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm me-2 fs-9">#熱帶國家</span>
                <span class="swiper-tag bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm me-2 fs-9">#海邊</span>
                <span class="swiper-tag bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm fs-9">#無敵海景</span>
              </div>
              <div class="d-flex justify-content-center py-3">
                <a class="me-2 text-newsreader text-decoration-none link-accent-200 fs-6 fw-bold lh-sm">View More</a>
                <span class="ms-1 material-symbols-outlined text-accent-200">
                arrow_forward
                </span>
              </div>
            </div>          
          </div>
          <div class="swiper-slide p-3 bg-white shadow-sm rounded-3">
            <div>
              <h3 class="mb-3 fs-6 fw-bold lh-sm text-accent-200">短天數出國推薦</h3>
              <ul class="list-unstyled mb-3">
                <li class="mb-2">
                  <p class="mb-0 mb-bold">｜72小時東京遊走 - 當個時尚東京通</p>
                </li>
                <li class="mb-2">
                  <p class="mb-0 mb-bold">｜48小時曼谷遊玩全攻略 </p>
                </li>
                <li class="mb-2">
                  <p class="mb-0 mb-bold">｜三天兩夜賞櫻微醺東京</p>
                </li>
              </ul>
              <div class="mb-3">
                <img class="img-fluid w-100 object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-5-sm.png?raw=true" alt="sea">
              </div>
              <div class="d-flex align-items-center py-2 px-0">
                <span class="swiper-tag bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm me-2 fs-9">#說走就走</span>
                <span class="swiper-tag bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm me-2 fs-9">#出國玩</span>
                <span class="swiper-tag bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm fs-9">#東亞</span>
              </div>
              <div class="d-flex justify-content-center py-3">
                <a class="me-2 text-newsreader text-decoration-none link-accent-200 fs-6 fw-bold lh-sm">View More</a>
                <span class="ms-1 material-symbols-outlined text-accent-200">
                arrow_forward
                </span>
              </div>
            </div>          
          </div>
          <div class="swiper-slide p-3 bg-white shadow-sm rounded-3">
            <div>
              <h3 class="mb-3 fs-6 fw-bold lh-sm text-accent-200">週末露營趣</h3>
              <ul class="list-unstyled mb-3">
                <li class="mb-2">
                  <p class="mb-0 mb-bold">｜週末說走就走露營記</p>
                </li>
                <li class="mb-2">
                  <p class="mb-0 mb-bold">｜城市野營日記</p>
                </li>
                <li class="mb-2">
                  <p class="mb-0 mb-bold">｜和寵物去露營 - 大自然之旅的雙倍...</p>
                </li>
              </ul>
              <div class="mb-3">
                <img class="img-fluid w-100 object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-2-sm.png?raw=true" alt="bivouac">
              </div>
              <div class="d-flex align-items-center py-2 px-0">
                <span class="swiper-tag bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm me-2 fs-9">#戶外</span>
                <span class="swiper-tag bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm me-2 fs-9">#露營控</span>
                <span class="swiper-tag bg-primary-300 py-1 px-2 rounded-1 text-primary-400 fw-bold lh-sm fs-9">#凹豆</span>
              </div>
              <div class="d-flex justify-content-center py-3">
                <a class="me-2 text-newsreader text-decoration-none link-accent-200 fs-6 fw-bold lh-sm">View More</a>
                <span class="ms-1 material-symbols-outlined text-accent-200">
                arrow_forward
                </span>
              </div>
            </div>          
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-8 py-md-11">
    <div class="container">
      <div class="d-flex justify-content-between mb-7">
        <h2 class="mb-0 fs-3 fw-bold lh-sm">品味生活</h2>
        <div class="d-none d-lg-flex align-items-center">
          <button class="swiper-button-prev ms-auto">
            <span class="material-symbols-outlined">
            arrow_back
            </span>
          </button>
          <div class="line"></div>
          <button class="swiper-button-next">
            <span class="material-symbols-outlined">
            arrow_forward
            </span>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 mb-5 mb-lg-0 d-flex justify-content-center">
          <div>
            <div>
              <h3 class="mb-6 pb-1 fw-bold fs-1 text-primary-400">食.</h3>
            </div>
            <div class="mb-6">
              <img class="img-fluid w-100 object-fit-cover d-none d-sm-block" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/life-1.png?raw=true" alt="food">
              <img class="img-fluid w-100 object-fit-cover d-sm-none" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/life-1-sm.png?raw=true" alt="food">
            </div>
            <ul class="mt-1 mb-6 list-unstyled">
              <li class="mb-4">
                <p class="mb-0 fw-bold fs-7 fs-xl-6 lh-sm"> ｜米其林三星主廚的那些絕活傳奇</p>
              </li>
              <li class="mb-4">
                <p class="mb-0 fw-bold fs-7 fs-xl-6 lh-sm">｜探秘成都的地道川味秘技與魅力</p>
              </li>
              <li>
                <p class="mb-0 fw-bold fs-7 fs-xl-6 lh-sm">｜義大利釀酒師對於酒的堅持執著</p>
              </li>
            </ul>
            <div class="mt-1 d-flex justify-content-center">
              <a class="me-2 text-newsreader text-decoration-none link-accent-200 fs-6 fw-bold lh-sm">View More</a>
              <span class="ms-1 material-symbols-outlined text-accent-200">
              arrow_forward
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-5 mb-lg-0 d-flex justify-content-center">
          <div>
            <div>
              <h3 class="mb-6 pb-1 fw-bold fs-1 text-primary-400">藝.</h3>
            </div>
            <div class="mb-6">
              <img class="img-fluid w-100 object-fit-cover d-none d-sm-block" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/life-2.png?raw=true" alt="art">
              <img class="img-fluid w-100 object-fit-cover d-sm-none" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/life-2-sm.png?raw=true" alt="art">
            </div>
            <ul class="mt-1 mb-6 list-unstyled">
              <li class="mb-4">
                <p class="mb-0 fw-bold fs-7 fs-xl-6 lh-sm">｜解構教主級時裝設計大師的獨特美學</p>
              </li>
              <li class="mb-4">
                <p class="mb-0 fw-bold fs-7 fs-xl-6 lh-sm">｜當代攝影師鏡頭中的光影離奇</p>
              </li>
              <li>
                <p class="mb-0 fw-bold fs-7 fs-xl-6 lh-sm">｜帶你穿縮中世紀，夏季文藝復興展</p>
              </li>
            </ul>
            <div class="mt-1 d-flex justify-content-center">
              <a class="me-2 text-newsreader text-decoration-none link-accent-200 fs-6 fw-bold lh-sm">View More</a>
              <span class="ms-1 material-symbols-outlined text-accent-200">
              arrow_forward
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 d-flex justify-content-center">
          <div>
            <div>
              <h3 class="mb-6 pb-1 fw-bold fs-1 text-primary-400">旅.</h3>
            </div>
            <div class="mb-6">
              <img class="img-fluid w-100 object-fit-cover d-none d-sm-block" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/life-3.png?raw=true" alt="travel">
              <img class="img-fluid w-100 object-fit-cover d-sm-none" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/life-3-sm.png?raw=true" alt="travel">
            </div>
            <ul class="mt-1 mb-6 list-unstyled">
              <li class="mb-4">
                <p class="mb-0 fw-bold fs-7 fs-xl-6 lh-sm">｜遠離喧囂,偶探巴塔哥尼亞終界</p>
              </li>
              <li class="mb-4">
                <p class="mb-0 fw-bold fs-7 fs-xl-6 lh-sm">｜東京深度六區,帶你細品極簡魅力</p>
              </li>
              <li>
                <p class="mb-0 fw-bold fs-7 fs-xl-6 lh-sm">｜專賣奇珍異寶的東歐地下夜市</p>
              </li>
            </ul>
            <div class="mt-1 d-flex justify-content-center">
              <a class="me-2 text-newsreader text-decoration-none link-accent-200 fs-6 fw-bold lh-sm">View More</a>
              <span class="ms-1 material-symbols-outlined text-accent-200">
              arrow_forward
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-8 py-md-11 bg-primary-200">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 d-flex d-lg-block flex-column align-items-center mb-5 mb-lg-0">
          <p class="mb-3 fw-bold fs-6 lh-sm" style="color: #6c757d;">今天又不知道要去哪裡了嗎？</p>
          <h2 class="mb-6 fw-bold fs-3 lh-sm">Vivre 給你意想不到的生活風格提案</h2>
          <button class="btn btn-accent-200 text-white fw-bold d-flex rounded-pill py-3 px-5">
            馬上訂閱
            <span class="material-symbols-outlined ms-2">
            arrow_forward
            </span>
          </button>
        </div>
        <div class="col-3 pt-11 d-none d-lg-block">
          <div class="position-relative mb-7">
            <div class="d-flex align-items-center bg-white p-2 border-1 border-accent-100 rounded-1 
            position-absolute top-0 translate-middle-y" style="left: 1rem;">
              <span class="material-symbols-outlined material-symbols-outlined-play text-accent-300">play_arrow</span>
              <span class="text-accent-300 fw-bold lh-sm ms-2">人氣行程</span>
            </div>
            <img class="img-fluid object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/projects-2.png?raw=true" alt="camping">
            <div class="d-flex align-items-center justify-content-between px-2 py-3 w-100 position-absolute bottom-0 start-0">
              <h3 class="fs-7 mb-0 text-primary-100 fw-bold">親子露營要帶什麼？</h3>
              <span class="material-symbols-outlined text-primary-100">
                arrow_forward
              </span>
            </div>
          </div>
          <div class="position-relative">
            <div class="d-flex align-items-center bg-white p-2 border-1 border-accent-100 rounded-1 
            position-absolute top-0 translate-middle-y" style="left: 1rem;">
              <span class="material-symbols-outlined material-symbols-outlined-play text-accent-300">play_arrow</span>
              <span class="text-accent-300 fw-bold lh-sm ms-2">編輯推薦</span>
            </div>
            <img class="img-fluid object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/projects-4.png?raw=true" alt="mountain">
            <div class="d-flex align-items-center justify-content-between px-2 py-3 w-100 position-absolute bottom-0 start-0">
              <h3 class="fs-7 mb-0 text-primary-100 fw-bold">質感房間改造攻略！</h3>
              <span class="material-symbols-outlined text-primary-100">
                arrow_forward
              </span>
            </div>
          </div>       
        </div>
        <div class="col-3 align-self-start d-none d-lg-block">
          <div class="position-relative mb-7">
            <div class="d-flex align-items-center bg-white p-2 border-1 border-accent-100 rounded-1 
            position-absolute top-0 translate-middle-y" style="left: 1rem;">
              <span class="material-symbols-outlined material-symbols-outlined-play text-accent-300">play_arrow</span>
              <span class="text-accent-300 fw-bold lh-sm ms-2">編輯推薦</span>
            </div>
            <img class="img-fluid object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/projects-1.png?raw=true" alt="mountain">
            <div class="d-flex align-items-center justify-content-between px-2 py-3 w-100 position-absolute bottom-0 start-0">
              <h3 class="fs-7 mb-0 text-primary-100 fw-bold">山女孩的健行筆記</h3>
              <span class="material-symbols-outlined text-primary-100">
                arrow_forward
              </span>
            </div>
          </div>
          <div class="position-relative">
            <div class="d-flex align-items-center bg-white p-2 border-1 border-accent-100 rounded-1 
            position-absolute top-0 translate-middle-y" style="left: 1rem;">
              <span class="material-symbols-outlined material-symbols-outlined-play text-accent-300">play_arrow</span>
              <span class="text-accent-300 fw-bold lh-sm ms-2">熱門文章</span>
            </div>
            <img class="img-fluid object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/projects-3.png?raw=true" alt="beach">
            <div class="d-flex align-items-center justify-content-between px-2 py-3 w-100 position-absolute bottom-0 start-0">
              <h3 class="fs-7 mb-0 text-primary-100 fw-bold">適合溜小孩的海邊景點推薦</h3>
              <span class="material-symbols-outlined text-primary-100">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
        <div class="col d-block d-lg-none">
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide d-flex justify-content-center pt-5">
                <div class="position-relative">
                  <div class="d-flex align-items-center bg-white p-2 border-1 border-accent-100 rounded-1 
                  position-absolute top-0 translate-middle-y" style="left: 1rem;">
                    <span class="material-symbols-outlined material-symbols-outlined-play text-accent-300">play_arrow</span>
                    <span class="text-accent-300 fw-bold lh-sm ms-2">人氣行程</span>
                  </div>
                  <img class="img-fluid object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/projects-2.png?raw=true" alt="camping">
                  <div class="d-flex align-items-center justify-content-between px-2 py-3 w-100 position-absolute bottom-0 start-0">
                    <h3 class="fs-7 mb-0 text-primary-100 fw-bold">親子露營要帶什麼？</h3>
                    <span class="material-symbols-outlined text-primary-100">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide d-flex justify-content-center pt-5">
                <div class="position-relative">
                  <div class="d-flex align-items-center bg-white p-2 border-1 border-accent-100 rounded-1 
                  position-absolute top-0 translate-middle-y" style="left: 1rem;">
                    <span class="material-symbols-outlined material-symbols-outlined-play text-accent-300">play_arrow</span>
                    <span class="text-accent-300 fw-bold lh-sm ms-2">編輯推薦</span>
                  </div>
                  <img class="img-fluid object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/projects-4.png?raw=true" alt="camping">
                  <div class="d-flex align-items-center justify-content-between px-2 py-3 w-100 position-absolute bottom-0 start-0">
                    <h3 class="fs-7 mb-0 text-primary-100 fw-bold">質感房間改造攻略！</h3>
                    <span class="material-symbols-outlined text-primary-100">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide d-flex justify-content-center pt-5">
                <div class="position-relative">
                  <div class="d-flex align-items-center bg-white p-2 border-1 border-accent-100 rounded-1 
                  position-absolute top-0 translate-middle-y" style="left: 1rem;">
                    <span class="material-symbols-outlined material-symbols-outlined-play text-accent-300">play_arrow</span>
                    <span class="text-accent-300 fw-bold lh-sm ms-2">編輯推薦</span>
                  </div>
                  <img class="img-fluid object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/projects-1.png?raw=true" alt="camping">
                  <div class="d-flex align-items-center justify-content-between px-2 py-3 w-100 position-absolute bottom-0 start-0">
                    <h3 class="fs-7 mb-0 text-primary-100 fw-bold">山女孩的健行筆記</h3>
                    <span class="material-symbols-outlined text-primary-100">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide d-flex justify-content-center pt-5">
                <div class="position-relative">
                  <div class="d-flex align-items-center bg-white p-2 border-1 border-accent-100 rounded-1 
                  position-absolute top-0 translate-middle-y" style="left: 1rem;">
                    <span class="material-symbols-outlined material-symbols-outlined-play text-accent-300">play_arrow</span>
                    <span class="text-accent-300 fw-bold lh-sm ms-2">熱門文章</span>
                  </div>
                  <img class="img-fluid object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/projects-3.png?raw=true" alt="camping">
                  <div class="d-flex align-items-center justify-content-between px-2 py-3 w-100 position-absolute bottom-0 start-0">
                    <h3 class="fs-7 mb-0 text-primary-100 fw-bold">適合溜小孩的海邊景點推薦</h3>
                    <span class="material-symbols-outlined text-primary-100">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-8 py-md-11">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-3 mb-md-0">
          <p class="mb-0 fw-bold fs-3 lh-sm text-center text-md-start">想看什麼主題由你決定！</p>
        </div>
        <div class="col-md-6 d-flex flex-column align-items-center align-items-md-end">
          <p class="mb-3 fw-bold fs-5">歡迎投稿與我們分享</p>
          <button class="btn btn-accent-200 rounded-pill px-5 py-3 text-white fs-6 fw-bold">聯絡我們</button>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from "vue";
  import Swiper from 'swiper';
  import { Autoplay, Navigation } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/autoplay';
  import Nav from "@/components/Nav.vue";
  import Footer from "@/components/Footer.vue";
  interface Theme {
    title: string;
    url?: string;
    imageUrl? :string;
    imageUrlSm? :string;
  }
  const theme = ref<Theme[]>([
    {
      title: "城市漫遊者",
      imageUrl: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-1.png?raw=true",
      imageUrlSm: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-1-sm.png?raw=true"
    },
    {
      title: "秘境尋蹤人",
      imageUrl: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-2.png?raw=true",
      imageUrlSm: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-2-sm.png?raw=true"
    },
    {
      title: "品味設計家",
      imageUrl: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-3.png?raw=true",
      imageUrlSm: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-3-sm.png?raw=true"
    },
    {
      title: "美食探險記",
      imageUrl: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-4.png?raw=true",
      imageUrlSm: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-4-sm.png?raw=true"
    },
    {
      title: "美學建築誌",
      imageUrl: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-5.png?raw=true",
      imageUrlSm: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-5-sm.png?raw=true"
    },
    {
      title: "慢活生活行",
      imageUrl: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-6.png?raw=true",
      imageUrlSm: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-6-sm.png?raw=true"
    },
    {
      title: "工藝匠心賞",
      imageUrl: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-7.png?raw=true",
      imageUrlSm: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-7-sm.png?raw=true"
    },
    {
      title: "時尚先鋒派",
      imageUrl: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-8.png?raw=true",
      imageUrlSm: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-8-sm.png?raw=true"
    }
  ])
  //防抖
  function debounce(fn: Function, delay = 500) {
    let timer: number | undefined;

    // debounce function 最終會回傳一個 function
    return (...args: any) => {
      // 每一次 debounce function 被觸發時，會先清除之前的 timer，避免觸發先前的 fn 函式
      // 因此只要在 delay 時間內觸發 debounce function，就會一直清除先前的 timer，避免 fn 一直被執行
      clearTimeout(timer);
      // 清除之後，再重新計時
      // 當 delay 時間到時，執行 fn
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }
  const updateImageUrl = (): void => {
    const screenWidth = window.innerWidth;
    theme.value = theme.value.map(item => {
      return {
        ...item,
        url: screenWidth > 575 ? item.imageUrl : item.imageUrlSm
      }
    })
  }
  const updateDebounce = debounce(updateImageUrl, 200);
  onMounted(() => {
    //swiper配置
    const swiper = new Swiper(".swiper", {
      modules: [ Navigation, Autoplay ],
      autoplay: {
        delay: 3000, // 設定為每 3000 毫秒（3秒）自動切換一次
      },
      breakpoints: {
        320: {
          direction: "horizontal",
          simulateTouch: true,
          loop: true,
          slidesPerView: 1, 
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        768: {
          slidesPerView: 2
        }
      }
    })
    //監聽視窗大小
    updateDebounce();
    window.addEventListener("resize", updateDebounce);
  })
  onUnmounted(() => {
    window.removeEventListener("resize", updateDebounce)
  })
</script>

<style scoped lang="scss">
.banner-container{
  height: 620px;
  background:
    url("https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/banner.png?raw=true")
    no-repeat
    center center / cover
}
.controller{
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
}
.line{
  width: 80px;
  height: 1px;
  background-color: #6c757d;
  margin: 0 20px;
}
.swiper-button-next,
.swiper-button-prev{
  padding: 4px 16px;
  border-radius: 100px;
  border: 1px solid #6c757d;
  width: auto;
  height: auto;
  color: #6c757d;
  position: static;
  margin-top: 0;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  content: ""
}
li::marker{
  background-color: #6c757d;
  display: block;
}
.material-symbols-outlined-play {
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
@media (max-width: 575px) {
  .banner-container{
    height: 550px;
    background:
      url("https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/banner-sm.png?raw=true")
      no-repeat
      center center / cover
  }
}
</style>
