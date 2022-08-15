//アコーディオンメニュー(効いた)
$(function() {
    $('.header-hover').mouseover(function(){
      $(this).children('.nav-menu1').stop().slideDown('fast');
    });
    $('.header-hover').mouseout(function(){
      $('.nav-menu1').stop().hide();
    });
  });


