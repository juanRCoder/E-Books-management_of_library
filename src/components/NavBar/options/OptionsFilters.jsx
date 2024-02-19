import StatusOption from "./StatusOption.jsx";
import GenresOption from "./GenresOption.jsx";
import AgeOption from "./AgeOption.jsx";
import LevelOption from "./LevelOption.jsx";
import ShelfOption from "./ShelfOption.jsx";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

function OptionsFilters() {
  const [open, setOpen] = useState([]);

  const openToggle = (value) => {
    if (open.includes(value)) {
      setOpen(open.filter((v) => v !== value));
    } else {
      setOpen([...open, value]);
    }
  };

  const filtersOptions = [
    { key: "genres", label: "Géneros", component: <GenresOption /> },
    // { key: "ages", label: "Año", component: <AgeOption /> },
    { key: "status", label: "Estado", component: <StatusOption /> },
    { key: "shelf", label: "Estante", component: <ShelfOption /> },
    { key: "level", label: "Nivel", component: <LevelOption /> },
  ];

  return (
    <>
      <div className="ContainerBox">
        {filtersOptions.map(({ key, label, component }) => (
          <div key={key}>
            <button
              type="submit"
              className="boxOption"
              onClick={() => openToggle(key)}
            >
              {label} <IoIosArrowDown className="arrowDowm" />
            </button>
            {open.includes(key) && component}
          </div>
        ))}
      </div>
    </>
  );
}

export default OptionsFilters;
