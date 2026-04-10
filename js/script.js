/* Lógica de carrusel interactivo */
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const btnLeft = document.getElementById('prevBtn');
    const btnRight = document.getElementById('nextBtn');

    let scrollInterval;
    const scrollSpeed = 5;

    // Iniciar desplazamiento continuo
    const startScrolling = (direction) => {
        scrollInterval = setInterval(() => {
            carousel.scrollLeft += (direction === 'right' ? scrollSpeed : -scrollSpeed);
        }, 10);
    };

    // Detener desplazamiento
    const stopScrolling = () => clearInterval(scrollInterval);

    // Eventos Mouse
    btnRight.addEventListener('mousedown', () => startScrolling('right'));
    btnRight.addEventListener('mouseup', stopScrolling);
    btnRight.addEventListener('mouseleave', stopScrolling);

    btnLeft.addEventListener('mousedown', () => startScrolling('left'));
    btnLeft.addEventListener('mouseup', stopScrolling);
    btnLeft.addEventListener('mouseleave', stopScrolling);

    // Visibilidad de flechas según posición de scroll
    const updateArrows = () => {
        const pos = carousel.scrollLeft;
        const max = carousel.scrollWidth - carousel.clientWidth;
        btnLeft.style.opacity = pos > 5 ? '1' : '0';
        btnLeft.style.visibility = pos > 5 ? 'visible' : 'hidden';
        btnRight.style.opacity = pos < max - 5 ? '1' : '0';
        btnRight.style.visibility = pos < max - 5 ? 'visible' : 'hidden';
    };

    carousel.addEventListener('scroll', updateArrows);
    updateArrows();
});