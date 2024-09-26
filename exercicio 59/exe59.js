function alterarFundo() {
    const div = document.querySelector('#div');

    if(div.style.backgroundColor === 'blue') {
        div.style.backgroundColor = 'white';
        div.textContent = 'Alterado para branco';
        div.style.color = 'black';
    } else {
        
        div.style.backgroundColor = 'blue';
        div.textContent = 'Alterado para azul';
        div.style.color = 'white';
    }
}
document.querySelector('#alterarFundo').onclick = alterarFundo