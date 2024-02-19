import { useContext } from "react";
import { MiContexto } from "../../../Context.jsx";

function LevelOption() {
  const { levelOptions, setLevelOptions } = useContext(MiContexto);
  const handleAgeChange = (value) => {
    setLevelOptions((prevLevelOptions) => {
      if (prevLevelOptions.includes(value)) {
        return prevLevelOptions.filter((preValue) => value !== preValue);
      } else {
        return [...prevLevelOptions, value];
      }
    });
  };
  const levels = ["1", "2", "3", "4"];

  return (
    <div className="boxOptions_filters">
      {levels.map((lvl) => (
        <label
          key={lvl}
          htmlFor={lvl}
          style={{ fontWeight: levelOptions.includes(lvl) ? 600 : 500 }}
        >
          <input
            type="checkbox"
            id={lvl}
            checked={levelOptions.includes(lvl)}
            onChange={() => handleAgeChange(lvl)}
          />{" "}
          Nivel {lvl}
        </label>
      ))}
    </div>
  );
}

export default LevelOption;
