//

console.log("Hola soy ingreso");
const ingresar = async () => {
    const correo = document.getElementById("floatingInput").value;
    const crearContrasena = document.getElementById("floatingPassword").value;
    console.log(correo, crearContrasena)

    try {

        // Peticion GET a la base de datos

        const respuesta = await fetch("http://localhost:9000/api/obtenerUsuarios");
        const usuarios = await respuesta.json();
        console.log(usuarios);

        // Verificacion de usuarios

        const esUsuarioRegistrado = usuarios.find(usuario => usuario.correo == correo && usuario.contrasena == contrasena);

        if (esUsuarioRegistrado){

            // Verificar si es admin

            const correoAdmin = "administrador@gmail.com";

            if (esUsuarioRegistrado.correo == correoAdmin){
                alert("Hola Admistrador");
                window.location.href = "./admin.html"

            } else{
                alert("Ingreso Exitoso");
                window.location.href = "./compras.html"
            }

        } else {
            alert("Correo o contraseña incorrecto, usuario no encontrado. Vuelve a intentar o registrate");
        }

    }
    
    catch (error) {
        console.error("Error al verificar inicio de sesion", error);
    }

}

