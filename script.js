
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Partículas carregadas!');
});


AOS.init();




$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    arrows: false, 
                }
            }
        ]
    });
});
