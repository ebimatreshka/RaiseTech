//アコーディオンメニュー(効いた)
$(function() {
    $('.header-hover').mouseover(function(){
      $(this).children('.nav-menu1').stop().slideDown();
    });
    $('.header-hover').mouseout(function(){
      $('.nav-menu1').stop().fadeOut();
    });
  });


//アコーディオンメニュー(×だった)  
// $(function() {
//     $('.header-hover').mouseover(function() {
//         var $hover = $(this).find('.nav-menu1');
//         if ($hover.hasClass('open')) {
//           $hover.removeClass('open');
//         } else {
//           $hover.addClass('open');
//         }
//         });
//     });
