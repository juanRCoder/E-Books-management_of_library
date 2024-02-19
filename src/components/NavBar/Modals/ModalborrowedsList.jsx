import { useEffect, useState } from "react";
import axios from "axios";
import "../../../styles/ModalBorrowedsList.scss";

function ModalborrowedsList() {
  const [borrowedsBooks, setBorrowedsBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/juanRCoder/dataJSON/main/borrowedBooks.json")
      // .get("/getListBorrrowedBooks")
      .then((res) => {
        setBorrowedsBooks(res.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log(borrowedsBooks);

  function formatearFecha(fechaString) {
    const opciones = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "UTC",
    };

    const fecha = new Date(fechaString);
    return fecha.toLocaleDateString("es-PE", opciones);
  }

  return (
    <>
      <aside className="backgroundBorrredList">
        <h1 className="addBook_title">Libros Prestados</h1>
        {borrowedsBooks.length === 0 ? (
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
          borrowedsBooks.map((borrowed) => {
            return (
              <section key={borrowed._id} className="containerBorrredList">
                <div className="containerImage">
                  <img
                    src={borrowed.cover}
                    alt={borrowed.title}
                    title={borrowed.title}
                  />
                </div>
                <div className="containerInformation">
                  <h3>{borrowed.title}</h3>
                  <div className="boxDate">
                    <p className="labelP">Prestatario:</p>
                    <span className="span">
                      {borrowed.fullName} {borrowed.fullLastName}
                    </span>
                  </div>
                  <div className="boxDate">
                    <p className="labelP">Nr. Dni:</p>
                    <span className="span">{borrowed.dni}</span>
                  </div>
                  <div className="boxDate">
                    <p className="labelP">Nr. Telf:</p>
                    <span className="span">{borrowed.phoneNumber}</span>
                  </div>
                  <div className="boxDate">
                    <p className="labelP">Direccion:</p>
                    <span className="lastChild">
                      {borrowed.address} - {borrowed.district}
                    </span>
                  </div>
                </div>
                <div className="containerDate">
                  <div className="containerDate_box">
                    <p className="containerDate_box_label">Solicitada:</p>
                    <p className="containerDate_box_date">
                      {formatearFecha(borrowed.tmStart)}
                    </p>
                  </div>
                  <div className="containerDate_box">
                    <p className="containerDate_box_label">Expira:</p>
                    <p className="containerDate_box_date">
                      {formatearFecha(borrowed.tmEnd)}
                    </p>
                  </div>
                </div>
              </section>
            );
          })
        )}
      </aside>
    </>
  );
}

export default ModalborrowedsList;