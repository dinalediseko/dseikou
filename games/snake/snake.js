
document.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector('.text');

    text.addEventListener('animationend', () => {
        const paintbrush = document.querySelector('.paintbrush');
        paintbrush.style.animation = 'none';
    });
});

// ===== NAV BAR ===== \\

// search-box open close js code

// sidebar open close js code
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}
// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
let aboutArrow = document.querySelector(".about-arrow");
aboutArrow.onclick = function() {
 navLinks.classList.toggle("show4");
}
let contactArrow = document.querySelector(".contact-arrow");
contactArrow.onclick = function() {
 navLinks.classList.toggle("show5");
}