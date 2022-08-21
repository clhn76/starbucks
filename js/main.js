const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener(
  'scroll',
  _.throttle(() => {
    if (window.scrollY > 500) {
      //배지 숨기기
      //gsap.to(요소,지속시간,옵션)
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none',
      });

      //버튼 보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      //배지 나타내기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      });

      //버튼 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);

toTopEl.addEventListener('click', () => {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: 0.7 * (index + 1),
    opacity: 1,
  });
});

//new Swiper(선택자, 옵션) api문서만 보면 다있어 진짜 미쳤어 존나 조아 어떻게했누
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
});
new Swiper('.promotion .swiper', {
  slidesPerView: 3, //한번에 보여질 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드 정가운데 보이게,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});
new Swiper('.awards .swiper', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  },
});

const promotionEl = document.querySelector('.promotion');
const togglePmEl = document.querySelector('.notice .toggle-promotion');
let isPromotionHide = false;
togglePmEl.addEventListener('click', () => {
  // if (!isPromotionHide) {
  //   gsap.to(promotionEl, 1, {
  //     display: 'none',
  //     height: 0,
  //   });
  //   isPromotionHide = true;
  // } else {
  //   gsap.to(promotionEl, 1, {
  //     display: 'block',
  //     height: '693px',
  //   });
  //   isPromotionHide = false;
  // }
  promotionEl.classList.toggle('promotion-hide');
  isPromotionHide = !isPromotionHide;
});

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //애니매이션 무한반복
    yoyo: true, //애니메이션 끝나면 뒤로 재생
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐 여부 감시할 요소를 지정
    tirggerHook: 0.8,
  })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
