let slideIndex = 0; // Variable que lleva el seguimiento del índice de la diapositiva actual

// Función para mostrar las diapositivas
function showSlides() {
  const slides = document.querySelectorAll('.carousel-content img'); // Selecciona todas las imágenes dentro del carrusel

  // Itera sobre todas las imágenes y elimina la clase 'active' para ocultarlas
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slideIndex++; // Incrementa el índice de la diapositiva

  // Si el índice de la diapositiva supera la cantidad de diapositivas, vuelve al principio
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Añade la clase 'active' a la imagen correspondiente al índice actual, para mostrarla
  slides[slideIndex - 1].classList.add('active');

  // Establece un temporizador para llamar a la función showSlides() cada 2000 milisegundos (2 segundos)
  setTimeout(showSlides, 2000);
}

// Inicia la función showSlides() para iniciar el carrusel automáticamente
showSlides();
