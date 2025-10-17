import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


const Getperfil = ({user})=>{
    const[nombre, setNombre] = useState("")
    const[correo, setCorreo] = useState("")
    const[edad, setEdad] = useState("")
    const navegate = useNavigate();

    const handleGet = async(e)=>{
        e.preventDefault();
        const res = await fetch(`http://127.0.0.1:5000/perfil/${id}`,
            {method: 'GET',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nombre, correo, edad}
        )}        
        )
        const data = await res.json()
        if(res.ok){
            navegate('/perfil');
            alert(data.message||'Perfil obtenido correctamente');
        }else{
            alert(data.message  || 'Error al obtener el perfil');
        }

    }

    return(
        <>
    
        <div>
        <h2>Ver perfil</h2>
        <form onSubmit={handleGet}>
            <button type="submit">Obtener perfil</button>
        </form>
        <p>Nombre: {user.nombre}</p>
        <p>Correo: {user.correo}</p>
        <p>Edad: {user.edad}</p>
        </div>
        
        </>
    )
}



const Perfil = ({user})=>{
    const[nombre , setNombre] = useState("");
    const[correo, setCorreo] = useState("");
    const[edad, setEdad] = useState("");
    const navegate = useNavigate();

     const handleUpdate = async(e)=>{
        e.preventDefault();
        const res = await fetch(`http://127.0.0.1:5000/perfil/${user.id}`,
            {method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nombre, correo, edad})
            }
        )
        const data = await res.json();
        if(res.ok){
            navegate('/perfil');
            alert(data.message||'Perfil actualizado correctamente');
        }else{
            alert(data.message  || 'Error al actualizar el perfil');
        }
    
    }

    return(
        <>
    <div>
      <h2>Editar perfil</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Nuevo nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="Nuevo correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <input
          type="number"
          placeholder="Nueva edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <button type="submit">Actualizar</button>
      </form>
      <p>{mensaje}</p>
    </div>
        </>
    )

}

export default Perfil;