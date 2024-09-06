function calcularSoma(){
    let num1 = prompt("Digite o primeiro numero: ");
    let num2 = prompt("Digite o segundo numero: ");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let soma = num1 + num2;
    alert("A soma dos numeros é: " + soma);
}