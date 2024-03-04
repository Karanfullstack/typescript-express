import { Router } from "express";
import BookRouter from "./book.route";

const RootRouter = Router();

// All Routes are defined here
RootRouter.use("/book", BookRouter);

export default RootRouter;
