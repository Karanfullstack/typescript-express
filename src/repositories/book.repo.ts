import { BookEntity } from "../entities/book.entity";

export default class BookRepo {
	public static data: BookEntity[] = [];

	public static findAll() {
		return this.data;
	}

	public static findById(id: number) {
		return this.data.filter((book) => book.id === id)[0];
	}

	public static deleteById(id: number) {
		return this.data.filter((book) => book.id !== id);
	}

	public static add(book: BookEntity) {
		this.data.push(book);
	}
	public static updateById(id: number, book: BookEntity) {
		// update book
		this.data = this.data.map((item) => {
			if (item.id === id) {
				return book;
			}
			return item;
		});
	}
}
