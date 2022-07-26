var read = require('readline-sync')

var annualIncome = read.question('Enter the Annual Income: ')
var IncomeTaxAmount;
var TaxPercentage;


function findIncomeTax(IncomeTaxAmount,TaxPercentage){
    amount = IncomeTaxAmount*TaxPercentage/100
    return amount
}


if(annualIncome<=250000){
    console.log("No Tax");
}else if(annualIncome>250000 && annualIncome<=500000){
    TaxPercentage=5
    IncomeTaxAmount = findIncomeTax(annualIncome,TaxPercentage)
}else if(annualIncome>500000 && annualIncome<=1000000){
    TaxPercentage=20
    IncomeTaxAmount = findIncomeTax(annualIncome,TaxPercentage)
}else if(annualIncome>1000000 && annualIncome<=5000000){
    TaxPercentage=30
    IncomeTaxAmount = findIncomeTax(annualIncome,TaxPercentage)
}



console.log("Income tax amount: "+IncomeTaxAmount)