document.addEventListener('DOMContentLoaded', function(event) {

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


    let swiperVideo = new Swiper(".swiper-video", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
        autoHeight: true,
        grabCursor: true,
        breakpoints: {
            992: {
                slidesPerView: 3,
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



})


