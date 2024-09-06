function verificarIdade(){
    let num1 = prompt("Digite sua idade: ");

    num1 = parseInt(num1);

    if (num1>= 18) {
        alert("Você é maior de idade!");
    }else{
        alert("Você não é maior de idade!");
    }
}