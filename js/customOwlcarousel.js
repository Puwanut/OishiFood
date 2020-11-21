$(document).ready(
    function () {
        $('.owl-carousel#homepage-banner').owlCarousel({
            loop: true,
            margin: 10,
            dots: false,
            nav: true,
            navText: [
                '<img src="https://www.oishifood.com/img/owl-prev.png" class="img-fluid">',
                '<img src="https://www.oishifood.com/img/owl-next.png" class="img-fluid">'],
            items: 1,
            autoplay: 3000,
            autoplayHoverPause: true
        });
        $('.owl-carousel#owl-product-recommend').owlCarousel({
            loop: true,
            margin: 20,
            dots: false,
            nav: true,
            navText: [
                '<img src="https://www.oishifood.com/img/owl-prev.png" class="img-fluid">',
                '<img src="https://www.oishifood.com/img/owl-next.png" class="img-fluid">'],
            items: 2,
            autoplay: 3000,
            autoplayHoverPause: true,
            responsive: {
                467: {
                    items: 3
                },
                767: {
                    items: 4
                },
                991: {
                    items: 5
                },
                1200: {
                    items: 4
                }
            }
        });
        $('.owl-carousel#owl-oishi-restaurant').owlCarousel({
            loop: true,
            margin: 20,
            dots: true,
            nav: true,
            navText: [
                '<img src="https://www.oishifood.com/img/owl-prev.png" class="img-fluid">',
                '<img src="https://www.oishifood.com/img/owl-next.png" class="img-fluid">'],
            items: 2,
            autoplay: 0,
            autoplayHoverPause: true,
            responsive: {
                767: {
                    items: 3
                },
                991: {
                    items: 4
                }
            }
        });
        $('.owl-carousel#owl-oishi-ramen, .owl-carousel#owl-kakashi').owlCarousel({
            loop: false,
            margin: 20,
            dots: false,
            nav: false,
            items: 3
        });
    });