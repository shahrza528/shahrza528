// Содержит в себе скрипты которые будут относиться ко все сайтам
$(document).ready(function() {
    //navbar 
    $(".dropdown").on("mouseover", function() {
    $(this).find(".dropdown-menu").addClass("show");
    $(this).find(".dropdown-item").addClass("show");
    });
    $(".dropdown").on("mouseout", function() {
        $(this).find(".dropdown-menu").removeClass("show");
        });
//scroll
        $(window).scroll(function() {
            if ($(this).scrollTop() >20) {        // If page is scrolled more than 50px
                $('.headerNavBarSection').css("position","fixed");    // Fade in the arrow
                $('.headerNavBarSection').css("top","0px");    // Fade in the arrow
                $('.headerNavBarSection').css("background-color","rgb(188,184,184, 0.9)");    // Fade in the arrow
                $('.headerNavBarSection').css("width","100%");    // Fade in the arrow
                $('.headerNavBarSection').css("height","70px");    // Fade in the arrow
            }else{
                $('.headerNavBarSection').css("position","relative");    // Fade in the arrow
                $('.headerNavBarSection').css("background-color","unset");    // Fade in the arrow
            };

          });
//responsive nav bar responsive


$(".custom-nav .custom-nav-item").on("mouseover", function() {
    $(this).find(".custom-nav-dropdown").fadeIn(0);
});

$(".custom-nav .custom-nav-item").on("mouseleave", function() {
    $(this).find(".custom-nav-dropdown").fadeOut(0);
});

$(".open_dropdown").click(function(e) {
    e.preventDefault();

    $(".custom-nav-item .active").removeClass("active");
    $(this).addClass("active");
});



//Открывание меню нав при нажитии
$(".menu_button").on("click", function() {
    $(".open_dropdown").on("click", function() {
    $(this).next().slideToggle(0);

    if ($(this).find("i").hasClass("fa-plus")) {
        $(this).find("i").removeClass("fa-plus");
        $(this).find("i").addClass("fa-minus");

    } else {
        $(this).find("i").removeClass("fa-minus");
        $(this).find("i").addClass("fa-plus");
    }
});

    $(".navbar_responsive").slideToggle();
    
    if ($(this).find("i").hasClass("fa-bars")) {
        $(this).find("i").removeClass("fa-bars");
        $(this).find("i").addClass("fa-window-close");
    } else {
        $(this).find("i").removeClass("fa-window-close");
        $(this).find("i").addClass("fa-bars");
    }

    // $(".start").fadeOut(300);
});
if ($(window).width()>992) {
    $(".navbar_responsive").css("display","none")
}

$(".search_button").on("click", function() {
    $(".search_panel").slideToggle(300);
});
    

// SCROLL UP BUTTON 

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


$('#showvideo').click(function(e) {    
    e.preventDefault();        
    $('#test').html('<iframe id="video" width="820" height="715" src="//www.youtube.com/embed/aS3DPglji0o?rel=0" frameborder="0" allowfullscreen></iframe>');
    $('#test').css("display","flex")
});
// Slicki 
$('.item_1').slick({
    slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  });

});


