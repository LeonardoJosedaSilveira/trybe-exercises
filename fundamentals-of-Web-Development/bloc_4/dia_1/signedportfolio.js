let grossSalary = 0;
let netSalary = 0;
let inss = 0;
let ir = 0;

grossSalary = 3000;

//inss calc
if (grossSalary <= 1556.94 ) {
    inss = grossSalary * 8 / 100;   
} else if(grossSalary >= 1556.95 && grossSalary <= 2594.92) {    
    inss = grossSalary * 9 / 100;    
} else if(grossSalary >= 2594.93 && grossSalary <= 5189.82){
    inss = grossSalary * 11 / 100;    
} else {
    inss = 570.88;
}

grossSalary = grossSalary - inss;

//it calc
if (grossSalary <= 1904.13) {
    ir = 0;   
} else if(grossSalary >= 1904.14 && grossSalary <= 2826.65) {  
    ir = grossSalary * 7.5 / 100;  
    ir = ir - 142.80;   
} else if(grossSalary >= 2826.66 && grossSalary <= 3751.05){
    ir = grossSalary * 15 / 100;  
    ir = ir - 354.80;
} else if(grossSalary >= 3751.06 && grossSalary <= 4664.68){
    ir = grossSalary * 22.5 / 100;  
    ir = ir - 636.13;    
} else {
    ir = grossSalary * 27,5 / 100;  
    ir = ir - 869.36;
}

netSalary = grossSalary - ir;
console.log(netSalary);
