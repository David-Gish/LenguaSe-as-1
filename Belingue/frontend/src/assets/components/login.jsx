import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      alert(res.data.message);
      window.location.href = "/courses";
    } catch (err) {
      alert("Error al iniciar sesión: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">👋 Iniciar Sesión</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Ingresar</button>
        </form>
        <p className="login-footer">
          ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
}
