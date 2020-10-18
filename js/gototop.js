$(document).ready(
    function () {
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 400) {
                    $('#btn-gotoTop').fadeIn();
                } else {
                    $('#btn-gotoTop').fadeOut();
                }
            });

            $('#btn-gotoTop').click(function () {
                $('body,html').animate({ scrollTop: 0 }, 0);
            });
        });

        //ฝากไว้ (ไม่เกี่ยวกับ gotoTop)
        // $("#navButton").click(function () {
        //     $(".navbar").toggleClass("bg-light");
        // });
    });