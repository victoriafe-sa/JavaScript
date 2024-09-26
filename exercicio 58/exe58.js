const button = document.querySelector('#mudarBotao');
const texto = document.querySelector('#mudarTexto');

button.addEventListener('click', mudarBotao);

function mudarBotao() {
    if (button.textContent = 'CLique aqui') {
        texto.textContent = 'Você clicou no botão!';
        button.textContent = 'Obrigado por Clicar';
    }
}