import express from "express";
import path from "path";
import dotenv from "dotenv";
import conexionMongo from "./src/config/baseDatos.js";
import usuarioRouter from "./src/routes/usuario.routes.js";

const app = express();
const Puerto = 9000; // Puerto para el servidor

// Configuración del servidor

dotenv.config () ;

conexionMongo();

// Establecer coneccion con el Front

const rutaPublica = path.join(process.cwd(),"public");
app.use(express.static(rutaPublica));
app.use(express.json());
app.use("/api", usuarioRouter);

// Acceso a Index.html

app.get("/",(req,res) => [
res.sendFile(path.join(rutaPublica,"Index.html"))
] );

// Iniciar el servidor
app.listen( Puerto, () => {
  console.log(` El servidor esta escuchando en http://localhost:${Puerto}`);
});

