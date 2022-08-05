var nome = prompt("Qual seu nome?");
var idade = prompt(nome + ", qual a sua idade?");
var linguagem = prompt(nome + ", qual linguagem de programação você está estudando?");

alert("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!");

var vocegosta = 0;

while (vocegosta != 1 || vocegosta != 2 ) {

    vocegosta = prompt("Você gosta de estudar " + linguagem + "?  Responda com o número 1 para SIM ou 2 para NÃO");

    if (vocegosta == 1) {
        alert("Muito bom! Continue estudando e você terá muito sucesso.");
        break;
    }
    
    if (vocegosta == 2){
        alert("Ahh que pena... Já tentou aprender outras linguagens?");
        break;
    }

    alert("Resposta inválida! Tente novamente");
}