function getSolutions(a,b,c) {

    let D = (b**2) - (4*a*c);
    let x1 = (-b + Math.sqrt(D)) / (2*a);
    let x2 = (-b - Math.sqrt(D)) / (2*a);

    if (D < 0) {
        return {
            "D": D,
            "roots": []
        }
    } else if (D === 0) {
        // x1 = (-b + Math.sqrt(D)) / (2*a);
        return {
            "D": D,
            "roots": [x1]
        }
    } else {
        // x1 = (-b + Math.sqrt(D)) / (2*a);
        // x2 = (-b - Math.sqrt(D)) / (2*a);
        return {
            "D": D,
            "roots": [x1, x2]
        }
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

function getAverageScore(data) {
    let averageScore = [];

    for(let prop in data) {
        data[prop] = getAverageMark(data[prop]);
        averageScore.push(data[prop]);
    }
    
    data['average'] = getAverageMark(averageScore);

    return data;
}

function getAverageMark(marks){
   
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
  
    let averageScore = sum / marks.length;
    
    return averageScore;
}