

function wordEnd(word, end){
    let complet = word.split('');
    let final = end.split('');
    let counter1 = complet.length -1;
    let test = 0;

    for (let counter = final.length - 1;counter >= 0; counter -= 1){
        
        if(final[counter] === complet[counter1]){
            test += 1;    
        }
        counter1 -= 1;
    }

    if (test === final.length) {
        return true;
    } else {
        return false;
    }

}



console.log(wordEnd('trybe', 'be'));