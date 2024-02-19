import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MiContextoProvider } from "./Context.jsx";
import NavBar from "./components/Navbar/NavBar.jsx";
import Library from "./components/Library/Library.jsx";
import ModalAdd from "./components/NavBar/Modals/ModalAdd.jsx";
import ModalborrowedsList from "./components/NavBar/Modals/ModalborrowedsList.jsx";
import ModalPrestar from "./components/NavBar/Modals/ModalPrestar.jsx";

function App() {
  return (
    <BrowserRouter>
      <MiContextoProvider>
        <div className="MainInterface">
          <NavBar />

          <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/E-Books" element={<Library />} />
            <Route path="/agregar-libro" element={<ModalAdd />} />
            <Route path="/solicitud-prestamo-libro" element={<ModalPrestar />} />
            <Route path="/lista-libros-prestados" element={<ModalborrowedsList />} />
          </Routes>
        </div>
      </MiContextoProvider>
    </BrowserRouter>
  );
}

export default App;
