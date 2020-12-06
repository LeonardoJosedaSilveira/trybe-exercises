function romanNumbers(number) {


    let decimalHouse = number.split('');
    let previousValue = '';

    let result = 0;

    for (let counter1 = decimalHouse.length - 1; counter1 >= 0; counter1 -= 1){

        if (decimalHouse[counter1] === 'I' && previousValue === 'V'  ) {

            result -= 1;
        
        } else if (decimalHouse[counter1] === 'I') {

            result += 1;
        
        } else if (decimalHouse[counter1] === 'V'){

            result += 5;
            previousValue = decimalHouse[counter1];
            
        } else if (decimalHouse[counter1] === 'X' && previousValue === 'L'  ) {

            result -= 10;
        
        } else if (decimalHouse[counter1] === 'X') {

            result += 10;
        
        } else if (decimalHouse[counter1] === 'L'){

            result += 50;
            previousValue = decimalHouse[counter1];
            
        } else if (decimalHouse[counter1] === 'C' && previousValue === 'D'  ) {

            result -= 100;
        
        } else if (decimalHouse[counter1] === 'C') {

            result += 100;
        
        } else if (decimalHouse[counter1] === 'D'){

            result += 500;
            previousValue = decimalHouse[counter1];
            
        } else if (decimalHouse[counter1] === 'M'){

            result += 1000;
            previousValue = decimalHouse[counter1];
        }
        
        
    }

    return result;

}

//teste
console.log(romanNumbers('MMMDCCLXXVIII'));




