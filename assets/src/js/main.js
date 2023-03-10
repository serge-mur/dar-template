document.addEventListener('DOMContentLoaded', function (event) {

    const mediaQueryMobile = window.matchMedia('(max-width: 576px)')

    function mediaChange(e) {
        if (e.matches) {
            console.log('mobile!')
        } else {
            console.log('desktop!')
        }
    }
    mediaQueryMobile.addListener(mediaChange)
    mediaChange(mediaQueryMobile)


    const menuBtn = document.querySelector('.menu-btn')
    menuBtn.addEventListener('click', event => {
        menuBtn.classList.toggle('active');
    })

    let swiperVideo = new Swiper(".swiper-video", {
        slidesPerView: 1,
        // slidesPerGroup: 1,
        spaceBetween: 24,
        // autoHeight: true,
        grabCursor: true,
        cssMode: true,
        breakpoints: {
            992: {
                slidesPerView: 3,
                slidesPerGroup: 1,
            },
            576: {
                slidesPerView: 2,
                slidesPerGroup: 1,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    let swiperSlider = new Swiper(".swiper-slider", {
        slidesPerView: 1,
        // slidesPerGroup: 1,
        spaceBetween: 24,
        // autoHeight: true,
        grabCursor: true,
        cssMode: true,
        breakpoints: {
            992: {
                slidesPerView: 3,
                slidesPerGroup: 1,
            },
            576: {
                slidesPerView: 2,
                slidesPerGroup: 1,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    const videoModal = document.getElementById('videoModal')
    if (videoModal) {
        videoModal.addEventListener('show.bs.modal', event => {
            const button = event.relatedTarget
            const video = button.getAttribute('data-bs-video')
            const modalBody = videoModal.querySelector('.modal-body')
            modalBody.innerHTML = `<div class="ratio ratio-16x9"><iframe src="https://www.youtube.com/embed/${video}?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`
        })
        videoModal.addEventListener('hidden.bs.modal', event => {
            const modalBody = videoModal.querySelector('.modal-body')
            modalBody.innerHTML = ''
        })
    }

    const imageModal = document.getElementById('imageModal')
    if (imageModal) {
        imageModal.addEventListener('show.bs.modal', event => {
            const button = event.relatedTarget
            const image = button.getAttribute('data-bs-image')
            const modalBody = imageModal.querySelector('.modal-body')
            modalBody.innerHTML = `<img src="${image}" alt="">`
        })
        imageModal.addEventListener('hidden.bs.modal', event => {
            const modalBody = imageModal.querySelector('.modal-body')
            modalBody.innerHTML = ''
        })
    }

    const btnCollapse = document.querySelectorAll('.btn-collapse')
    btnCollapse.forEach((btn) => {
        btn.addEventListener('click', event => {
            if(event.target.classList.contains('collapsed')) {
                event.target.innerHTML = '??????????????????'
            } else {
                event.target.innerHTML = '????????????'
            }
        })
    })

})