import express from "express";
import { getUsuario, postUsuario, putUsuario, deleteUsuario } from "../controllers/usuario.controller.js";

// Definir variable

const usuarioRouter = express.Router();

// Definir ruta especifica

usuarioRouter.get("/obtenerUsuarios" , getUsuario);
usuarioRouter.post("/crearUsuarios" , postUsuario);
usuarioRouter.put("/modificarUsuarios/:_id" , putUsuario);
usuarioRouter.delete("/eliminarUsuarios/:_id" , deleteUsuario);

export default usuarioRouter;