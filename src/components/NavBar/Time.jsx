import React, { useState, useEffect } from "react";
import "../../styles/Time.scss";

const Time = () => {
  const [hora, setHora] = useState("");
  const [minutos, setMinutos] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    const actualizarFechaHora = () => {
      const ahora = new Date();
      setHora(formatoDoceHoras(ahora.getHours()));
      setMinutos(formatoDosDigitos(ahora.getMinutes()));
      setPeriodo(obtenerPeriodo(ahora.getHours()));
      setFecha(obtenerFecha(ahora));
    };

    const formatoDosDigitos = (valor) => {
      return valor < 10 ? `0${valor}` : valor;
    };

    const formatoDoceHoras = (hora) => {
      return hora % 12 || 12; // Convierte la hora a formato de 12 horas
    };

    const obtenerPeriodo = (hora) => {
      return hora >= 12 ? "PM" : "AM";
    };

    const obtenerFecha = (fecha) => {
      const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
      ];
      return `${fecha.getDate()} ${
        meses[fecha.getMonth()]
      } ${fecha.getFullYear()}`;
    };

    const intervalo = setInterval(actualizarFechaHora, 1000);

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []); // El segundo argumento vacío asegura que useEffect se ejecute solo una vez al montar el componente

  return (
    <div className="boxTime">
      <p className="boxTime_date">{fecha}</p>
      <p className="boxTime_hour">
        {hora}<span className="colon">:</span>{minutos}<span className="seconds"> </span>
        <span className="periodo">{periodo}</span>
      </p>
    </div>
  );
};

export default Time;
