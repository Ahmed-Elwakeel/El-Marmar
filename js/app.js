require('../css/style.css')
window.$ = require('jquery');

function importAll(r) {
  return r.keys().map(r);
}

var menuButtonState = false;
$(window).resize(function(){     
 	if ($(window).width() >= 767 ){
    	$(".main-nav__tab").attr('style','')
    	$(".main-nav").attr('style','')
   		$(".main-nav__tab__icon").html("&#9776")
  	}
});  
$(".main-nav__tab__icon").click(function(){
	if(menuButtonState){
		menuButtonState = false;
		$(".main-nav").css({"flex-direction":" row"})
		$(".main-nav__tab__icon").html("&#9776")
		$(".main-nav__tab").css({"display":"none"})
	}else{
		menuButtonState = true;
		$(".main-nav").css({"flex-direction":" column"})
		$(".main-nav__tab__icon").html("&#10060")
		$(".main-nav__tab__icon").css({"padding":"10px"})
		$(".main-nav__tab").css({"display":"flex" , "padding":"10px"  ,"width":"100%" ,"border-bottom":"1px solid black"})
	}
})

$('.products-list__item').click(function(){

	var wasOpened = $('.products-list__item.products-list__item--open')
	$('.products-list__item').removeClass('products-list__item--open')
	wasOpened.addClass('products-list__item--close')
	$(this).removeClass('products-list__item--close')
	$(this).addClass('products-list__item--open')
})