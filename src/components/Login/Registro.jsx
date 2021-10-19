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

const Registro = () => {
    return (
        <div>

            <form>
                <h1> Registrate para realizar una reserva </h1>
            </form>
            <div>
                <label for="name">
                    Nombre
                </label>
                <input id="name" type="text" name="name" placeholder="Ingresa tu nombre" />
            </div>

            <div>
                <label for="apellido">
                    Apellido
                </label>
                <input id="apellido" type="text" name="apellido" placeholder="Ingresa tu apellido" />
            </div>

            <div>
                <label for="emailRegistro">
                    Email
                </label>
                <input id="emailRegistro" type="email" name="emailRegistro" placeholder="Ingresa tu email" />

            </div>

            <div>
                <label for="emailRegistro-confirmar">
                    Confirma tu email
                </label>
                <input id="emailRegistro-confirmar" type="email" name="emailRegistro-confirmar" placeholder="Reingresa tu email" />
            </div >

            <div>
                <label for="password">
                    Contraseña
                </label>
                <input id="password" type="password" name="password" placeholder="Ingresa tu contraseña" />
            </div >

            <button type="submit">REGISTRO</button>
            <span> Ya tenés cuenta? Ingresa <a href="./components/Login/Login">aquí </a> </span>
            </div >
      
    )
}

export default Registro
