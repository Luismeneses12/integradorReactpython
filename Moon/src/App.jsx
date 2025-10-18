import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Paginaprincipal from "./components/Paginaprincipal";
import Perfil from "./components/perfil";


function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Header user={user} /> {/* ✅ pasamos user para mostrar condicionales */}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Login y Registro */}
          <Route
            path="/login"
            element={
              user ? <Navigate to="/paginaprincipal" /> : <Login onLogin={setUser} />
            }
          />
          <Route path="/registro" element={<Registro />} />

          {/* Rutas protegidas */}
          <Route
            path="/paginaprincipal"
            element={
              user ? <Paginaprincipal user={user} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/perfil"
            element={user ? <Perfil user={user} /> : <Navigate to="/login" />}
          />

          {/* Ruta de respaldo */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;

