function verificarNumero(){
    let num1 = prompt("Digite um numero: ");

    num1 = parseInt(num1);

    if (num1>0) {
        alert(`O número ${num1} é positivo`);
    }else if (num1<0) {
        alert(`O número ${num1} é negativo`);
    }else{
        alert(`O número ${num1} é nulo`);
    }
}