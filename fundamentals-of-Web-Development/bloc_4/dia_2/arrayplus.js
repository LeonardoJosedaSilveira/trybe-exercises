let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index++) {
    result = result + numbers[index];
}
let mid = result / numbers.length;


if (mid > 20) {
    console.log('Valor maior que 20 ' + mid);
} else {
    console.log('Valor menor ou igual a 20 ' + mid);
}
