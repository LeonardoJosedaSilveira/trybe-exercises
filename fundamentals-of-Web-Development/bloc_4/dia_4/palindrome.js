




function palindrome(nome){

    let result;
    let value = nome.split('');
    //console.log(value);
    
    
    if(value.length % 2 !== 0){
    
        let comparation = [];
    
        for (let counter = value.length - 1; counter > (value.length / 2); counter -= 1){
            comparation.push(value[counter]);
        }
        
        for (let counter = 0; counter < comparation.length; counter++) {
            if ( comparation[counter] === value[counter]){
                result = true;
            } else {
                result = false;
                break;
            }
        }
    
    } else {
        result = false;
    }
    
  
    return result;

}


console.log(palindrome('amama'))
