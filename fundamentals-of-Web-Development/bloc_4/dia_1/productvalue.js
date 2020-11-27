let productSoldValue = 20;
let productCostValue = 10;

let productUnits = 1000;

// 20% tax on the cost of the product
let tax = 0;
let resultado = 0;

if (productCostValue > -1 && productSoldValue > -1 && tax > -1) {

    tax = 20 * 10 / 100;
    let profitByProduct = 0;
    profitByProduct = productSoldValue - productCostValue - tax; 
    resultado = profitByProduct * 1000;
    
} else {
    console.log('ERROR : não são permitidos valores negativos');
}


console.log(resultado);







