
function biggerName(names) {

    let index;

    for (let counter = 0; counter < names.length; counter += 1) {
        let name = names[counter].split('');
        if(name.length > names.length)
            index = names[counter];        
    }

    return index;
}

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(biggerName(names))