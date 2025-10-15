import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/login", { email, password });
      alert("Inicio de sesión exitoso");
      navigate("/courses");
    } catch (err) {
      alert("Error al iniciar sesión. Verifica tus datos.");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold mb-4 text-blue-800">Iniciar Sesión</h2>
      <form onSubmit={handleLogin} className="bg-gray-100 p-6 rounded-lg shadow-md w-80">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <button className="bg-blue-700 text-white w-full p-2 rounded hover:bg-blue-800">Entrar</button>
      </form>
    </div>
  );
}
