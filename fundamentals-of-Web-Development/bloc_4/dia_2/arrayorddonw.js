let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersx =[]

for (let index = 0; index < numbers.length; index++) {
    
    if (index === numbers.length -1){
        numbersx.push(numbers[index] * 2);
    } else {
        numbersx.push(numbers[index] * numbers[index + 1]);
    }
    
}

console.log(numbersx)