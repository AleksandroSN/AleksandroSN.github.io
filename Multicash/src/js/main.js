var mySwiper = new Swiper('.swiper-container', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 10,
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 130
		}
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});
