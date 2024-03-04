import { BookEntity } from "../entities/book.entity";
import { BookRequestPayload } from "../request/book.req";
import { BookResponse } from "../response/book.response";

export default class BookMapper {
	public static requestToEntityMapper(requestPayload: BookRequestPayload) {
		
		let bookEntity = new BookEntity();
		bookEntity.author = requestPayload.authorName;
		bookEntity.purchasePrice = requestPayload.pp;
		bookEntity.sellingPrice = requestPayload.sp;
		bookEntity.title = requestPayload.bookName;
		return bookEntity;
	}

	public static entityToResponseMapper(entity: BookEntity): BookResponse {
		let bookResponse: BookResponse = {
			author: entity.author,
			sellingPrice: entity.sellingPrice,
			title: entity.title,
			id: entity.id,
		};
		return bookResponse;
	}
}
