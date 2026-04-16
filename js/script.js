/* Lógica de interactividad para el carrusel de suplementos - Versión Rápida */
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const btnLeft = document.getElementById('prevBtn');
    const btnRight = document.getElementById('nextBtn');

    if (!carousel || !btnLeft || !btnRight) return;

    let scrollInterval;
    
    // Aumentamos de 7 a 15 para que duplique la velocidad de desplazamiento
    const scrollAmount = 15; 

    const startScrolling = (direction) => {
        stopScrolling();
        scrollInterval = setInterval(() => {
            // Se mueve 'scrollAmount' píxeles cada 10 milisegundos
            carousel.scrollLeft += (direction === 'right' ? scrollAmount : -scrollAmount);
        }, 10);
    };

    const stopScrolling = () => {
        if (scrollInterval) clearInterval(scrollInterval);
    };

    /* --- EVENTOS DERECHA --- */
    btnRight.addEventListener('mousedown', () => startScrolling('right'));
    btnRight.addEventListener('touchstart', (e) => { e.preventDefault(); startScrolling('right'); });

    /* --- EVENTOS IZQUIERDA --- */
    btnLeft.addEventListener('mousedown', () => startScrolling('left'));
    btnLeft.addEventListener('touchstart', (e) => { e.preventDefault(); startScrolling('left'); });

    /* --- DETENER SCROLL --- */
    window.addEventListener('mouseup', stopScrolling);
    window.addEventListener('touchend', stopScrolling);
    btnRight.addEventListener('mouseleave', stopScrolling);
    btnLeft.addEventListener('mouseleave', stopScrolling);

    const updateArrows = () => {
        const pos = carousel.scrollLeft;
        const max = carousel.scrollWidth - carousel.clientWidth;
        
        btnLeft.style.opacity = pos > 5 ? '1' : '0';
        btnLeft.style.visibility = pos > 5 ? 'visible' : 'hidden';
        
        btnRight.style.opacity = pos < (max - 5) ? '1' : '0';
        btnRight.style.visibility = pos < (max - 5) ? 'visible' : 'hidden';
    };

    carousel.addEventListener('scroll', updateArrows);
    updateArrows();
    window.addEventListener('resize', updateArrows);
});