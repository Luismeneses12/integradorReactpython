import React from "react";
import { useState } from "react";
import Home from "./pages/home/Home";
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
      
        <Home/>
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
       
      <Footer />
    </>
  );
}

export default App;



