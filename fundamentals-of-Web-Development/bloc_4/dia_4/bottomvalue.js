
function topvalue(teste) {

    let value = 0;
    let index;

    for ( let counter = 0; counter < teste.length; counter +=1) {
        if (value < teste[counter]){
            value = teste[counter];
            index = counter
        }
    }

    for ( let counter = 0; counter < teste.length; counter +=1) {
        if (value > teste[counter]){
            value = teste[counter];
            index = counter
        }
    }

    return index;
}
// let teste = [25, 5, 102, 1, 26, 27, 28, 100, -101];
// console.log(topvalue(teste));