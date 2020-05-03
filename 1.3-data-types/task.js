function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";

    let numPercent = new Number(percent);
    let numContribution = new Number(contribution);
    let numAmount = new Number(amount);

    if (isNaN(numPercent)) {return `Параметр ${percent} содержит неправильное значение`;}
    if (isNaN(numContribution)) {return `Параметр ${contribution} содержит неправильное значение`;}
    if (isNaN(numAmount)) {return `Параметр ${amount} содержит неправильное значение`;}

    let s = numAmount - numContribution;
    let n = (date.getFullYear() - new Date().getFullYear()) * 12;
    let p = numPercent / 12;
    let monthlyPayment = s*(p+p/(((1+p)**n)-1));
    let totalAmount = parseInt((monthlyPayment * n).toFixed(2));

    return totalAmount;
}

function getGreeting(name) {

    if(!name) {
        name = "Аноним";
    }
    let greeting = `Привет, мир! Меня зовут ${name}`;

    return greeting;
}