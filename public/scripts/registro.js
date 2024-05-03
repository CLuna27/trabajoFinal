// verificar conexion con html
console.log("Hola soy registro");
const registrar = async () => {
    const nombreCompleto = document.getElementById("nombreInscripcion").value;
    const cedula = document.getElementById("cedulaInscripcion").value;
    const ciudad = document.getElementById("ciudadInscripcion").value;
    const direccion = document.getElementById("direccionInscripcion").value;
    const correo = document.getElementById("correoInscripcion").value;
    const crearContrasena = document.getElementById("contrasenaInscripcion").value;

    console.log(nombreCompleto, cedula, ciudad, direccion, correo, crearContrasena);

    // crear un objeto con los datos del usuario

    const datosUsuario = {
        nombreCompleto,
        cedula,
        ciudad,
        direccion,
        correo,
        crearContrasena
    }

    console.log(datosUsuario);

    // Peticion POST para crear usuario en base de datos

    try {

        // Crear usuarios en la base de datos

        const respuesta = await fetch("http://localhost:9000/api/crearUsuarios",
            {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(datosUsuario)
            }
        );

        const nuevoUsuario = await respuesta.json();
        console.log("Usuario Creado Existosamente", nuevoUsuario);

        // Condicional para redireccionar a ingreso.html

        if(nuevoUsuario){
            alert("Registro Exitoso");
        } else{
            alert(" Error de registro, Intentelo Nuevamente");
        }

    } catch (error) {
        console.error("error al resgistrar usuario", error);
    }

}

