  //アコーディオンメニュー
$(function() {
	$('.header-hover').hover(function() {
		$(this).find('.nav-menu1').stop().slideDown('fast');
	}, function() {
		$(this).find('.nav-menu1').stop().hide();
	});
})

//ハンバーガーボタン
$('.hamburger-btn-wrapper').on('click',function() {
    $(this).toggleClass('is-open');
    $('.nav').toggleClass('is-open');
});

//+-ボタン
// $('.header-hover').hover(function() {
//     $(this).removeClass('open');
// },
// function() {
//     $(this).addClass('close');
// });


$('.header-hover').hover(function() {
    $(this).toggleClass('open');
})

//パララックス
$(window).bind('scroll',function(e){
    parallaxScroll();
});
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.main-img-layer1').css('background-position-y', ( 0 - (scrolled * 0.1)) + 'px');
    $('.wrapper-inner1-center').css('top', ( 0 - (scrolled * .3) ) + 'px');
};


