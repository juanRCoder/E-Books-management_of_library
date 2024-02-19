import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Card.scss";

const Card = ({
  title,
  author,
  age,
  shelf,
  level,
  description,
  genres,
  cover,
  status,
}) => {
  const [turn, setTurn] = useState(false);

  const toggleTurn = () => {
    setTurn(!turn);
  };

  //Enviar al session stoage, la portada y el titulo
  sessionStorage.setItem("portada", cover);
  sessionStorage.setItem("title", title);

  //Almacenar como un objeto en con claves cover y title .
  // sessionStorage.setItem("portada", JSON.stringify({ cover }));
  // sessionStorage.setItem("title", JSON.stringify({ title }));

  return (
    <div className={`card ${turn ? "flipped" : ""}`} onClick={toggleTurn}>
      <div className="card_front">
        <img src={cover} alt="portada" title="portada" />
        <p className="card_front_title">{title}</p>
        {status === "prestado" ? (
          <p className="card_front_status">prestado</p>
        ) : null}
      </div>
      <div className="card_back">
        <p className="card_back_title">{title}</p>
        <p className="card_back_autor">
          Autor: <span>{author}</span>
        </p>
        <p className="card_back_autor">
          Año: <span>{age}</span>
        </p>
        <div className="card_back_shelfLevel">
          <p className="card_back_autor width">
            Estante: <span>{shelf}</span>
          </p>
          <p className="card_back_autor width level">
            Nivel: <span>{level}</span>
          </p>
        </div>
        <p className="card_back_option">Generos: </p>
        <div className="card_back_description">
          {genres.map((genre, j) => (
            <span key={j} className="card_back_genres">
              {genre}
              {j != genres.length - 1 && ", "}
            </span>
          ))}
        </div>
        <p className="card_back_option">Descripcion:</p>
        <p className="card_back_description">{description}</p>
        <div className="card_back_btns">
          <button
            type="button"
            className="button"
            style={{ backgroundColor: "#1f2542" }}
          >
            Leer
          </button>
          <button type="button" className="button">
            <Link to="/solicitud-prestamo-libro">Solicitud de prestamo</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
