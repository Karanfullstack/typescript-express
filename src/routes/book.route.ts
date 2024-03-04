import { Request, Response, Router } from "express";
import BookService from "../services/book.service";
import { BookRequestPayload } from "../request/book.req";

const BookRouter = Router();

BookRouter.get("/find", (req: Request, res: Response) => {
	res.json(BookService.findAllBooks());
});
BookRouter.post("/add", (req: Request, res: Response) => {
	res.json(BookService.addBook(req.body as BookRequestPayload));
});

BookRouter.get("/find/:id", (req: Request, res: Response) => {
	res.json(BookService.findBookById(parseInt(req.params.id)));
});

export default BookRouter;
