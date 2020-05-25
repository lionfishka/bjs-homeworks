//Задача №1. Форматтер чисел

function parseCount(value) {
    const newValue = Number.parseInt(value);
    if (Number.isNaN(newValue)) {
        throw new Error("Невалидное значение");
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
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error("Треугольник с такими сторонами не существует");
         }
    }

    // (сумма двух сторон меньше третьей) 
    // validateTriangle() {
    //     if ((a + b) < c || (a + c) < b || (b + c) < a) {
    //         throw new Error("Треугольник с такими сторонами не существует");
    //      }
    // }

    getPerimeter() {
        return (this.a + this.b + this.c);
    }

    getArea() {
        let perimeter = this.a + this.b + this.c;
        let p = perimeter / 2;
        let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
        return Number(area.toFixed(3));
    }
}

function getTriangle(a,b,c) {
    try {
        return new Triangle(a,b,c);
    } catch(e) {
        return {
            getArea: () => "Ошибка! Неправильный треугольник",
            getPerimeter: () => "Ошибка! Неправильный треугольник"
        }
    }
}