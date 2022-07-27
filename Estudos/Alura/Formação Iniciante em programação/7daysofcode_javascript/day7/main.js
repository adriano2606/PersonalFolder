let continua = true;
let numero1 = "";
let numero2 = "";
let resultado = "";

function soma(x,y){
    resultado = x+y;
}
function substrair(x,y){
    resultado = x-y;
}
function multiplicar(x,y){
    resultado = x*y;
}
function dividir(x,y){
    resultado = x/y;
}

while (continua == true) {
    let operacao = prompt("O que deseja fazer? \n\nSomar\nSubtrair\nMultiplicar\nDividir\n\n-- Digite 'sair' para fechar o programa");

    while (operacao != "somar" && operacao != "subtrair" && operacao != "multiplicar" && operacao != "dividir" && operacao != "sair") {
        alert("Operação inválida! Tente novamente.");
        operacao = prompt("O que deseja fazer? \n\nsomar\nsubtrair\nmultiplicar\ndividir\n\n-- Digite 'sair' para fechar o programa");
    }

    if (operacao == "sair"){
        continua = false;
        break;
    } else {
        numero1 = parseFloat(prompt("Digite o primeiro número"));
        numero2 = parseFloat(prompt("Digite o segundo número"));
    }

    if (operacao == "somar") {
        soma(numero1,numero2);
    } else if (operacao == "subtrair") {
        substrair(numero1,numero2);
    } else if (operacao == "multiplicar") {
        multiplicar(numero1,numero2);
    } else if (operacao == "dividir") {
        dividir(numero1,numero2);
    }

    alert("O resultado da sua operação de " + operacao + " é: " + resultado);
}