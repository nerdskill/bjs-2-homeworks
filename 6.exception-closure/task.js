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
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this._a = a;
        this._b = b;
        this._c = c;
    }

    get perimeter() {
        return this._a + this._b + this._c;
    }

    get area() {
        const p = this.perimeter / 2;
        const area = Math.sqrt(p * (p - this._a) * (p - this._b) * (p - this._c));
        return parseFloat(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        const triangle = new Triangle(a, b, c);

        // Используем Object.defineProperty, чтобы сделать свойства только для чтения
        Object.defineProperty(triangle, 'perimeter', {
            value: triangle.perimeter,
            writable: false
        });

        Object.defineProperty(triangle, 'area', {
            value: triangle.area,
            writable: false
        });

        return triangle;
    } catch (error) {
        return {
            area: 'Ошибка! Треугольник не существует',
            perimeter: 'Ошибка! Треугольник не существует'
        };
    }
}