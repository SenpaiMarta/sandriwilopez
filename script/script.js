document.addEventListener('DOMContentLoaded', function() {
    var botonVolverArriba = document.getElementById('botonVolverArriba');

    // Mostrar u ocultar el botón según el scroll
    window.onscroll = function() {
        if (window.scrollY >= 900) {
            botonVolverArriba.style.display = 'block';
        } else {
            botonVolverArriba.style.display = 'none';
        }
    };

    // Animación para volver arriba
    botonVolverArriba.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
