import { useState } from "react"

const Navbar = () => {
    const [user, setUser] = useState(null)

    const login = () => {
      setUser({id:1,nombre:"Mendoza"})
    }
    const logout = () => {
      setUser(null)
    }
    return(
        <nav className='navbar navbar-light bg-gradient sticky-top' Style='background-color: #383636'>
            <div className='container-fluid'>
                <span className='navbar-brand mb-0 fs-4 text-white'>User:{user? user.nombre :"Desconocido"}</span>
                {user 
                    ? (<button 
                        className="btn btn-outline-success text-white" 
                        type="Button" 
                        onClick = {logout} >Cerrar Sesion
                    </button>)
                    : (<button 
                        className="btn btn-outline-success text-white" 
                        type="Button" 
                        onClick = {login} >Iniciar Sesion
                    </button>)
      }

            </div>
        </nav>
    )
}

export default Navbar 