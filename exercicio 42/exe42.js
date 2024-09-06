function calcularMult(){
    let num1 = prompt("Digite o primeiro numero: ");
    let num2 = prompt("Digite o segundo numero: ");
    let num3 = prompt("Digite o terceiro numero: ");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    let soma = num1 * num2 * num3;
    alert("A soma dos numeros é: " + soma);
}