import { BookRequestPayload } from "./../request/book.req";
import { BookResponse } from "./../response/book.response";
import BookMapper from "../mappers/book.mapper";
import BookRepo from "../repositories/book.repo";

export default class BookService {
	public static addBook(requestPayload: BookRequestPayload) {
		BookRepo.add(BookMapper.requestToEntityMapper(requestPayload));
		return "success";
	}

	// Delete Book
	public static deleteBook(id: number) {
		BookRepo.deleteById(id);
		return "success";
	}

	public static findAllBooks(): BookResponse[] {
		let data: BookResponse[] = BookRepo.findAll().map((book) => {
			return BookMapper.entityToResponseMapper(book);
		});
		return data;
	}

	public static findBookById(id: number) {
		let data = BookMapper.entityToResponseMapper(BookRepo.findById(id));
		return data;
	}

	public static updateBook(id: number, requestPayload: BookRequestPayload) {
		BookRepo.updateById(id, BookMapper.requestToEntityMapper(requestPayload));
		return "success";
	}
}
