//ScrollMagic 사용법
//https://scrollmagic.io/docs/index.html

let spyEls = document.querySelectorAll('section.scroll-spy');
console.log(spyEls);

spyEls.forEach(function(spyEl){
  new ScrollMagic.Scene({ //감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5//화면의 50%지점에서 보여짐 여부 감시(0~1사이 값 지정가능)
  })
  .setClassToggle(spyEl, 'show')//요소가 화면에 보이면 show클래스를 추가
  .addTo(new ScrollMagic.Controller());
});

//모달창 띄우기
let modalEl = document.querySelector('#modal');
let modalBtn = document.querySelectorAll('.port .btn-modal');
let closeBtn = document.querySelector('#modal .btn-close');
console.log(modalBtn);
console.log(closeBtn);

modalBtn[0].addEventListener('click', function(){
  modalEl.style.display = 'flex';
});

closeBtn.addEventListener('click', function(){
  modalEl.style.display = 'none';
});

// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체를 활용
console.log(new Date().getFullYear()); // 현재 연도 정보가 숫자 데이터로 반환됨

let thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// 페이지 최상단으로 이동
let toTopBtn = document.querySelector('#to-top');

// 페이지에 스크롤 이벤트 감지를 추가
// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  // console.log(window.scrollY); // y축 스크롤 위치

  // 페이지 스크롤 위치가 
  // 500px을 넘으면 요소를 보이고,
  // 500px을 넘지 않으면 요소 숨기기!
  if (window.scrollY > 500) {
    // 요소 보이기
    // toTopBtn.style.display = 'flex';
    // 애니메이션 처리를 하고 싶다면
    toTopBtn.style.opacity = 1;
    toTopBtn.style.transform = 'translateX(0)';
  } else {
    // 요소 숨기기
    // toTopBtn.style.display = 'none';
    // 애니메이션 처리를 하고 싶다면
    toTopBtn.style.opacity = 0;
    toTopBtn.style.transform = 'translateX(100px)';
  }
});