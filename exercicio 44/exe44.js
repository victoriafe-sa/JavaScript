function calcularSub(){
    let num1 = prompt("Digite o primeiro numero: ");
    let num2 = prompt("Digite o segundo numero: ");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let media = num1 - num2;
    alert("A subtração dos numeros é: " + media);
}