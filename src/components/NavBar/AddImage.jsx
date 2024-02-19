import React, { useState } from "react";
import "../../styles/AddImage.scss";

function AddImage({ onImageChange }) {
  const [imagePreview, setImagePreview] = useState(null);

  //Cambiar la imagen que seleccione
  const handleImageChange = async (e) => {
    // Acceder al primer archivo de la lista de archivos
    const file = e.target.files[0];

    const urlImage = `/portadas/${file.name}`;
    setImagePreview(urlImage);
    onImageChange(urlImage);
  };

  //remover la imagen previo del div
  const handleRemoveImage = () => {
    setImagePreview(null);
  };

  return (
    <>
      <div className="InputFileContainer">
        <label htmlFor="inputFile" className="labelInputFile">
          {!imagePreview && "Agregar Portada"}
          <input
            type="file"
            id="inputFile"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
        {imagePreview && (
          <div className="boxImagePrev">
            <img
              src={imagePreview}
              alt="Vista Previa"
              title="Portada del libro"
            />
          </div>
        )}
      </div>
      {imagePreview && (
        <div style={{ display: "flex" }}>
          <button onClick={handleRemoveImage} className="exitImage">
            Quitar Portada
          </button>
        </div>
      )}
    </>
  );
}

export default AddImage;
