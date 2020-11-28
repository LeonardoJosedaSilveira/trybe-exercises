let n = 15;
let counter = n;
let art = [''];
let space = '';
let art1 = '';
let art2 = '';
let art3 = '';
let counter1 = 0;

for (let index = 0; index < n + 4; index++) {
    art2 += '*';
}


if (n >= 5){
    counter1 += 1;
    for (let index = 5; index < n; index += 1) {
        if (index % 2 !== 0){
            counter1 += 1;
        }
    }
        
}

for (let index = counter1; index < n; index += 1) {
    art3 += ' ';
}

for (let index = 0; index < counter; index += 1) {
    space += ' '
    art[index] = space;

    if (index % 2 == 0) {
        art[index] = space;       
    }
    
}
console.log(art3 + '*')
for (let index = 0; index < n; index += 1) {
    counter -= 1;
    art1 += ' ';
    
    if (index % 2 == 0) {
        console.log(art[(counter / 2)]+ '*'+ art1 + '*');
       
        
    }
    
}

console.log(art2)
