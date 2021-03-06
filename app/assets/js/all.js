// header 點擊下拉搜尋
let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.search-form');
searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('bx-x');
    searchForm.classList.toggle('active');
    userMenu.classList.remove('active');
});



// header 點擊下拉選單 或 點擊登入
var userBtn = document.querySelector('#user-btn');
var userMenu = document.querySelector('.user-menu');
var havelogin = "true";
var loginClose = document.querySelector('#close-btn');
var logout = document.querySelector('#logout');
var login = document.querySelector('.login-btn');



userBtn.addEventListener('click', function () {
  searchBtn.classList.remove('bx-x');
  searchForm.classList.remove('active');

  if (havelogin == "true") {
    userMenu.classList.toggle('active');
  } else if(havelogin == "false"){
    document.getElementById("user-menu").style.display = "none";
    document.getElementById("login-container").style.top = 0;
  }
});

login.addEventListener('click', function () {
  havelogin = "true";
});

logout.addEventListener('click', function () {
  havelogin = "false";
  userMenu.classList.remove('active');
});

loginClose.addEventListener('click', function () {
  document.getElementById("login-container").style.top = "-120%";
}); 




// 廣告自動撥放及左右滑動
var swiper = new Swiper(".ad-slider", {
  loop:true,
  grabCursor:true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// 影片清單分類按鈕
let tags = document.querySelectorAll('.tag');
tags.forEach(function(tag){
  tag.addEventListener('click', ()=>{
    tags.forEach(function(t){
      t.classList.remove('active');
    });
    tag.classList.toggle('active');
  });
});



// 影片清單分類按鈕 - RWD側邊選單
let tagsBT = document.querySelector('.tags-rwd');
let tagList = document.querySelector('.tags');
let closeBT = document.querySelector('.close-bt');
let cover = document.querySelector('.cover');
tagsBT.addEventListener('click',()=>{
  tagList.classList.toggle('active');
  cover.classList.toggle('active');
})
closeBT.addEventListener('click',()=>{
  tagList.classList.remove('active');
  cover.classList.remove('active');
})
