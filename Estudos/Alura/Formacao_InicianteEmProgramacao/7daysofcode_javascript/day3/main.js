let frontOuBack = "";
let linguaguem = "";
let especializarOuFullStack = "";
let novaTecnologia = "";
let nomeNovaTecnologia = "";
let continuaOuNao = "";

function respostaInvalida() {
    alert("Resposta inválida! Tente novamente!");
}

function perguntarNovaTecnologia(){
    nomeNovaTecnologia = prompt("Qual a tecnologia?");
    continuaOuNao = prompt(nomeNovaTecnologia + " é outra muito boa! Tem mais alguma que gostaria de aprender? Responda 'ok' para informar ou responda 'fim' para finalizar.");
}

frontOuBack = parseInt(prompt("Você quer seguir para área de Front-End (digite 1) ou seguir para a área de Back-End (digite 2)? "));

if (frontOuBack == 1) {
    frontOuBack = "Front-End"
    linguaguem = parseInt(prompt("Quer aprender React (digite 1) ou aprender Vue (digite 2)?"));

    if (linguaguem == 1) {
        linguaguem = "React";
        alert(linguaguem + " é muito bacana! Ele é utilizado nos sites da Netflix :)");
    } else if (linguaguem == 2 ){
        linguaguem = "Vue";
        alert(linguaguem + " é um ótimo framework JavaScript open source");
    } else {
        respostaInvalida();
    }
} else if (frontOuBack == 2){
    frontOuBack = "Back-End"
    linguagem = parseInt(prompt("Quer aprender Java (digite 1) ou aprender C# (digite 2)?"));

    if (linguagem == 1) {
        linguagem = "Java";
        alert(linguagem + " é uma linguagem robusta e está presente em muitas aplicações!");
    } else if (linguagem == 2) {
        linguagem = "C#"
        alert(linguagem + " foi desenvolvido pela Microsoft e faz parte da plataforma .NET!");
    } else {
        respostaInvalida();
    }
} else {
    respostaInvalida();
}

especializarOuFullStack = parseInt(prompt("Você quer seguir se especializando em " + frontOuBack + " (digite 1) ou seguir se desenvolvendo para se tornar Fullstack (digite 2)?"));

if (especializarOuFullStack == 1) {
    especializarOuFullStack = frontOuBack;
    alert("Que legal! Continue estudando " + linguaguem + " que você vai conseguir!");
} else if (especializarOuFullStack == 2 ) {
    especializarOuFullStack = "FullStack";
    alert("A jornada FullStack é longa, mas é possível! Continue firme!");
} 

novaTecnologia = parseInt(prompt("Você gostaria de se especializar ou conhecer alguma tecnologia? Digite 1 para SIM ou 2 para NÃO."));

if (novaTecnologia == 1 ) {
    perguntarNovaTecnologia();

    while (continuaOuNao == "ok") {
        perguntarNovaTecnologia();
    } 
    if (continuaOuNao == "fim") { 
        alert("Siga em frente na sua jornada! Tenho certeza que você vai conseguir se dar bem com " + especializarOuFullStack + " e todas as outras tecnologias que quiser aprender!");
    }
}

else if (novaTecnologia == 2) {
    alert("Siga em frente na sua jornada! Tenho certeza que você vai conseguir se dar bem com " + especializarOuFullStack + " e todas as outras tecnologias que quiser aprender!");
}
