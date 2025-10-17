import React from "react";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Login from "./components/Login";
import Registro from "./components/Registro";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Paginaprincipal from "./components/Paginaprincipal";
import Perfil from "./components/perfil";
import { Navigate } from "react-router-dom";

function App() {
const [user, setUser] = useState(null); 


  return (
    <>
      
        <Header />
         <Routes>
           <Route path="/login"
            element={ user ? <Paginaprincipal user={user}/>:<Login onLogin={setUser} />} />
           <Route path="/paginaprincipio"
            element={user ? <Paginaprincipal user={user} />: <Navigate to="/paginaprincipal"   />}
           />
            <Route
          path="/perfil"
          element={user ? <Perfil user={user} /> : <Navigate to="/perfil" />}
        />
           <Route path="/registro"
            element={<Registro />} />
         </Routes>      
       <Main />
      <Footer />
    </>
  );
}

export default App;



