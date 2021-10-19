/*Bloque general: Creación de unbloque que se muestre a pantalla completa sin scroll, dejando visible en
la parte superior de la pantalla sólo el header y el bloque de búsqueda. Que
pueda contener en su centro un formulario. Además debe incluir en su extremo superior derecho un ícono
para cerrar el bloque. 
Login: Creación de un formulario de inicio de sesión que contenga los siguientes inputs y labels:
- Email (de type=”email”)
- Password (de type=”Password”)
 Además debe tener un botón que debe decir iniciar sesión, y debajo del botón debe haber un texto que redireccione al registro.
Registro: Creación de un formulario de registro que contenga los siguientes inputs:
- Nombre (de type=”text”)
- Apellido (de type=”text”)
- Email (de type=”email”)
- Repetir email (de type=”email”)
- Password (de type=”password”)
Además debe tener un botón que debe decir registro, y debajo del botón debe haber un texto que redireccione al login.*/

import React from 'react'
import useForm from './useForm';

const Login = () => {
    const {handleChange, values, handleSubmit} = useForm();
    
    return (
        <div>

            <form onSubmit= {handleSubmit}>
                <h1> Ingresa a tu cuenta</h1>
            </form>
            <div>
                <label for="email">
                    Email
                </label>
                <input 
                id="emailLogin" 
                type="email" 
                name="emailLogin" 
                placeholder="Ingresa tu email"
                value= {values.emailLogin}
                onChange={handleChange}
                 />
            </div>

            <div>
                <label for="password">
                    Contraseña
                </label>
                <input
                    id="passwordLogin"
                    type="password"
                    name="passwordLogin"
                    placeholder="Ingresa tu contraseña" 
                    value= {values.passwordLogin}
                    onChange={handleChange}/>

            </div>
            <button type="submit">INICIAR SESIÓN</button>


            <span> Aún no tenés cuenta? Regístrate <a href="./components/Login/Registro">aquí </a> </span>
        </div >
    )
}

export default Login
