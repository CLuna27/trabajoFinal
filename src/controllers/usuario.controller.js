// importamos dependencias

import usuarioModel from "../models/usuario.model.js";

/* Peticiones
 
GET: me muestra mis usuarios
POST: Crear usuarios
PUT: Me modifica mis usuarios
DELETE: me elimina mis usuariis

*/
// Prueba Inicial

// Logica para mostrar usuarios

export const getUsuario = async(req, res) => {

    //manejo de errores con try y catch
try{
    let usuarios = await usuarioModel.find();
    return res.send (usuarios);
}catch(error){
    return res.json({error: "error al mostrar los datos" +error});

}

}

// Logica para crear usuarios

export const postUsuario = async (req, res) => {
    
    //manejo de errores con try y catch

    try{
        let datosUsuario = req.body;
        let nuevoUsuario = await usuarioModel.create(datosUsuario);
        return res.json(nuevoUsuario);

    } catch(error){
        return res.json({error: "error al crear el usuario" , message:error.message});
 
    }
}

// Logica para Modificar usuarios
export const putUsuario = async (req, res) => {
    
    try{
        let datosModificar = req.body;
        let idModificar = req.params._id;

        await usuarioModel.findByIdAndUpdate(idModificar, datosModificar);
        return res.json({message: "usuario actualizado correctamente"});

    }catch(error){
        return res.json({error: "error al modificar el usuario" , message:error.message});  
    }
}
// Logica para Eliminar usuarios
export const deleteUsuario = async (req, res) => {
    
    try{
        let idEliminar = req.params._id;
        let usuarioEliminado = await usuarioModel.findByIdAndDelete(idEliminar);
        if(usuarioEliminado){
            return res.json({message: "usuario eliminado correctamente"});
        } else{
            return res.json({message: "no se pudo eliminar ese usuario"});
        }

    }catch(error){
        return res.json({error: "error al eliminar el usuario" , message:error.message}); 
    }
}