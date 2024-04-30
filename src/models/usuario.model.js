    // importar las dependencias
    import mongoose from "mongoose";

    const schema = mongoose.Schema;

    // Creacion del esquema de datos

    const usuarioSchema = new schema ({
        nombreCompleto:{
            type: String,
            required: true 
        },

        cedula:{
            type: Number,
            required: true
        },

        ciudad: {
            type: String,
            required: true
        },

        direccion:{
            type: String,
            required: true
        },

        correo: {
            type: String,
            required: true
        },

        crearContrasena: {
            type: String,
            required: true
        }
    });

    // Envio de plantilla al esquema de datos
    // Crear modelo

    const usuarioModel = mongoose.model("usuario", usuarioSchema);

    // Exportar Modelo

    export default usuarioModel;