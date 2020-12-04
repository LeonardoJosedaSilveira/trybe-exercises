function sumValue(number) {
    let sum = 0;

    for ( let counter = 1; counter <= number; counter += 1){
        sum = sum + counter;
    }

    return sum;
}

// let number = 5;
console.log(sumValue(number))
