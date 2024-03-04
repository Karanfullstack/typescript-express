import express from "express";
import RootRouter from "./routes/root.route";
import AppDataSource from "./db/db.config";
const app = express();

// Root Route
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", RootRouter);
AppDataSource.initialize()
	.then(() => {
		console.log("Database connected");
		app.listen(3000, () => console.log("Server is running on port 3000"));
	})
	.catch((err) => {
		console.log("Error in connecting to database", err);
	});
