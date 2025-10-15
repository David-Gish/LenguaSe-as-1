import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/navbar";
import Login from "./assets/components/login";
import Register from "./assets/components/register";
import Courses from "./assets/components/courses";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="text-center mt-10 text-3xl font-bold text-blue-700">Bienvenido a la Plataforma LSC</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
