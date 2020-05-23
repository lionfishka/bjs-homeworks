//Задача №1. Форматтер чисел

function parseCount(value) {
    const newValue = Number.parseInt(value);
    if (newValue == NaN) {
        const parseCountError = new Error("Невалидное значение");
        throw parseCountError;
    } else {
        return newValue;
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(e) {
        return e;
    }
}

//Задача №2. Треугольник

class Triangle {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // (сумма двух сторон меньше третьей) 
    validateTriangle() {
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            const triangleError = new Error("Треугольник с такими сторонами не существует");
            throw triangleError;
         }
    }

    getPerimeter() {
        perimeter = a + b + c;
        return perimeter;
    }

    getArea() {
        let p = perimeter / 2;
        area = Math.sqrt(p * (p - a) * (p - b) * (p - c))
        return area.toFixed(3);
    }
}

function getTriange(a,b,c) {
    try {
        return new Triangle(a,b,c);
    } catch(e) {
        return {
            getArea: () => "Ошибка! Неправильный треугольник",
            getPerimeter: () => "Ошибка! Неправильный треугольник"
        }
    }
}