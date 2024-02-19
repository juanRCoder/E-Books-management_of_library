import React, { useState, useEffect, useContext } from "react";
import { BsEmojiFrown } from "react-icons/bs";
import Card from "./Card.jsx";
import { MiContexto } from "../../Context";
import axios from "axios";
import "../../styles/ContainerLibrary.scss";

function ContainerLibrary() {
  // Estado para almacenar los datos de la API
  const [books, setBooks] = useState([]);

  // Valor del value del input de búsqueda
  const {
    value,
    statusOption,
    genresOptions,
    ageOptions,
    levelOptions,
    shelfOptions,
  } = useContext(MiContexto);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/juanRCoder/dataJSON/main/books.json"
      )
      // .get("/getBooks")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const filtersBooks = books.filter((book) => {
    const { title, author, age, shelf, level, genres, status } = book;

    return (
      //filtros para el buscador
      (!value ||
        title.includes(value) ||
        author.includes(value) ||
        age.includes(value) ||
        shelf.includes(value) ||
        level.includes(value) ||
        genres.some((genre) => value.includes(genre))) &&
      //filtros para la opcion STATUS
      (!statusOption ||
        (statusOption === "disponible" && status === "disponible") ||
        (statusOption === "prestado" && status === "prestado")) &&
      //Filtros para la opcion GENEROS
      (!genresOptions.length ||
        genresOptions.every((selectedGenre) =>
          genres.includes(selectedGenre)
        )) &&
      //Filtros para la opcion AGE
      (!ageOptions.length ||
        ageOptions.every((selectedAge) => age.includes(selectedAge))) &&
      //Filtros para la opcion LEVEL
      (!levelOptions.length ||
        levelOptions.every((selectLevel) => level.includes(selectLevel))) &&
      //Filtros para la opcion ESTANTE
      (!shelfOptions.length ||
        shelfOptions.some((selectShelf) => shelf.includes(selectShelf)))
    );
  });

  return (
    <>
      <div className="Library">
        {books.length === 0 ? (
          <section className="boxLoader">
            <div className="loader">
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
            </div>
          </section>
        ) : (
          <>
            {filtersBooks.length === 0 ? (
              <div className="msgNotFindedBook">
                <p>No se encontraron libros que coincidan con los filtros.</p>
                <BsEmojiFrown className="emojiSad" />
              </div>
            ) : (
              filtersBooks.map((book, i) => {
                return (
                  <div key={i} className="BookContainer">
                    <Card
                      title={book.title}
                      author={book.author}
                      age={book.age}
                      shelf={book.shelf}
                      level={book.level}
                      description={book.description}
                      cover={book.cover}
                      genres={book.genres}
                      status={book.status}
                    />
                  </div>
                );
              })
            )}
          </>
        )}
      </div>
    </>
  );
}

export default ContainerLibrary;
