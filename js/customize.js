// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    // 廣告輪播
    $('.adSlider').slick({
        // mobileFirst: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });
    //Imagebanner
    $('.Imagebanner_slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        autoplaySpeed: 5000,
        autoplay: true,
        fade: true,
        cssEase: 'ease'
    });
    $('.searchbtn').click(function() {
        $('header .search').slideToggle();
    })
    // 
    //圖片輪播 
    $('.photo_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, //自動播放
        autoplaySpeed: 3000,
    });
    //條件查詢
    $('.condition_block').css('display', 'none');
    $('.condition').click(function() {
        $('.condition_block').slideToggle()
    })
    // 
    $('.search .keywordHot').find('a:last').keyup(function() {
        $('.search ').hide();
    })
});
// 無障礙打開search
$(document).on('keydown', function(e) {
    if (e.altKey && e.keyCode == 83) {
        $('html, body').animate({ scrollTop: 0 }, 200, 'easeOutExpo');
        $('.search').fadeIn();
        $('.search').find('input[type="text"]').focus();
        // console.log("ok");
    }
    if (e.keyCode == 27) {
        $('.search').hide();
        $('.search').find('input[type="text"]').focusout();
    }
});
//font-size
$(document).ready(function() {
    $('#incfont').click(function() {
        curSize = parseInt($('#ContentPage').css('font-size')) + 2;
        if (curSize <= 20) $('#ContentPage').css('font-size', curSize);
    });
    $('#decfont').click(function() {
        curSize = parseInt($('#ContentPage').css('font-size')) - 2;
        if (curSize >= 12) $('#ContentPage').css('font-size', curSize);
    });
});