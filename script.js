let navpage = document.querySelector("#navpage");


function locomotive() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        smartphone: { smooth: true },
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
        autoplay: {
            delay: 3000,
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




function loadingpage() {

    var t00 = Math.floor(Math.random() * 30)
    var t35 = Math.floor(Math.random() * 31) + 20
    var t90 = Math.floor(Math.random() * 21) + 80

    document.querySelector("#one").innerHTML = t00;
    document.querySelector("#two").innerHTML = t35;
    document.querySelector("#three").innerHTML = t90;




    var tl = gsap.timeline();
    tl.from("#one", {
        onStart: function () {
            $('#one').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback: function () {
                        $('#one').textillate('out')
                    }
                },
                out: { effect: 'fadeOutUp' }
            });
        }
    })
        .from("#two", {
            opacity: 0,
            delay: 1,
            onStart: function () {
                $('#two').textillate({
                    in: {
                        effect: 'fadeInUp',
                        callback: function () {
                            $('#two').textillate('out')
                        }
                    },
                    out: { effect: 'fadeOutUp' }
                });
            }
        })
        .from("#three", {
            opacity: 0,
            color: "red",
            delay: 1,
            onStart: function () {
                $('#three').textillate({
                    in: {
                        effect: 'fadeInUp',
                        callback: function () {
                            $('#three').textillate('out')
                        }
                    },
                    out: { effect: 'fadeOutUp' }
                });
            }
        })

        .from("#four", {
            opacity: 0,
            delay: 1,
            onStart: function () {
                $('#four').textillate({
                    in: {
                        effect: 'fadeInUp',
                        callback: function () {
                            $('#four').textillate('out')
                        }
                    },
                    out: { effect: 'fadeOutUp' }
                });
            }
        })
        .to("#over", {
            height: "0%",
            delay: 1,
            duration: 2,
            ease: "Power4.easeOut"

        })
        .to("#over>H3", {
            opacity: 0,
            delay: -1,

        })
    tl.from("#centertxt>h1", {
        opacity: 0,
        y: "40%",
        duration: 2,
        ease: "bounce.out"

    })
    tl.from("#image", {
        opacity: 0,
        x: "50%",
        duration: 1,
    })
    tl.to("#image", {
        width: "30%",
        height: "80%",
        delay: 1,
        duration: 1,
              
    })
    tl.from("#problem", {
        opacity: 0,
        x: "-50%",
        duration: 1,
    }, "-=1")

}

function swiperjs1() {


    var swiper1 = new Swiper(".mySwiper1", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
}





loadingpage()
navPageAnimation()
locomotive()
swiperJs()
swiperjs1()


