// script.js

const fairy = document.querySelector('.fairy');

// Función para mover el hada aleatoriamente
function moveFairyRandomly() {
    const maxX = window.innerWidth - fairy.width;
    const maxY = window.innerHeight - fairy.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    fairy.style.left = randomX + 'px';
    fairy.style.top = randomY + 'px';
}

// Mueve el hada cada cierto tiempo (por ejemplo, cada 3 segundos)
setInterval(moveFairyRandomly, 3000);

