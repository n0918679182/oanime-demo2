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
});

loginClose.addEventListener('click', function () {
  document.getElementById("login-container").style.top = "-120%";
}); 
