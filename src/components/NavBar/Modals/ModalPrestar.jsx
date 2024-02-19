import React, { useState } from "react";
import axios from "axios";
import "../../../styles/ModalPrestar.scss";

function ModalPrestar() {
  //Extrae el valor de  portada y title del sessionStorage
  const storedTitle = sessionStorage.getItem("title") || "";
  const storedPortada = sessionStorage.getItem("portada") || "";

  //Desearilza el objeto almacenado como valor en sessionStorage en title y portada
  // const storedPortada = JSON.parse(sessionStorage.getItem("portada")) || {};
  // const storedTitle = JSON.parse(sessionStorage.getItem("title")) || {};

  const [msg, setMsg] = useState("");
  const [msgError, setMsgError] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const [colorError, setColorError] = useState(false);
  const [sendBookPrestar, setSendBookPrestar] = useState({
    fullName: "",
    fullLastName: "",
    dni: "",
    phoneNumber: "",
    tmStart: "",
    tmEnd: "",
    address: "",
    district: "",
    title: storedTitle,
    cover: storedPortada,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSendBookPrestar((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/borrowBook", sendBookPrestar);

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
    } catch (e) {
      setMsgError("No se pudo hacer la conexión con el servidor"); //muestra el mensaje
      setShowMsg(true); // baja el mensaje
      setColorError(true); //lo vuelve rojo

      setTimeout(() => {
        setShowMsg(false);
      }, 2000);

      console.error("Error de solicitud POST:", e.message);
    }
  };

  return (
    <>
      <aside className="backgroundModalPrestar">
        <h1>{storedTitle}</h1>
        <section className="ContainerPrestar">
          <div className="boxImage">
            <img src={storedPortada} className="boxImage_imgPrestar" />
          </div>
          <form onSubmit={handleSubmit}>
            {/* Nombre completo */}
            <input
              placeholder="Nombres Completos..."
              className="inputText"
              name="fullName"
              value={sendBookPrestar.fullName}
              onChange={handleChange}
              required
            />

            {/* Apellidos completos */}
            <input
              placeholder="Apellidos Completos..."
              className="inputText"
              name="fullLastName"
              value={sendBookPrestar.fullLastName}
              onChange={handleChange}
              required
            />

            {/* Numero de DNI */}
            <input
              type="number"
              placeholder="Numero de DNI..."
              className="inputText"
              name="dni"
              value={sendBookPrestar.dni}
              onChange={handleChange}
              required
            />

            {/* Numero de telefono */}
            <input
              type="number"
              placeholder="Número de telefono..."
              className="inputText"
              name="phoneNumber"
              value={sendBookPrestar.phoneNumber}
              onChange={handleChange}
              required
            />

            {/* Fecha de inicio y fin */}
            <div className="containerDate">
              <label htmlFor="dateStart">
                Inicio:{"  "}
                <input
                  type="datetime-local"
                  id="dateStart"
                  name="tmStart"
                  value={sendBookPrestar.tmStart}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="dateEnd">
                Fin:{"  "}
                <input
                  type="datetime-local"
                  id="dateEnd"
                  name="tmEnd"
                  value={sendBookPrestar.tmEnd}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {/* Direccion de vivienda */}
            <input
              placeholder="Direccion de Domicilio..."
              className="inputText"
              name="address"
              value={sendBookPrestar.address}
              onChange={handleChange}
              required
            />

            {/* Distrito del solicitante */}
            <select
              placeholder="Distrito..."
              className="inputText"
              name="district"
              value={sendBookPrestar.district}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un distrito</option>
              <option value="ancon">Ancón</option>
              <option value="ate">Ate</option>
              <option value="barranco">Barranco</option>
              <option value="breña">Breña</option>
              <option value="cercado de lima">Cercado de Lima</option>
              <option value="chaclacayo">Chaclacayo</option>
              <option value="chorrillos">Chorrillos</option>
              <option value="cieneguilla">Cieneguilla</option>
              <option value="comas">Comas</option>
              <option value="el agustino">El agustino</option>
              <option value="independencia">Independencia</option>
              <option value="jesus maria">Jesús maría</option>
              <option value="la molina">La molina </option>
              <option value="la victoria">La victoria </option>
              <option value="lince">Lince</option>
              <option value="los olivos">Los olivos</option>
              <option value="lurigancho">Lurigancho</option>
              <option value="lurin">Lurín</option>
              <option value="magdalena del mar">Magdalena del mar</option>
              <option value="miraflores">Miraflores</option>
              <option value="pachacamac">Pachacámac</option>
              <option value="pucusana">Pucusana</option>
              <option value="pueblo libre">Pueblo libre</option>
              <option value="puente piedra">Puente piedra</option>
              <option value="punta hermosa">Punta hermosa</option>
              <option value="punta negra">Punta negra</option>
              <option value="rimac">Rímac</option>
              <option value="san bartolo">San bartolo</option>
              <option value="san borja">San borja</option>
              <option value="san isidro">San isidro</option>
              <option value="san juan de lurigancho">
                San Juan de Lurigancho
              </option>
              <option value="san juan de miraflores">
                San Juan de Miraflores
              </option>
              <option value="san luis">San Luis</option>
              <option value="san martin de porres">San Martin de Porres</option>
              <option value="san miguel">San Miguel</option>
              <option value="santa anita">Santa Anita</option>
              <option value="santa maria del mar">Santa María del Mar</option>
              <option value="santa rosa">Santa Rosa</option>
              <option value="santiago de surco">Santiago de Surco</option>
              <option value="surquillo">Surquillo</option>
              <option value="villa el salvadr">Villa el Salvador</option>
              <option value="villa maria del triunfo">
                Villa Maria del Triunfo
              </option>
            </select>

            <div className="containerButton">
              <button type="submit" className="containerButton_btn">
                Solicitar Libro
              </button>
            </div>
          </form>
        </section>
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
    </>
  );
}
export default ModalPrestar;
