import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../header/header.css";

export default function Header() {
  const location = useLocation();
  const pathActual = location.pathname.replace("/", "");

  const [menuAbierto, setMenuAbierto] = useState(false);

  const navItems = [
    { path: "", text: "Inicio" },
    { path: "proposito", text: "Propósito" },
    { path: "citas", text: "Citas" },
    { path: "foros", text: "Foros" },
    { path: "contacto", text: "Contacto" },
    { path: "login", text: "Login" },
    { path: "register", text: "Registrarse" },
  ];

  return (
    <header>
      <nav>
        <div className="logo">Moon</div>

        {/* Botón de menú (hamburguesa) */}
        <div
          className={`menu-toggle ${menuAbierto ? "active" : ""}`}
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Lista del menú */}
        <ul className={menuAbierto ? "nav-links active" : "nav-links"}>
          {navItems
            .filter((item) => item.path !== "login" && item.path !== "register")
            .map(
              (item) =>
                pathActual !== item.path && (
                  <Link
                    to={`/${item.path}`}
                    key={item.path}
                    onClick={() => setMenuAbierto(false)}
                  >
                    <li>{item.text}</li>
                  </Link>
                )
            )}

          {/* 🔹 Grupo de login/registro */}
          <div className="auth-group">
            <Link to="/login" onClick={() => setMenuAbierto(false)}>
              <li className="auth-btn">Login</li>
            </Link>
            <Link to="/register" onClick={() => setMenuAbierto(false)}>
              <li className="auth-btn">Registrarse</li>
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
}
