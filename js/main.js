    const swiperHeader = new Swiper('.swipperHeader', {
        // Optional parameters
        loop: true,
        autoplay:{
            delay : 7000,
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        // effect:  'fade',
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
    var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    // slidesPerColumn: 2,
    spaceBetween: 30,
    loop:true,
    autoplay:{
        delay : 1500,
    },
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        650:{
            slidesPerView: 2,
        }
    }
    });
    var swiperService = new Swiper('.swipperService', {
    slidesPerView: 1,
    breakpoints: {
        650:{
            slidesPerView: 2.5,
        }
    },
    spaceBetween: 20,
    autoplay:{
        delay : 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    });
    var swipperProject = new Swiper('.projectSwiper', {
    slidesPerView: 2,
    breakpoints: {
        650:{
            slidesPerView: 4,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay:{
        delay:9000
    },
    loop:true
    });
    var brandSwiper = new Swiper('.brandSwiper', {
    slidesPerView: 3,
    breakpoints: {
        650:{
            slidesPerView: 8,
        }
    },
    spaceBetween: 20,
    autoplay:{
        delay:1200
    },
    });