let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";
let listaCategoria = "";
let adicionarMais = "sim";
let achou = false;


while (adicionarMais != "não") {

    adicionarMais = prompt("Você deseja adicionar um item em sua lista de compras? digite 'sim' ou 'não'");

    while (adicionarMais != "sim" && adicionarMais != "não"){
        alert("Não entendi... digite novamente");
        adicionarMais = prompt("Você deseja adicionar um item em sua lista de compras? digite 'sim' ou 'não'");
    }

    if (adicionarMais == "não"){
        break;
    }

    comida = prompt("Digite o nome do alimento:");
    categoria = prompt("Em qual categoria esse alimento se encaixa? 'frutas', 'laticinios', 'doces' ou 'congelados'");

    while (categoria != "frutas" && categoria != "laticinios" && categoria != "doces" && categoria != "congelados") {
        alert("Categoria inválida... Digite novamente!");
        categoria = prompt("Em qual categoria esse alimento se encaixa? 'frutas', 'laticinios', 'doces' ou 'congelados'");
    }

    if (categoria == "frutas"){
        listaCategoria = frutas;
    } else if (categoria == "laticinios") {
        listaCategoria = laticinios;
    } else if (categoria == "doces") {
        listaCategoria == doces; 
    } else if (categoria == "congelados") {
        listaCategoria == congelados;
    }

    for (let i = 0; i < listaCategoria.length; i++){
        if (comida == listaCategoria[i]){
            alert("Ops... Tente novamente!! \n" + comida + " já foi adicionado(a) na lista de " + categoria + ".");
            achou = true;
            break;
        }
    }

    if (achou == false) {
        
        if (categoria == "frutas"){
            frutas.push(comida);
        } else if (categoria == "laticinios") {
            laticinios.push(comida);
        } else if (categoria == "doces") {
            doces.push(comida);
        } else if (categoria == "congelados") {
            congelados.push(comida);
        } 
    }
}

// alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
alert("=== Lista de compras ===\n Frutas: " + frutas + "\n Laticínios: " + laticinios + "\n Doces: " + doces + "\n Congelados: " + congelados);