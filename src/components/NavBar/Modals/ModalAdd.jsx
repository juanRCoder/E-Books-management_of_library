import AddImage from "../AddImage.jsx";
import { MdClose } from "react-icons/md";
import axios from "axios";
import "../../../styles/ModalAdd.scss";
import { useState } from "react";

function ModalAdd() {
  const [genre, setGenre] = useState("");
  const [genresList, setGenresList] = useState([]);
  const [msg, setMsg] = useState("");
  const [msgError, setMsgError] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const [colorError, setColorError] = useState(false);

  //Formulario para enviar al backend
  const [data, setData] = useState({
    title: "",
    author: "",
    age: "",
    shelf: "",
    level: "",
    description: "",
    genres: [],
    cover: "",
  });

  const handleClickGenre = () => {
    // verifica que no haya cadenas vacías, lo agrega a la lista y limpia el input
    if (genre.trim() !== "") {
      setGenresList([...genresList, genre]);
      setGenre("");

      setData((prev) => ({ ...prev, genres: [...genresList, genre] }));
    }
  };
  const deleteGenre = (genreRemove) => {
    const updatedGenresList = genresList.filter(
      (genre) => genre !== genreRemove
    );
    setGenresList(updatedGenresList);
  };
  const handleNewImage = (urlImage) => {
    setData((prev) => ({ ...prev, cover: urlImage }));
  };
  //manejador de los valores en cada input.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleAddBook = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/addBook", data);

      if (res.status === 200 || res.status === 201) {
        setMsg(res.data.message);
        setColorError(false);
        setShowMsg(true);

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        setMsg("No se pudo realizar la solicitud");
        setTimeout(() => {
          setMsg("");
        }, 2000);
        setTimeout(() => {
          setShowMsg(!showMsg);
          setMsg("");
        }, 3000);

        console.error("Error:", res.status, res.statusText);
      }
    } catch (error) {
      setMsgError("No se pudo hacer la conexión con el servidor"); //muestra el mensaje
      setShowMsg(true); // baja el mensaje
      setColorError(true); //lo vuelve rojo

      setTimeout(() => {
        setShowMsg(false);
      }, 2000);

      console.error("Error de solicitud POST: " + e.message);
    }
  };
  return (
    <aside className="backgroundModal">
      <h1 className="addBook_title">Agregar nuevo Libro</h1>
      <div className="boxModal">
        <form className="AddForm" onSubmit={handleAddBook}>
          {/* Add Imagen (portada) */}
          <section className="AddForm_inImage">
            <AddImage onImageChange={handleNewImage} />
          </section>
          <section className="AddForm_container">
            {/*Titulo */}
            <div className="AddForm_container_parameter">
              <input
                type="text"
                id="titulo"
                name="title"
                value={data.title}
                onChange={handleChange}
                className="inputText"
                placeholder="Titulo del libro..."
                required
              />
            </div>
            {/*Autor */}
            <div className="AddForm_container_parameter">
              <input
                type="text"
                id="autor"
                name="author"
                value={data.author}
                onChange={handleChange}
                className="inputText"
                placeholder="Autor del libro..."
                required
              />
            </div>
            {/*Año */}
            <div className="AddForm_container_parameter">
              <input
                type="number"
                id="año"
                name="age"
                value={data.age}
                onChange={handleChange}
                className="inputText"
                placeholder="Año del libro..."
                required
              />
            </div>
            {/*Estante y nivel */}
            <section className="AddForm_container_parameter">
              <select
                className="inputText selectInput"
                name="shelf"
                value={data.shelf}
                onChange={handleChange}
                required
                title="Select Number Stante"
              >
                <option value="" title="Selecciona un Estante">Selecciona un Estante</option>
                <option value="A" title="Estante A">Estante A</option>
                <option value="B" title="Estante B">Estante B</option>
                <option value="C" title="Estante C">Estante C</option>
                <option value="D" title="Estante D">Estante D</option>
                <option value="E" title="Estante E">Estante E</option>
                <option value="F" title="Estante F">Estante F</option>
                <option value="G" title="Estante G">Estante G</option>
                <option value="H" title="Estante H">Estante H</option>
                <option value="I" title="Estante I">Estante I</option>
                <option value="J" title="Estante J">Estante J</option>
              </select>

              <select
                className="inputText"
                name="level"
                value={data.level}
                onChange={handleChange}
                required
                title="Select Number Level of Stante"
              >
                <option value="" title="Selecciona un Nivel">
                  Selecciona un Nivel
                </option>
                <option value="1" title="Nivel 1">
                  Nivel 1
                </option>
                <option value="2" title="Nivel 2">
                  Nivel 2
                </option>
                <option value="3" title="Nivel 3">
                  Nivel 3
                </option>
                <option value="4" title="Nivel 4">
                  Nivel 4
                </option>
              </select>
            </section>

            {/*Agregar generos */}
            <div className="AddForm_container_parameter">
              <input
                type="search"
                placeholder="Escribe los generos..."
                className="inputText"
                style={{ paddingRight: "145px" }}
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
              <button
                type="button"
                className="buttonGenre"
                onClick={handleClickGenre}
              >
                Agregar Genero
              </button>
            </div>
            {/*Caja dinamica de generos */}
            <div className="boxOptionsGenres">
              {genresList.map((genre, i) => (
                <span key={i} className="generOption">
                  <label>{genre}</label>
                  <MdClose
                    className="genreExit"
                    onClick={() => deleteGenre(genre)}
                  />
                </span>
              ))}
            </div>
            {/*Agregar una descripcion o sipnosis */}
            <div
              className="AddForm_container_parameter"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <textarea
                className="textarea"
                id="textarea"
                name="description"
                value={data.description}
                onChange={handleChange}
                placeholder="Descripcion, sipnosis, de que trata el libro..."
              ></textarea>
            </div>
            {/*Enviar los datos */}
            <button type="submit" className="btnAddBook">
              Agregar
            </button>
          </section>
        </form>
      </div>
      <span
        className={`msgBook ${showMsg ? "show" : ""} `}
        style={{
          background: colorError
            ? "linear-gradient(45deg, #972929, #d31d1d)"
            : null,
        }}
      >
        {msg ? msg : msgError}
      </span>
    </aside>
  );
}

export default ModalAdd;
