$('.menu-btn').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn-active');
    $('.menu-nav').toggleClass('menu-nav-active');
});


// Slick carousel //
//
// $('.miniatures').slick({
//     dots: false,
//     arrows: false,
//
//     mobileFirst:true,
//     responsive: [
//         {
//             breakpoint: 720,
//             settings:"unslick"
//         },{
//             breakpoint: 568,
//             settings: {
//                 infinite: true
//             }
//         },{
//             breakpoint: 480,
//             settings: {
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 3,
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }, {
//             breakpoint: 320,
//             settings: {
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//
//     ]
//
// });

// Owl Carousel //


// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel( {
//         loop: true,
//         autoplay:true,
//         autoplayTimeout: 3000,
//         responsive:{
//             320:{
//                 items: 1
//             },
//             414:{
//                 items:1
//             },
//             568:{
//                 items:3,
//                 dots: true,
//                 loop: true
//             },
//             667:{
//                 items:3,
//                 autoplay:false
//             }
//         }
//     });
//
// });
