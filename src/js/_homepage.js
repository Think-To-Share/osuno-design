import { tns } from 'tiny-slider/src/tiny-slider'

if (document.querySelector('.featured-section')) {
    tns({
        container: '.featured-section .slides',
        items: 2,
        nav: false,
        gutter:20,
        autoplay: true,
        controls:false,
        autoplayTimeout:3000,
        autoplayButtonOutput: false,
        controlsText:['<i class="fas fa-chevron-left"></i>' , '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            768:{
                items: 3,
                controls:false,
            },
            1200:{
            items: 6,
            controls:true,
            },
        }
    })
}


if (document.querySelector('.osuno-hero-section')) {
    tns({
        container: '.osuno-hero-section .slides',
        items: 1,
        nav: true,
        autoplay: true,
        controls:false,
        autoplayTimeout:3000,
        autoplayButtonOutput: false,
    })
}