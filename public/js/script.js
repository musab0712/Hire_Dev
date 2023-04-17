// ---------Stickey Nav-bar --------------
// window.onscroll = function() {myFunction()};
    
// var navbar = document.getElementById("my-navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// ----------------------Swiper code-------------------------
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 1000,
    reverseDirection: true,
    pauseOnMouseEnter: true,
  },
  speed: 300,
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,

  // add break points
  breakpoints:{
    0:{
        slidesPerView:1,
    },
    600:{
        slidesPerView: 2,
    },
    900:{
        slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
