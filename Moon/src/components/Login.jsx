import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Paginaprincipal from "./Paginaprincipal";

export default function Login({ onLogin }) {
  const [correo, setcorreo] = useState("");
  const [contraseña, setcontraseña] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        correo,
        contraseña,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      onLogin(data.user);
      navigate("/Paginaprincipal");
      alert(data.message || "Inicio de sesión exitoso");
    } else {
      alert("error: " + (data.message || "Error al iniciar sesión"));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            value={correo}
            onChange={(e) => setcorreo(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={contraseña}
            onChange={(e) => setcontraseña(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          <p><Link to="/paginaPricipal">Ingresar</Link></p>
        </button>
      </form>
    </>
  );
}
