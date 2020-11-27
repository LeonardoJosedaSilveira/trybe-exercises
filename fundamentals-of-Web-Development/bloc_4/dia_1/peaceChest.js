// let rei = 'horizontal vertical ou diagonal uma casa';
// let rainha = 'horizontal vertical ou diagonal, toda linha';
// let torre = 'horizontal vertical, toda linha';
// let bispo = 'diagonal, toda linha';
// let cavalo = 'se move em L 3x2';
// let peao = 'horizontal vertical ou diagonal, so mata na diagonal';


let pecas = ['rei', 'rainha', 'torre', 'bispo', 'cavalo', 'peao'];

let movimentos = ['o rei se move na horizontal vertical ou diagonal uma casa', 'a rainha se move na horizontal vertical ou diagonal, toda linha', 'a torre se move nahorizontal vertical, toda linha', 'o bispo se move na diagonal, toda linha', 'o cavalo se move em L 3x2', 'o peao horizontal vertical ou diagonal, so mata na diagonal'];

let escolha = 'cAvalo';

escolha = escolha.toLocaleLowerCase();    

let resultado = 'vazio';


for (let counter = 0; counter < pecas.length; counter += 1){
    //console.log(pecas[counter]);
    if (pecas[counter] == escolha){
        resultado = movimentos[counter];
    } else if (counter == pecas.length - 1 && resultado == 'vazio'){
        resultado = 'peça invalida';

    }
}

console.log(resultado);

// console.log(pecas);

// console.log(movimentos)
