function calcularMed(){
    let num1 = prompt("Digite o primeiro numero: ");
    let num2 = prompt("Digite o segundo numero: ");
    let num3 = prompt("Digite o terceiro numero: ");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    let media = (num1 + num2 + num3)/3;
    alert("A media dos numeros é: " + media);
}