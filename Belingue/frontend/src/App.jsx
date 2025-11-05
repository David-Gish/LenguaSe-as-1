// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Register from "./components/register";
import Courses from "./components/courses";
import Home from "./components/home";
import LenguasSenas from "./pages/lenguasenas";
import About from "./pages/about";
import VideosCarreras from "./pages/VideosCarreras";
import CursoSaludo from "./components/curso-saludo";
import CursoColores from "./components/curso-colores";
import CursoNumeros from "./components/curso-numeros";

function App() {
  // 🔹 Probar conexión con el backend
  useEffect(() => {
    fetch("http://localhost:4000/api/usuarios")
      .then((res) => res.json())
      .then((data) => console.log("✅ Conectado al backend:", data))
      .catch((err) => console.error("❌ Error al conectar con el servidor:", err));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Aquí se usa Home */}
        <Route path="/about" element={<About />} />
        <Route path="/lenguas-senas" element={<LenguasSenas />} />
        <Route path="/videos-carreras" element={<VideosCarreras />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/curso-saludo" element={<CursoSaludo />} />
        <Route path="/curso-colores" element={<CursoColores />} />
        <Route path="/curso-numeros" element={<CursoNumeros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
