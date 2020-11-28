
let n = 17;
let counter = n;
let art = ['',];
let space = '';
let art1 = '';


for (let index = 1; index < counter; index++) {
    space += ' '
    art[index] = space;

    if (index % 2 == 0) {
        art[index] = space;       
    }
    
}

for (let index = 0; index < n; index++) {
    counter -= 1;
    art1 += '*';
    if (index % 2 == 0) {
        console.log(art[(counter / 2)] + art1);
       
    }
    
}

