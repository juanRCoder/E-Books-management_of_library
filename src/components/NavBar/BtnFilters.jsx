import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Options.scss";
import OptionsFilters from "./options/OptionsFilters.jsx";

function BtnFilters() {
  const [filter, setFilter] = useState(false);

  const toggleFilter = () => {
    setFilter(!filter);
  };

  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="OptionNavbar" onDoubleClick={toggleFilter}>
          Filtros
        </div>
      </Link>
      {filter && <OptionsFilters />}
    </>
  );
}

export default BtnFilters;
