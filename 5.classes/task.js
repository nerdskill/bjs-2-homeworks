class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(key, value) {
		for (let book of this.books) {
			if (book[key] === value) {
				return book;
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				const book = this.books.splice(i, 1)[0];
				return book;
			}
		}
		return null;
	}
}

// Пример использования

const library = new Library("Библиотека имени Ленина");

library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
		2019,
		1008
	)
);
library.addBook(
	new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168)
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); // null
console.log(library.findBookBy("releaseDate", 1924).name); // "Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); // Количество книг до выдачи: 4
const givenBook = library.giveBookByName("Машина времени");
console.log("Выданная книга: ", givenBook);
console.log("Количество книг после выдачи: " + library.books.length); // Количество книг после выдачи: 3

givenBook.state = 10;
console.log("Состояние выданной книги после повреждения: ", givenBook.state);

givenBook.fix();
console.log("Состояние выданной книги после починки: ", givenBook.state);

library.addBook(givenBook);
console.log("Количество книг после возвращения: " + library.books.length); // Количество книг после возвращения: 4

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			console.log("Оценка должна быть не меньше 2 и не больше 5");
			return;
		}

		if (!this.marks[subject]) {
			this.marks[subject] = [];
		}

		this.marks[subject].push(mark);
	}

	getAverageBySubject(subject) {
		if (!this.marks[subject]) {
			console.log("Нет оценок по предмету " + subject);
			return 0;
		}

		const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
		return sum / this.marks[subject].length;
	}

	getAverage() {
		const subjects = Object.keys(this.marks);

		if (subjects.length === 0) {
			console.log("Студент не получил оценок");
			return 0;
		}

		const totalAverage = subjects.reduce((acc, subject) => {
			return acc + this.getAverageBySubject(subject);
		}, 0);

		return totalAverage / subjects.length;
	}
}

// Пример использования

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5

console.log("Средний балл по предмету физика: " + student.getAverageBySubject("физика"));
console.log("Средний балл по предмету биология: " + student.getAverageBySubject("биология"));
console.log("Общий средний балл по всем предметам: " + student.getAverage());