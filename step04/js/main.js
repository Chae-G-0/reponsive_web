$(function () {
    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on');
    })

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($(window).width() < 769) {
            e.preventDefault();
            $('.smenu').hide();
            $(this).next().show();
        }
    });

    $(window).on('resize', function () {
        $('.smenu').removeAttr('style')
    })
})