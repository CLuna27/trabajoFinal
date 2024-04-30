import mongoose from "mongoose";

// Funcion para conectar la base de datos

const conexionMongo = async() => {
    await mongoose.connect(process.env.BD_URL,[])

    try{
        console.log ("Conexion Exitosa");
    } catch (error){
        console.log("Error de Conexion:",error.message);
    }
}

export default conexionMongo;