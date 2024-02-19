import Books from "../../databases/schemas/books.schema.js";
import BorrowedBooks from "../../databases/schemas/borrowedBooks.schema.js";

export const getBooks = async (req, res) => {
  try {
    //Enviar toda la coleccion de libros al frontend.
    const allBooks = await Books.find({});
    res.json(allBooks);
  } catch (e) {
    console.log("Error en el historial: " + e.message);
  }
};

export const postBook = async (req, res) => {
  try {
    const { title, author, age, shelf, level, description, genres, cover } =
      req.body;

    //verifica si los datos que realmente importar para una busqueda de libros.
    if (!title || !author || !age || !genres) {
      return res.status(400).json({ error: "Datos Incompletos" });
    }

    const newBook = new Books({
      title,
      author,
      age,
      shelf,
      level,
      description,
      genres,
      cover,
    });

    await newBook.save();

    res.status(201).json({ message: "Libro Agregado" });
  } catch (e) {
    console.error("Error en agregar un nuevo libro:");
    res.status(500).json({ e: "Error al agregar" });
  }
};

export const postBorrowBook = async (req, res) => {
  try {
    const {
      fullName,
      fullLastName,
      dni,
      phoneNumber,
      tmStart,
      tmEnd,
      address,
      district,
      title,
      cover,
    } = req.body;

    const numericDni = parseInt(dni, 10);
    const numericPhoneNumber = parseInt(phoneNumber, 10);

    if (
      !fullName ||
      !fullLastName ||
      isNaN(numericDni) ||
      isNaN(numericPhoneNumber) ||
      !tmStart ||
      !tmEnd ||
      !address ||
      !district
    ) {
      return res.status(400).json({ error: "Datos Incompletos" });
    }

    // Busca el titulo del libro.
    const findedBook = await Books.findOne({ title });
    if (!findedBook) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }
    findedBook.status = "prestado";
    await findedBook.save();

    const newBorrowedBook = new BorrowedBooks({
      fullName,
      fullLastName,
      dni: numericDni,
      phoneNumber: numericPhoneNumber,
      tmStart,
      tmEnd,
      address,
      district,
      title,
      cover,
    });

    await newBorrowedBook.save();

    res.status(201).json({ message: "Libro Prestado" });
  } catch (e) {
    console.error("Error en agregar un nuevo libro prestado:" + e);
    res.status(500).json({ e: "Error al prestar un nuevo libro" });
  }
};


export const getListBorrowedBooks = async (req, res) => {
  try {
    //Enviar toda la coleccion de libros prestados al frontend
    const allListBorrowedBooks = await BorrowedBooks.find({});
    res.json(allListBorrowedBooks);
  } catch (e) {
    console.log("Error en el historial: " + e.message);
  }
};
