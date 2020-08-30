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

function filterMenuToggle(){
  var element = document.querySelector(".filter-wrapper");
	element.classList.toggle("active");
}




  

