let nota = 49;
let letras = ['F', 'E', 'D', 'C', 'B', 'A'];
let valores = [49, 50, 60, 70, 80, 90];
let resultado;

if(nota >= 0 && nota <= 100){
   for(let counter = 0; counter < letras.length; counter += 1){
        //console.log(letras[counter]);
          if(nota >= valores[counter]){
            resultado = letras[counter];
          } else {
            resultado = letras[counter];
            break;
          }
    }
} else {
    resultado = 'valor invalido digite um numero de 0 a 100';
}


console.log(resultado);