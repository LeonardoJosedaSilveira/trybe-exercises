let nota = 49;

// score less than 50 receives F
let letras = ['E', 'D', 'C', 'B', 'A'];
let valores = [50, 60, 70, 80, 90];


let resultado;

if(nota >= 0 && nota <= 100){
   for(let counter = 0; counter < letras.length; counter += 1){
          if(nota >= valores[counter]){
            console.log(resultado);
            resultado = letras[counter];
          } else {
            resultado = 'F';
          }
    }
} else {
    resultado = 'valor invalido digite um numero de 0 a 100';
}


console.log(resultado);