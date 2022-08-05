let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";
let listaCategoria = "";
let adicionarMais = "sim";
let achou = false;
let adicionarOuRemover = "";
let posicaoRemover = "";
let listaVazia = true;

while (adicionarMais != "não") {

    if (frutas.length == 0 && laticinios.length == 0 && doces.length == 0 && congelados.length == 0){
        adicionarMais = prompt("Sua lista de compras esta zerada! \n \nVocê deseja adicionar um item em sua lista de compras? digite 'sim' ou 'não'")
    } else if (frutas.length != 0 || laticinios.length != 0 || doces.length != 0 || congelados.length != 0){
        adicionarMais = prompt("Você deseja adicionar ou remover um item em sua lista de compras? digite 'sim' ou 'não'")
    }

    while (adicionarMais != "sim" && adicionarMais != "não"){
        alert("Não entendi... digite novamente");
        if (frutas.length == 0 && laticinios.length == 0 && doces.length == 0 && congelados.length == 0){
            adicionarMais = prompt("Você deseja adicionar um item em sua lista de compras? digite 'sim' ou 'não'")
        } else if (frutas.length != 0 || laticinios.length != 0 || doces.length != 0 || congelados.length != 0){
            adicionarMais = prompt("Você deseja adicionar ou remover um item em sua lista de compras? digite 'sim' ou 'não'")
        }
    }

    if (adicionarMais == "não"){
        break;
    }

    if (frutas.length != 0 || laticinios.length != 0 || doces.length != 0 || congelados.length != 0){
        adicionarOuRemover = prompt("Deseja ADICIONAR ou REMOVER?");

        while (adicionarOuRemover != "adicionar" && adicionarOuRemover != "remover"){
            alert("Não entendi... digite novamente");
            adicionarOuRemover = prompt("Deseja ADICIONAR ou REMOVER?");
        }
    }

    if (adicionarOuRemover != "remover"){
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
        alert("Item adicionado com sucesso!!");
        }
        console.log(listaCategoria);

    }

    if (adicionarOuRemover == "remover") {

        while (listaVazia == true) {

            categoria = prompt("=== Lista de compras ===\n Frutas: " + frutas + "\n Laticínios: " + laticinios + "\n Doces: " + doces + "\n Congelados: " + congelados +"\n \n Você deseja remover o item de qual lista?");
            while (categoria != "frutas" && categoria != "laticinios" && categoria != "doces" && categoria != "congelados") {
                alert("Lista inválida... tente novamente");
                categoria = prompt("=== Lista de compras ===\n Frutas: " + frutas + "\n Laticínios: " + laticinios + "\n Doces: " + doces + "\n Congelados: " + congelados +"\n \n Você deseja remover o item de qual lista?");
            }

            if (categoria == "frutas"){
                categoria = frutas;
            } else if (categoria == "laticinios") {
                categoria = laticinios;
            } else if (categoria == "doces") {
                categoria = doces; 
            } else if (categoria == "congelados") {
                categoria = congelados;
            }

            if (categoria.length <= 0) {
                alert("A lista escolhida não possui itens para exclusão. Tente outra.");
                listaVazia = true;
            } else {
                listaVazia = false;
            }
        }

        while (achou == false){

            comida = prompt("=== Lista de compras ===\n Frutas: " + frutas + "\n Laticínios: " + laticinios + "\n Doces: " + doces + "\n Congelados: " + congelados +"\n \n Qual nome do ITEM que deseja remover?");
            for (let i = 0; i < categoria.length; i++) {
                posicaoRemover = categoria.indexOf(comida);

                if (posicaoRemover != -1) {
                    categoria.splice(posicaoRemover,1);
                    alert("Item removido!!");
                    achou = true;
                    console.log(categoria); 
                } else if (posicaoRemover == -1) {
                    alert("Item não localizado!! tente novamente"); 
                }
            }
        }
    }
    comida = "";
    categoria = "";
    listaCategoria = "";
    adicionarMais = "sim";
    achou = false;
    adicionarOuRemover = "";
    posicaoRemover = "";
    listaVazia = true;
}

// alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
alert("=== Lista de compras ===\n Frutas: " + frutas + "\n Laticínios: " + laticinios + "\n Doces: " + doces + "\n Congelados: " + congelados);