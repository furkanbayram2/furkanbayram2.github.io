function hambergerToggle() {
	var element = document.querySelector(".left-menu");
	element.classList.toggle("show-left-menu");
  }

  function leftMenutoggle() {
	var element = document.querySelector(".nav-item-sub-menu");
	element.classList.toggle("left-me");
  }

  function searchToggle() {
	var element = document.querySelector(".search-wrapper");
	var bgDark = document.querySelector(".bg-dark");

	element.classList.toggle("show-search");
	bgDark.classList.toggle("d-none");
  }


  

$(function () {
	var mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		loop: true,
		centeredSlides: false,
		setWrapperSize: false,
		breakpoints: {
		  // when window width is >= 320px
		  320: {
			slidesPerView: 2,
			spaceBetween: 10,
			centeredSlides: true,
		  },
		  // when window width is >= 576px
		  576: {
			slidesPerView: 2,
			spaceBetween: 15,
			centeredSlides: true,
		  },
		  // when window width is >= 768
		  768: {
			slidesPerView: 3,
			spaceBetween: 20,
			centeredSlides: true,
		  },
		  // when window width is >= 992
		  992: {
			slidesPerView: 4,
			spaceBetween: 20,
			centeredSlides: false,
		  }
		}
	  })
});