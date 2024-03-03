// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
    toggle_btn = document.querySelector(".toggle-btn");
    big_wrapper = document.querySelector(".big-wrapper");
    hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

// (function($) {
//     "use strict";

//     // Spinner
//     var spinner = function() {
//         setTimeout(function() {
//             if ($('#spinner').length > 0) {
//                 $('#spinner').removeClass('show');
//             }
//         }, 1);
//     };
//     spinner();
// }) 

// $(window).scroll(function() {
//     if ($(this).scrollTop() > 100) {
//         $('.back-to-top').fadeIn('slow');
//     } else {
//         $('.back-to-top').fadeOut('slow');
//     }
// });
// $('.back-to-top').click(function() {
//     $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
//     return false;
// });

// $(window).scroll(function() {
//     if ($(this).scrollTop() > 45) {
//         $('.navbar').addClass('sticky-top shadow-sm');
//     } else {
//         $('.navbar').removeClass('sticky-top shadow-sm');
//     }
// });

function toggleAnimation() {
    // Clone the wrapper
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if (dark) {
        clone.classList.remove("light");
        clone.classList.add("dark");
    } else {
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

    document.body.classList.add("stop-scrolling");

    clone.addEventListener("animationend", () => {
        document.body.classList.remove("stop-scrolling");
        big_wrapper.remove();
        clone.classList.remove("copy");
        // Reset Variables
        declare();
        events();
    });
}

function events() {
    toggle_btn.addEventListener("click", toggleAnimation);
    hamburger_menu.addEventListener("click", () => {
        big_wrapper.classList.toggle("active");
    });
}

events();