export default function LoginValidations(values) {

    let errors = {}

    if (!values.emailLogin) {

        errors.emailLogin = "Ingresa un email"

    } else if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values.email)) {
        errors.emailLogin = "El email ingresado es inválido"
    }



    if (!values.password) {

        errors.password = "Ingresa una contraseña"

    } else if (values.password.length < 8) {
        errors.password = "La contraseña debe tener 8 caracteres o más"
    }

}