import { BrowserRouter, Link, Routes, Router } from "react-router-dom";
import Login from "./Login";
import { NavLink } from "react-router-dom";
export default function Header(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            proposito
          </a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contacto 
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            opcion
          </a>
          
          <ul className="dropdown-menu">
            <li>
             {/*<a  className="dropdown-item" href="#">Login</a>*/}
            <NavLink to="/login">login</NavLink>
            </li>
            <li>
              {/*<a className="dropdown-item" href="#">
                registro
              </a>*/}
              <NavLink to="/registro">registro</NavLink>
            </li>
           
          </ul>
          
        </li>
      </ul>
      
    </div>
  </div>
</nav>

        </>
    )
}