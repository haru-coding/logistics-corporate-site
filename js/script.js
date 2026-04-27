// $(".menu_btn").click(function () {
//   $(this).toggleClass('active');
// });

// $(function () {
//   $('.menu_btn').click(function () {
//     $(this).toggleClass('active');

//     if ($(this).hasClass('active')) {
//       $('.burger_menu').addClass('active');
//     } else {
//       $('.burger_menu').removeClass('active');
//     }
//   });
// });

$(".menu_btn").on('click',function () {

  $(this).toggleClass('is-active');
  $(".burger_menu").toggleClass('is-active');

});

jQuery(window).on('scroll', function () {
  if (883 < jQuery(this).scrollTop()) {
    jQuery('.header').addClass('change-color');
  } else {
    jQuery('.header').removeClass('change-color');
  }
});

const targets = document.querySelectorAll('.fade-up, .img-zoom');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-show');
    }
  });
}, {
  threshold: 0.2
});

targets.forEach((target) => observer.observe(target));

fetch("./header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

fetch("./footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });