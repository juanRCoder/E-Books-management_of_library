import { useContext } from "react";
import { MiContexto } from "../../../Context";

function AgeOption() {
  const { ageOptions, setAgeOptions } = useContext(MiContexto);
  const handleAgeChange = (value) => {
    setAgeOptions((prevAgesOptions) => {
      if (prevAgesOptions.includes(value)) {
        return prevAgesOptions.filter((preValue) => value !== preValue);
      } else {
        return [...prevAgesOptions, value];
      }
    });
  };

  const ages = ["2001", "age4", "age7", "age8"];

  return (
    <div className="boxOptions_filters">
      {ages.map((age) => (
        <label
          key={age}
          htmlFor={age}
          style={{ fontWeight: ageOptions.includes(age) ? 600 : 500 }}
        >
          <input
            type="checkbox"
            id={age}
            checked={ageOptions.includes(age)}
            onChange={() => handleAgeChange(age)}
          />{" "}
          {age}
        </label>
      ))}
    </div>
  );
}

export default AgeOption;
