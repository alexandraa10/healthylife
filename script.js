

document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.btn-inicio'); // Selecciona todos los botones con la clase "btn-inicio"

    botones.forEach((boton) => {
        boton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Mueve la página al inicio
        });
    });
});


//Carrusel de testimonios

    // JavaScript
    document.addEventListener("DOMContentLoaded", function() {
        let currentIndex = 0;
        const items = document.querySelectorAll(".carrusel-item");
        const totalItems = items.length;

        // Función para cambiar el slide
        function cambiarSlide(n) {
            items[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + n + totalItems) % totalItems;
            items[currentIndex].classList.add("active");
        }

        // Eventos para los botones
        document.getElementById("prev").addEventListener("click", function() {
            cambiarSlide(-1);
        });
        
        document.getElementById("next").addEventListener("click", function() {
            cambiarSlide(1);
        });
    });
