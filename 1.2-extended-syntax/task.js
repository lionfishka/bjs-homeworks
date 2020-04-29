function getResult(a,b,c){
    "use strict";
    let D = (b**2) - (4*a*c);
    let x = [];

    if (D > 0) {
        x[0] = (-b + Math.sqrt(D)) / (2*a);
        x[1] = (-b - Math.sqrt(D)) / (2*a);
    } else if (D === 0) {
        x[0] = (-b + Math.sqrt(D)) / (2*a);
    }

    return x;
}


function getAverageMark(marks){

    if (!marks.length) {
        return 0;
    } 

    if (marks.length > 5) {
        console.log('Количество оценок больше 5');
        marks = marks.slice(0,5);
    }
   
    let sum = 0;
    for (let i = 0; i <= marks.length; i++) {
        sum += marks[i];
    }
  
    let averageMark = sum / marks.length;
    return averageMark;
}


function askDrink(name,dateOfBirthday){
    if (new Date().getFullYear() - dateOfBirthday.getFullYear() >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else if (new Date().getFullYear() - dateOfBirthday.getFullYear() < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } 

return result;
}