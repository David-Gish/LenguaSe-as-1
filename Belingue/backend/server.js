import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();

app.use(cors());              // Permite peticiones desde el frontend (Blazor)
app.use(express.json());      // Permite recibir JSON

app.use("/api", router);      // Prefijo para tus rutas

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
