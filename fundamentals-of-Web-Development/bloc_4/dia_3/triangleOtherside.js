let n = 5;
let counter = n;
let art = [];
let space = '';
let art1 = '';


for (let index = 0; index < n; index++) {
    space += ' '
    art[index] = space;
}

for (let index = 0; index < n; index++) {
    counter -= 1;
    art1 += '*';
    console.log(art[counter] + art1);
    
    
}



