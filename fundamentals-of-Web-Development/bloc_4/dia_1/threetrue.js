let number = [11, 15, 26];
let result = false;

for (let counter = 0; counter <= 2; counter += 1){
    if (number[counter] % 2 == 0)
        result = true;
}

console.log(result);