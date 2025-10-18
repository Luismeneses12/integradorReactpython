import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
export default function Registro(){

   const [nombre, setNombre] = useState("")
   const [identificacion, setIdentificacion] = useState("")
   const [correo, setCorreo ] = useState("")
   const [contraseña , setContraseña] = useState("")
   const [edad, setEdad] = useState("")

  const haldleSubmit  = async (e)=>{
    e.preventDefault()

    const res = await fetch('http://127.0.0.1:5000/registro ',
      {method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          nombre,
          identificacion,
          correo,
          contraseña,
          edad
        })
  })
  const data= await res.json()
  console.log(data)
  alert(data.message)
  }   
    
    return(
        <>
        <>
  <meta charSet="UTF-8" />
  <title>Registro Moon</title>
  <form
  onSubmit={haldleSubmit}
    style={{
      backgroundColor: "rgba(255,255,255,0.1)",
      padding: 40,
      borderRadius: 16,
      width: 320,
      boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
      backdropFilter: "blur(10px)"
    }}
  >
    <h2 style={{ textAlign: "center", marginBottom: 20, color: "#f0f0f0" }}>
       Registro Moon
    </h2>
    <label htmlFor="nombre" style={{ display: "block", marginTop: 10 }}>
      Nombre completo
    </label>
    <input
      value={nombre} onChange={(e)=>setNombre(e.target.value)}
      type="text"
      id="nombre"
      name="nombre"
      required=""
      style={{
        width: "100%",
        padding: 10,
        marginTop: 5,
        border: "none",
        borderRadius: 6,
        backgroundColor: "#eaeaea"
      }}
    />
    <label htmlFor="identificacion" style={{ display: "block", marginTop: 10 }}>
      Identificación
    </label>
    <input
      value={identificacion} onChange={(e)=>setIdentificacion(e.target.value)}
      type="text"
      id="identificacion"
      name="identificacion"
      required=""
      style={{
        width: "100%",
        padding: 10,
        marginTop: 5,
        border: "none",
        borderRadius: 6,
        backgroundColor: "#eaeaea"
      }}
    />
    <label htmlFor="correo" style={{ display: "block", marginTop: 10 }}>
      Correo electrónico
    </label>
    <input
    value={correo} onChange={(e)=>setCorreo(e.target.value)}
      type="email"
      id="correo"
      name="correo"
      required=""
      style={{
        width: "100%",
        padding: 10,
        marginTop: 5,
        border: "none",
        borderRadius: 6,
        backgroundColor: "#eaeaea"
      }}
    />
    <label htmlFor="contrasena" style={{ display: "block", marginTop: 10 }}>
      Contraseña
    </label>
    <input
    value={contraseña} onChange={(e)=>setContraseña(e.target.value)}
      type="password"
      id="contrasena"
      name="contrasena"
      required=""
      style={{
        width: "100%",
        padding: 10,
        marginTop: 5,
        border: "none",
        borderRadius: 6,
        backgroundColor: "#eaeaea"
      }}
    />
    <label htmlFor="edad" style={{ display: "block", marginTop: 10 }}>
      Edad
    </label>
    <input
    value={edad} onChange={(e)=>setEdad(e.target.value)}
      type="number"
      id="edad"
      name="edad"
      min={10}
      required=""
      style={{
        width: "100%",
        padding: 10,
        marginTop: 5,
        border: "none",
        borderRadius: 6,
        backgroundColor: "#eaeaea"
      }}
    />
    <button
      type="submit"
      style={{
        width: "100%",
        marginTop: 20,
        backgroundColor: "#4c63d2",
        color: "white",
        border: "none",
        padding: 12,
        borderRadius: 8,
        cursor: "pointer",
        fontSize: 16,
        fontWeight: "bold",
        transition: "background-color 0.3s"
      }}
    >
      Registrarse
    </button>
    <p
      style={{
        textAlign: "center",
        marginTop: 15,
        fontSize: 13,
        color: "#ccc"
      }}
    >
      ¿Ya tienes cuenta?{" "}
      {/* aca va la parte para redirecinar la  la iunofrm acion */}         
       <NavLink style={{ color: "#9ab3ff", textDecoration: "none" }} to={"/login"} >Inicio  sesión</NavLink>
    </p>
   
  </form>
</>

        </>
    )
}