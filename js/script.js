$(document).ready(function(){
    $(".banner__carusel").owlCarousel({
        items:1, 
        loop:true,
        autoplay:true
    });
    $(".cases__carusel").owlCarousel({
        items:5, 
        loop:true,
        autoplay:true
    });
    $(".why-us__carusel").owlCarousel({
        items:1, 
        loop:true,
        autoplay:true
    });
});

//tabs
function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(cityName).style.display = "block"; 
}
//menu-fix
var $menu = $("#menu-fix");
$(window).scroll(function(){
    if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
        $menu.removeClass("default").addClass("fixed");
    } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
        $menu.removeClass("fixed").addClass("default");
    }
});