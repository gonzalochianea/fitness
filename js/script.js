/* Lógica de interactividad para el carrusel de suplementos */
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const btnLeft = document.getElementById('prevBtn');
    const btnRight = document.getElementById('nextBtn');

    let scrollInterval;
    const scrollSpeed = 5; // Píxeles de movimiento por frame

    // Función para iniciar el scroll al mantener presionado
    const startScrolling = (direction) => {
        scrollInterval = setInterval(() => {
            carousel.scrollLeft += (direction === 'right' ? scrollSpeed : -scrollSpeed);
        }, 10);
    };

    // Función para detener el scroll
    const stopScrolling = () => clearInterval(scrollInterval);

    // Eventos de Mouse para botón derecho
    btnRight.addEventListener('mousedown', () => startScrolling('right'));
    btnRight.addEventListener('mouseup', stopScrolling);
    btnRight.addEventListener('mouseleave', stopScrolling);

    // Eventos de Mouse para botón izquierdo
    btnLeft.addEventListener('mousedown', () => startScrolling('left'));
    btnLeft.addEventListener('mouseup', stopScrolling);
    btnLeft.addEventListener('mouseleave', stopScrolling);

    // Función para ocultar/mostrar flechas según la posición del scroll
    const updateArrows = () => {
        const pos = carousel.scrollLeft;
        const max = carousel.scrollWidth - carousel.clientWidth;
        btnLeft.style.opacity = pos > 5 ? '1' : '0';
        btnLeft.style.visibility = pos > 5 ? 'visible' : 'hidden';
        btnRight.style.opacity = pos < max - 5 ? '1' : '0';
        btnRight.style.visibility = pos < max - 5 ? 'visible' : 'hidden';
    };

    carousel.addEventListener('scroll', updateArrows);
    updateArrows(); // Ejecución inicial
});