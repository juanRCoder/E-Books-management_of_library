import { useContext } from "react";
import { MiContexto } from "../../../Context.jsx";

function GenresOption() {
  const { genresOptions, setGenresOptions } = useContext(MiContexto);
  const handleGenreChange = (value) => {
    setGenresOptions((prevGenresOptions) => {
      if (prevGenresOptions.includes(value)) {
        return prevGenresOptions.filter((preValue) => value !== preValue);
      } else {
        return [...prevGenresOptions, value];
      }
    });
  };

  const genres = [
    "accion",
    "aventura",
    "ciencia ficción",
    "fantasia",
    "drama",
    "comedia",
    "terror",
    "misterio",
    "romance",
    "Slice of life"
  ];

  return (
    <>
      <div className="boxOptions_filters">
        {genres.map((shelf) => (
          <label
            key={shelf}
            htmlFor={shelf}
            style={{ fontWeight: genresOptions.includes(shelf) ? 600 : 500 }}
          >
            <input
              type="checkbox"
              id={shelf}
              checked={genresOptions.includes(shelf)}
              onChange={() => handleGenreChange(shelf)}
            />{" "}
            {shelf}
          </label>
        ))}
      </div>
    </>
  );
}

export default GenresOption;
