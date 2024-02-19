import { useState, useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { MiContexto } from "../../Context.jsx";
import "../../styles/ContainerLibrary.scss";

function SearchInput() {
  const [clave, setClave] = useState("");

  const { setValue } = useContext(MiContexto);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(clave);
  };
  return (
    <>
      <div className="boxInputSearch">
        <form className="search" onSubmit={handleSubmit}>
          <input
            className="inputSeach"
            placeholder="Título, autor y género del libro..."
            type="search"
            onChange={(e) => setClave(e.target.value)}
          />
          <button className="btnSubmit" type="submit" title="Buscar">
            <IoSearch className="IoSearch" />
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchInput;
