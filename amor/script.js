// Animação de partículas
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Partículas carregadas!');
});

// Animação de rolagem
AOS.init();



// Inicializa o Slick Carousel
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
                    slidesToShow: 1, // Mostra apenas 1 slide em telas menores
                    centerMode: false, // Desativa o modo centralizado
                    arrows: false, // Esconde as setas
                }
            }
        ]
    });
});