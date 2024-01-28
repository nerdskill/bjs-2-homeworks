// Функция parseCount для парсинга значения
function parseCount(value) {
	const parsedValue = Number.parseFloat(value);
	if (isNaN(parsedValue)) {
		throw new Error("Невалидное значение");
	}
	return parsedValue;
}

// Функция validateCount для валидации значения
function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

// Пример использования
const input1 = "123";
const input2 = "abc";

console.log(validateCount(input1)); // Вывод: 123
console.log(validateCount(input2)); // Вывод: Error: Невалидное значение

class Triangle {
	constructor(a, b, c) {
		if (a + b <= c || a + c <= b || b + c <= a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}

		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const s = this.perimeter / 2;
		const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
		return +area.toFixed(3); // Округление до трёх знаков после запятой
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			perimeter: () => "Ошибка! Треугольник не существует",
			area: () => "Ошибка! Треугольник не существует",
		};
	}
}

// Пример использования
const triangle1 = getTriangle(3, 4, 5);
console.log(triangle1.perimeter()); // Вывод: 12
console.log(triangle1.area()); // Вывод: 6

const triangle2 = getTriangle(1, 1, 3);
console.log(triangle2.perimeter()); // Вывод: "Ошибка! Треугольник не существует"
console.log(triangle2.area()); // Вывод: "Ошибка! Треугольник не существует"