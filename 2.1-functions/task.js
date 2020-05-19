function getSolutions(a,b,c) {

    let D = (b**2) - (4*a*c);
    // let roots = [];
    let x1;
    let x2;

    if (D < 0) {
        return D;
    } else if (D === 0) {
        x1 = (-b + Math.sqrt(D)) / (2*a);
        // return [D, roots];
        return [D, x1];
    } else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2*a);
        x2 = (-b - Math.sqrt(D)) / (2*a);
        return [D, x1, x2];
    }

    // return x;
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a,b,c);
    let D = result.D;
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.x1}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.x1}, X₂ = ${result.x2}`);
    }
}

function getAverageScore(data) {
    const inputData = {
        subj: [algebra, geometry, russian, physics, music, english, poetry, chemistry, french],
        marks: [],
    };

    for (marks in inputData) {
        return [`algebra: ${average}, \n
        geometry: ${average}, \n
        russian: ${average}, \n
        physics: ${average}, \n
        music: ${average}, \n
        english: ${average}, \n
        poetry: ${average}, \n
        chemistry: ${average}, \n
        french: ${average}, \n
        average: ${average}`];
    }        
}

function getAverageMark(marks){

    let sum = 0;
    let average;
    for(subj in inputData) {
        if (inputData.marks.length === 0) {
         return 0;
            } else {
                 for (let i = 0; i < inputData.marks.length; i++) {
                sum += Number(inputData.marks[i]);
            }

         average = sum / inputData.marks.length;
    }
    // console.log({subj, marks});
    }
}