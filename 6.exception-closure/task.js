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