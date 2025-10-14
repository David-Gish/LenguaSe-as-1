const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
