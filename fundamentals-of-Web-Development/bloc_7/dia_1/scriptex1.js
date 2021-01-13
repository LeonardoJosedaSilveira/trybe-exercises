
let testingScope = (escopo) => {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    if (escopo === true) {       
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
        } else {      
        console.log(elseScope);
        }
        console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
    }

testingScope(true)
// function testingScope(escopo) { 
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';

//     if (escopo === true) {       
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {      
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);