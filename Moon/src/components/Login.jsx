import React from "react";
import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

export default function Login(){
  const [correo, setcorreo] = useState("")
  const [contraseña, setcontraseña] = useState("")

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const res = await fetch('http://127.0.0.1:5000/login',
      {method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          correo,
          contraseña
        })
  })
  const data= await res.json()
  console.log(data)
  alert(data.message)
  }
  
  return(
        <>
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
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
    Submit
  </button>
</form>

        </>
    )
}