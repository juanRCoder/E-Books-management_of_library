import { useContext } from "react";
import { MiContexto } from "../../../Context.jsx";

function ShelfOption() {
  const { shelfOptions, setShelfOptions } = useContext(MiContexto);
  const handleShelfChange = (value) => {
    setShelfOptions((prevShelfOptions) => {
      if (prevShelfOptions.includes(value)) {
        return prevShelfOptions.filter((preValue) => value !== preValue);
      } else {
        return [...prevShelfOptions, value];
      }
    });
  };

  const shelves = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  return (
    <div className="boxOptions_filters">
      {shelves.map((shelf) => (
        <label
          key={shelf}
          htmlFor={shelf}
          style={{ fontWeight: shelfOptions.includes(shelf) ? 600 : 500 }}
        >
          <input
            type="checkbox"
            id={shelf}
            checked={shelfOptions.includes(shelf)}
            onChange={() => handleShelfChange(shelf)}
          />{" "}
          Estante {shelf}
        </label>
      ))}
    </div>
  );
}

export default ShelfOption;
