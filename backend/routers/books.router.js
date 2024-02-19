import express from "express";
import { getBooks, postBook, postBorrowBook, getListBorrowedBooks } from "../controllers/books.controller.js";

const bookRouter = express.Router();

// Ruta para renderizar todos los libros de la base de datos.
bookRouter.get("/getBooks", getBooks);
bookRouter.post("/addBook", postBook);
bookRouter.post("/borrowBook", postBorrowBook);
bookRouter.get("/getListBorrrowedBooks", getListBorrowedBooks);

export default bookRouter;
