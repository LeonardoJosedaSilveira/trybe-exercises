
function topvalue(teste) {

    let topvalue = 0;
    let index;

    for ( let counter = 0; counter < teste.length; counter +=1) {
        if (topvalue < teste[counter]){
            topvalue = teste[counter];
            index = counter
        }
    }

    return index;
}
// let teste = [25, 5, 102, 1, 26, 27, 28, 100, 101];
// console.log(topvalue(teste));


