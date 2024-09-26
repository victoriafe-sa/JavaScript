const button = document.querySelector('#toggleButton');
const texto = document.querySelector('#texto');

button.addEventListener('click', toggleTexto);

function toggleTexto() {
    if (texto.style.display === 'none') {
        texto.style.display = 'block';
        button.textContent = 'Ocultar Texto';
    } else {
        texto.style.display = 'none';
        button.textContent = 'Mostrar Texto';
    }
}

