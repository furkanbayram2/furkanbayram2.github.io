function hamburgerToggle() {
  var element = document.querySelector(".left-menu");
  element.classList.toggle("show-left-menu");
}

function leftMenutoggle() {
  var element = document.querySelector(".nav-item-sub-menu");
  element.classList.toggle("left-menu");
}

function searchToggle() {
  var element = document.querySelector(".search-wrapper");
  var bgDark = document.querySelector(".bg-dark");
  element.classList.toggle("show-search");
  bgDark.classList.toggle("d-none");
}

function filterMenuToggle() {
  var element = document.querySelector(".filter-wrapper");
  element.classList.toggle("active");
}


function closeCookie() {
  var cookie = document.querySelector(".cookie");
  cookie.classList.toggle("d-md-flex");
  document.body.classList.toggle("hide-scroll");

}

window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}