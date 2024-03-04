import { BookRequestPayload } from "./../request/book.req";
import { BookResponse } from "./../response/book.response";
import BookMapper from "../mappers/book.mapper";
import BookRepo from "../repositories/book.repo";
import { BookEntity } from "../entities/book.entity";

export default class BookService {
	public static async addBook(requestPayload: BookRequestPayload) {
		const data: BookEntity = await BookRepo.add(
			BookMapper.requestToEntityMapper(requestPayload)
		);
		return data;
	}

	// Delete Book
	public static async deleteBook(id: number) {
		let bookEntity = await BookRepo.deleteById(id);
		console.log(bookEntity);
		if (bookEntity.affected) {
			return "Book deleted successfully";
		}
		throw new Error("Book not found");
	}

	public static async findAllBooks() {
		let data: BookResponse[] = (await BookRepo.findAll()).map((book) => {
			return BookMapper.entityToResponseMapper(book);
		});
		return data;
	}

	public static async findBookById(id: number) {
		let bookEntity = await BookRepo.findById(id);
		if (bookEntity) {
			let data = BookMapper.entityToResponseMapper(bookEntity);
			return data;
		}
		return null;
	}

	public static async updateBook(
		id: number,
		requestPayload: BookRequestPayload
	) {
		const data = await BookRepo.updateById(
			id,
			BookMapper.requestToEntityMapper(requestPayload)
		);
		return data;
	}
}
