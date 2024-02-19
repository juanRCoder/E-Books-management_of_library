import { useContext } from "react";
import { MiContexto } from "../../../Context.jsx";

function StatusOption() {
  const { statusOption, setStatusOption } = useContext(MiContexto);

  const handleStatusChange = (value) => {
    setStatusOption(value === statusOption ? null : value);
  };

  const statusOptions = [
    { key: "disponible", label: "Disponibles" },
    { key: "prestado", label: "Prestados" },
  ];

  return (
    <div className="boxOptions_filters">
      {statusOptions.map(({ key, label }) => (
        <label
          key={key}
          htmlFor={key}
          style={{ fontWeight: statusOption === key ? 600 : 500 }}
        >
          <input
            type="checkbox"
            id={key}
            checked={statusOption === key}
            onChange={() => handleStatusChange(key)}
          />{" "}
          {label}
        </label>
      ))}
    </div>
  );
}

export default StatusOption;
