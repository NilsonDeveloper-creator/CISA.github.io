// script.js
let currentIndex = 0;
const images = document.querySelectorAll('#carrusel img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((image) => {
        image.style.display = 'none';
    });

    images[index].style.display = 'block';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

// Cambia la imagen cada 3 segundos (3000 milisegundos)
setInterval(nextImage, 3000);

// Mostrar la primera imagen al cargar la página
showImage(currentIndex);
