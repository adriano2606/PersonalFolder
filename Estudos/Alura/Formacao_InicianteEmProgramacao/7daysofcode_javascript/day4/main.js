let numero = Math.round(Math.random() * 100);
let tentativaMaxima = 3

console.log(numero);

for (let contador = 0; contador <= tentativaMaxima; contador++) {

        if (contador < tentativaMaxima){
            let chute = parseInt(prompt("Digite abaixo seu chute. (Restam " + (tentativaMaxima-contador + " tentativas)")));

            if (chute == numero) {
                alert("Parabéns! Você acertou o número da sorte " + numero);
                break;
            } else {
                alert("Aaaah... número errado!!");
            }
        }    
    if (contador == tentativaMaxima) {
        alert("Acabou suas chances. O número correto era " + numero);
    }
}