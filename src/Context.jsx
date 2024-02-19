import React, { createContext, useState } from "react";

// Crear el contexto
const MiContexto = createContext();

// Crear el proveedor del contexto
const MiContextoProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [statusOption, setStatusOption] = useState(false);
  const [genresOptions, setGenresOptions] = useState([]);
  const [ageOptions, setAgeOptions] = useState([]);
  const [levelOptions, setLevelOptions] = useState([]);
  const [shelfOptions, setShelfOptions] = useState([]);
  const [image, setImage] = useState("");

  return (
    <MiContexto.Provider
      value={{
        value,
        setValue,
        statusOption,
        setStatusOption,
        genresOptions,
        setGenresOptions,
        ageOptions,
        setAgeOptions,
        levelOptions,
        setLevelOptions,
        shelfOptions,
        setShelfOptions,
        image,
        setImage,
      }}
    >
      {children}
    </MiContexto.Provider>
  );
};

export { MiContexto, MiContextoProvider };
