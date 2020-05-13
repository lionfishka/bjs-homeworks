function getSolutions(a,b,c) {

    let D = (b**2) - (4*a*c);
    let roots;

    if (D < 0) {
        return `D: ${D}, roots: ${roots}`;
    } else if (D === 0) {
        x1 = (-b + Math.sqrt(D)) / (2*a);
        return `D: ${D}, roots: ${x1}`;
    } else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2*a);
        x2 = (-b - Math.sqrt(D)) / (2*a);
        return `D: ${D}, roots: ${x1}, ${x2}`;
    }

    return x;
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${D}`);
    if (result === []) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result === [x1]) {
        console.log(`Уравнение имеет один корень X₁ = ${x1}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${x1}, X₂ = ${x2}`);
    }
}

function getAverageScore(data) {
    let data = {
        subj: [algebra, geometry, russian, physics, music, english, poetry, chemistry, french],
        marks: [],
    };
}

function getAverageMark(marks){

    for(subj in data) {
        marks += getAverageMark(data[subj]);
    }

    console.log({subj, marks});
}
