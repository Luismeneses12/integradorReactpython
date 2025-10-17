import React from 'react'
import Perfil from './perfil'

import { Link } from 'react-router-dom'
export default function Paginaprincipal({user}) {
  return (
    <div>
        <h2>
        Bienvenido a la página principal, {user.nombre}        
        </h2>
        <p>Tu correo: {user.correo}</p>
        <Link to="/perfil"><button>editar perfil </button></Link>
      
    </div>
  )
}
