import React from "react";
import { NavLink } from "react-router-dom";
import "../header/header.css";

export default function Header({ user }) {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "activo" : "")}>
              Inicio
            </NavLink>
          </li>

          {user && (
            <>
              <li>
                <NavLink to="/paginaprincipal" className={({ isActive }) => (isActive ? "activo" : "")}>
                  Página Principal
                </NavLink>
              </li>
              <li>
                <NavLink to="/perfil" className={({ isActive }) => (isActive ? "activo" : "")}>
                  Perfil
                </NavLink>
              </li>
            </>
          )}

          {!user && (
            <>
              <li>
                <NavLink to="/login" className={({ isActive }) => (isActive ? "activo" : "")}>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/registro" className={({ isActive }) => (isActive ? "activo" : "")}>
                  Registro
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
