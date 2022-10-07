var splide = new Splide('.splide', {
  perPage: 3,
  focus: 0,
  omitEnd: true,
  gap: 60,
  pagination: false,
  arrowPath: 'M22.2564 4.57594L18.3777 0.666667L19.0392 0L24 5L19.0392 10L18.3777 9.33333L22.1624 5.51875L0 5.51875V4.57594L22.2564 4.57594Z'
});

splide.mount();

var splide2 = new Splide('#slider2', {
  perPage: 1,
  pagination: false,
  autoplay: true,
  type: 'loop',
  gap: 10,
});

splide2.mount();



// $(document).ready(function () {

//   $('.header-navbar__hamburger').on('click', function () {
//     $(this).toggleClass('active');
//     $('.header-navbar__list').toggleClass('active');
//   });

// });

