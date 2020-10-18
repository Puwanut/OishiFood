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
        $('.owl-carousel#product-recommend').owlCarousel({
            loop: true,
            margin: 10,
            dots: false,
            nav: true,
            navText: [
                '<img src="https://www.oishifood.com/img/owl-prev.png" class="img-fluid">',
                '<img src="https://www.oishifood.com/img/owl-next.png" class="img-fluid">'],
            items: 4,
            autoplay: 3000,
            autoplayHoverPause: true,
            responsive: {
                467: {
                    items: 3
                },
                767: {
                    items: 4
                },
                993: {
                    items: 5
                },
                1200: {
                    items: 4
                }
            }
        });
    });