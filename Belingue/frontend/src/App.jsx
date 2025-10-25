import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/navbar";
import Login from "./assets/components/login";
import Register from "./assets/components/register";
import Courses from "./assets/components/courses";
import Home from "./assets/components/home";
import LenguasSenas from "./assets/pages/lenguasenas";
import About from "./assets/pages/about";
import VideosCarreras from "./assets/pages/VideosCarreras";
import Ahorcado from "./assets/components/Ahorcado";
import CursoSaludo from "./assets/components/curso-saludo";
import CursoColores from "./assets/components/curso-colores";
import CursoNumeros from "./assets/components/curso-numeros";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<h1 className="text-center mt-10 text-3xl font-bold text-blue-700">Bienvenido a la Plataforma LSC</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/lenguas-senas" element={<LenguasSenas />} />
        <Route path="/videos-carreras" element={<VideosCarreras />} />
        <Route path="/ahorcado" element={<Ahorcado />} />
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

export default App
