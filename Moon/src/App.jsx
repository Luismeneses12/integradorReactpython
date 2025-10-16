import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Login from "./components/Login";
import Registro from "./components/Registro";
import { Routes, Route } from "react-router-dom";
import './App.css'
function App() {
  return (
    <>
      
        <Header />
         <Routes>
           <Route path="/login" element={<Login />} />
           <Route path="/registro" element={<Registro />} />
         </Routes>      
       <Main />
      <Footer />
    </>
  );
}

export default App;



