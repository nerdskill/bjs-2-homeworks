function parseCount(value) {
	const parsedValue = Number.parseFloat(value);

	if (isNaN(parsedValue)) {
		throw new Error("Невалидное значение");
	}

	return parsedValue;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

class Triangle {
    constructor(a, b, c) {
        if (!this.isValidTriangle(a, b, c)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
        Object.freeze(this); // Замораживаем объект, чтобы нельзя было изменять его свойства
    }

    isValidTriangle(a, b, c) {
        return a + b > c && b + c > a && a + c > b;
    }

    get perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    get area() {
        const p = this.perimeter / 2;
        const area = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
        return parseFloat(area.toFixed(3)); // Округляем до трёх знаков после запятой
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            area: 'Ошибка! Треугольник не существует',
            perimeter: 'Ошибка! Треугольник не существует'
        };
    }
}