$(document).ready(function(){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
		direction: 'vertical',
		effect : 'fade',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
		mousewheelControl: true,
		paginationType: 'bullets',
		onInit: function(swiper){
			$('#pager .index').html(swiper.activeIndex+1);
			$('#pager .total').html('/ '+swiper.slides.length);
		},
		onSlideChangeStart: function(swiper){
			$('#pager .index').html(swiper.activeIndex+1);
			$('#pager .total').html('/ '+swiper.slides.length);
		},
	});
});