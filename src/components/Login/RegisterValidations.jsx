export default function RegisterValidations(values) {

    let errors = {}

    if (!values.email) {

        errors.email = "Debes ingresar un email"

    } else if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values.email)) {
        errors.email = "El email ingresado es inválido"
    }

    if(!values.name) {
        errors.name = "Ingresa un nombre"
    }
    if(!values.apellido) {
        errors.apellido = "Ingresa un apellido"
    }

    if (!values.password) {

        errors.password = "Ingresa una contraseña"

    } else if (values.password.length < 8) {
        errors.password = "La contraseña debe tener 8 caracteres o más"
    }

    if (!values.emailRegistro) {
        errors.email = "Confirma tu email"
    }
    else if (values.emailRegistro !== values.email) {
        errors.emailRegistro = "Los emails ingresados no coinciden"
    }

    return errors;
}