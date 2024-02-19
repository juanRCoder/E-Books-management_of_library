import React from "react";
import { Link } from "react-router-dom";


function BtnAddBook() {
  return (
    <>
      <Link to="/agregar-libro" style={{textDecoration: "none"}}>
        <div className="OptionNavbar">Agregar</div>
      </Link>
    </>
  );
}

export default BtnAddBook;
