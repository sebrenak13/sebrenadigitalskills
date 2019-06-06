$(document).ready(function(){
   console.log("Welcome to our page");
   $(".close, .hamburger").click(function(e){
     e.preventDefault();
     $(".main-nav").toggleClass('open-nav');
     $("body").toggleClass('nav-opened');
});
    $('.flexslider').flexslider();
});
