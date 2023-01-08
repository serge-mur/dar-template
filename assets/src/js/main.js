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

})
