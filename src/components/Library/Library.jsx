import React from "react";
import SearchInput from "./SearchInput.jsx";
import ContainerLibrary from "./ContainerLibrary.jsx";
import "../../styles/ContainerLibrary.scss";

function Library() {
  return (
    <main className="ContainerBooks">
      <SearchInput />
      <ContainerLibrary />
    </main>
  );
}

export default Library;
