import { Request, Response, Router } from "express";
import BookService from "../services/book.service";
import { BookRequestPayload } from "../request/book.req";

const BookRouter = Router();

BookRouter.get("/find", async (req: Request, res: Response) => {
	res.json(await BookService.findAllBooks());
});
BookRouter.post("/add", async (req: Request, res: Response) => {
	res.json(await BookService.addBook(req.body as BookRequestPayload));
});

BookRouter.get("/find/:id", async (req: Request, res: Response) => {
	res.json(await BookService.findBookById(parseInt(req.params.id)));
});

BookRouter.delete("/delete/:id", async(req: Request, res: Response)=>{
	  res.json(await BookService.deleteBook(parseInt(req.params.id)))
})
BookRouter.put("/update/:id", async(req: Request, res: Response)=>{
	res.json(await BookService.updateBook(parseInt(req.params.id), req.body as	BookRequestPayload))
})

export default BookRouter;
