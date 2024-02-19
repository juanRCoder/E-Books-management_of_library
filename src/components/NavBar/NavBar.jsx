import React from "react";
import "../../styles/NavBar.scss";
import BtnFilters from "./BtnFilters.jsx";
import BtnAddBook from "./BtnAddBook.jsx";
import BtnPrestados from "./BtnPrestados.jsx";
import Time from "./Time.jsx";
import Calendary from "../NavBar/Calendary.jsx";

function NavBar() {
  return (
    <aside className="boxMain">
      <div className="ContainerNavbar">
        <h1>E-Books</h1>
        <p>
          Desconecta para reconectar. Tu biblioteca online, el mundo de los
          libros a un solo click de distancia.
        </p>
        <BtnFilters />
        <BtnAddBook />
        <BtnPrestados />
        <Time />
        <Calendary />
      </div>
    </aside>
  );
}

export default NavBar;
