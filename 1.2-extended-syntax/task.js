function getResult(a,b,c){
    "use strict";
    let D = (b**2) - (4*a*c);
    let x = [];

    if (D > 0) {
        x = [];
        x[0] = (-b + Math.sqrt(D)) / (2*a);
        x[1] = (-b - Math.sqrt(D)) / (2*a);
    } else if (D === 0) {
        x = [];
        x[0] = (-b + Math.sqrt(D)) / (2*a);
    } else if (D < 0) {
        x = [];
    }

    return x;
}


function getAverageMark(marks){
    let sum = 0;
    let averageMark = 0;

    for (let i = 0; i <= marks.length; i++) {
        sum += marks[i];
        averageMark = sum / marks.length;

        if (!marks.length) {
            return 0;
        } else if (marks.length > 5) {
            console.log("Количество оценок больше 5");
            marks = marks.slice(0,5);
            sum += marks;
            averageMark = sum / 5;
        }
    }

    return averageMark;
}


function askDrink(name,dateOfBirthday){
    let year = new Date().getFullYear();
    let age = year - dateOfBirthday.getFullYear();
    if (age >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else if (age < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } 

return result;
}