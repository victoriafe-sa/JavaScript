function adicionarClasse() {
    const caixa = document.querySelector('#caixa');
    
    caixa.classList.add('caixa-ativa');
}
document.querySelector('#adicionarClasse').onclick = adicionarClasse;