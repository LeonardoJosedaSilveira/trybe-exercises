// const fatctor = (num) => {
//     for (let index = num - 1; index > 0; index -= 1) {
//         num = num * index;        
//     }
//     return num
// }

// console.log(fatctor(5))

// ----------------------------exercicio 2 parte II


const names = (pharses) => {
    const words = pharses.split(' ');
    let choice = '';

        for (let index = 0; index < words.length; index += 1) {
            if (choice.length < words[index].length)
                choice = words[index];   
        }

    return choice

}




console.log(names('a ss dd lllll'))
