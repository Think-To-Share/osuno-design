import { tns } from 'tiny-slider/src/tiny-slider'

if (document.querySelector('.featured-section')) {
    tns({
        container: '.featured-section .slides',
        items: 6,
        nav: false,
        gutter:20,
        autoplay: true,
        controls:true,
        autoplayTimeout:3000,
        autoplayButtonOutput: false,
        controlsText:['<i class="fas fa-chevron-left"></i>' , '<i class="fas fa-chevron-right"></i>']
    })
}