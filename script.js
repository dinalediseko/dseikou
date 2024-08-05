$(function() {
    // Sticky navbar on scroll
    $(window).scroll(function() {
        $('.navbar').toggleClass('sticky', $(this).scrollTop() > 20);
        $('.scroll-up-btn').toggleClass('show', $(this).scrollTop() > 500);
    });

    // Scroll-up button
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 }, 'fast');
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll on menu items click
    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // Typing text animation
    var options = {
        strings: ["Creative Director", "Software Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };
    new Typed(".typing, .typing-2", options);

    // Owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });
});
