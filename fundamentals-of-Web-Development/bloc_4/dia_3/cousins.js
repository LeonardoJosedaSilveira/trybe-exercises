let number = 37;
let test = 0;


for (let index = 0; index <= number; index += 1) {
    if(number % index === 0){
        test += 1;   
    }
         
}

if (test === 2){
    console.log('numero ', number,' é primo');
} else {
    console.log('numero ', number,' nao é primo');
}
