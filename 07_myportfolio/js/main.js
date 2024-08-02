//마우스 커서
document.addEventListener('mousemove', (e) => {
  let mouseX = e.pageX + 10; // document의 x좌표값
  let mouseY = e.pageY + 10; // document의 y좌표값

  let cursor = document.querySelector('.cursor');
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
})

//https://codepen.io/Ohitis/pen/qaXKGz home bg
$(document).ready(function() {
  // Array for planet colors
  var background = ["rgba(143, 189, 255, 0.7)", "rgba(255,255,255,0.6)", "rgba(255,255,255,0.9)"];

  // Function for planet colors
  function backgroundColor() {
    return background[Math.floor(Math.random() * background.length)];
  }

  // Get viewport size
  var viewportWidth = $(window).width();
  var viewportHeight = $(window).height();
  var viewportSize = viewportWidth + viewportHeight;

  // Set limit for amount of stars and planets based on viewport size
  var starLimit = viewportSize*0.12;
  var planetLimit = viewportSize*0.025; 

  // Get random number
  function getRandom() {
    return Math.random();
  };

  // Function for creating a star
  function newStar() {
    var starDiv = document.createElement('div');
    starDiv.innerHTML = '<figure class="star"></figure>';
    return starDiv.firstChild;
  };

  // Function for creating a planet
  function newPlanet() {
    var planetDiv = document.createElement('div');
    planetDiv.innerHTML = '<figure class="planet"></figure>'; 
    return planetDiv.firstChild;
  };

  // Loop for creating stars
  function createStars() {
    for (var i = 0; i <= starLimit; i++) {
      var star = newStar();
      star.style.top = getRandom()*100+"%";
      star.style.left = getRandom()*100+"%";
      star.style.height = (getRandom()*3)+"px";
      star.style.width = star.style.height;
      star.style.webkitAnimationDelay = getRandom()+"s";
      star.style.mozAnimationDelay = getRandom()+"s";
      star.style.webkitAnimationDuration = getRandom()+1+"s";
      star.style.mozAnimationDuration = getRandom()+1+"s";
      document.body.appendChild(star);
    };
  };

  // Loop for creating planets
  function createPlanets() {
    for (var i = 0; i <= planetLimit; i++) {
      var planet = newPlanet();
      planet.style.top = getRandom()*100+"%";
      planet.style.left = getRandom()*100+"%"; 
      planet.style.height = (getRandom() * 6) + 2+"px";
      planet.style.width = planet.style.height;
      planet.style.opacity = getRandom()+0.15;
      planet.style.webkitAnimationDelay = getRandom()+"s";
      planet.style.mozAnimationDelay = getRandom()+"s";
      planet.style.webkitAnimationDuration = getRandom()+3+"s";
      planet.style.mozAnimationDuration = getRandom()+3+"s";
      planet.style.background = backgroundColor();
      document.body.appendChild(planet);
    };
  };
  
  // Call functions
  createStars();
  createPlanets();
});

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
let modalEl2 = document.querySelector('#modal2');
let modalBtn = document.querySelectorAll('.port .btn-modal');
let closeBtn = document.querySelector('#modal .btn-close');
let closeBtn2 = document.querySelector('#modal2 .btn-close');
console.log(modalBtn);
console.log(closeBtn);

modalBtn[0].addEventListener('click', function(){
  modalEl.style.display = 'flex';
});

modalBtn[1].addEventListener('click', function(){
  modalEl2.style.display = 'flex';
});

closeBtn.addEventListener('click', function(){
  modalEl.style.display = 'none';
});

closeBtn2.addEventListener('click', function(){
  modalEl2.style.display = 'none';
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
    toTopBtn.style.opacity = 0.8;
    toTopBtn.style.transform = 'translateX(0)';
  } else {
    // 요소 숨기기
    // toTopBtn.style.display = 'none';
    // 애니메이션 처리를 하고 싶다면
    toTopBtn.style.opacity = 0;
    toTopBtn.style.transform = 'translateX(100px)';
  }
});


  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  

  var swiper = new Swiper(".mySwiper2", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


//모바일용 메뉴
let btnHamburger = document.querySelector('.btn-hamburger');
let navEl = document.querySelector('header nav');
let menuItems = document.querySelectorAll('header nav ul li a');
console.log(menuItems);

btnHamburger.addEventListener('click', function(){
  //js로 클래스를 제어하는 메소드
  //add()/remove()/toggle()/contains()
  // if(navEl.classList.contains('active')){
  //   navEl.classList.remove('active');
  // }else {
  //   navEl.classList.add('active');
  // }

  navEl.classList.toggle('active');
})

menuItems.forEach(function(menuItem) {
  menuItem.addEventListener('click', function(){
    navEl.classList.remove('active');
  })
});
