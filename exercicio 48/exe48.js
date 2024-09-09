function verificarNumero(){
    let num1 = prompt("Digite um numero: ");

    num1 = parseFloat(num1);

    if (num1%2 === 0) {
        alert(`O número ${num1} é par`);
    }else{
        alert(`O número ${num1} é impar`);
    }
}