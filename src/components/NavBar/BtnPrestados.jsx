import React from "react";
import { Link } from "react-router-dom";

function BtnPrestados() {
  return (
    <>
      <Link to="/lista-libros-prestados" style={{ textDecoration: "none" }}>
        <div className="OptionNavbar">Prestados</div>
      </Link>
    </>
  );
}

export default BtnPrestados;
