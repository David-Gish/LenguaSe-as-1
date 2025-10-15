import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();
app.use(cors()); // permite peticiones desde el frontend
app.use(express.json()); // para leer JSON del body

app.use("/api", router); // usa las rutas que definiremos

const PORT = 5000;
app.listen(PORT, () => console.log(` Servidor corriendo en http://localhost:${PORT}`));
