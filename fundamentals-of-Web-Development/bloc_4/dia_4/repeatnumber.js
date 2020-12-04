function repeatNuber(numbers) {

    let number = 0;
    let index = 0;
    
    for (const key in numbers) {
        let index1 = 0;
    
        for (const key1 in numbers) {
        
            if (numbers[key] === numbers[key1]) {
            index1 += 1;
            }
        }
    
        if( index1 > index){
            index = index1;
            number = numbers[key];       
        }
    
    }
    
     return number;

}

// let numbers = [2, 3, 2, 5, 8, 2, 3];

console.log(repeatNuber(numbers))