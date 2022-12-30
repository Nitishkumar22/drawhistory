let navpage = document.querySelector("#navpage");


function locomotive() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        smartphone:{ smooth: true },
        getDirection: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}


function swiperJs() {
    var swiper = new Swiper(".mySwiper", {
        autoplay:{
            delay:3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}



function navPageAnimation() {
    document.querySelector("#menu")
        .addEventListener('click', function () {
            navpage.style.left = "0%";
        })

    document.querySelector("#menu1")
        .addEventListener('click', function () {
            navpage.style.left = "100%";
        })
}

navPageAnimation()
locomotive()
swiperJs()


