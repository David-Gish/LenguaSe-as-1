import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
     const res = await axios.post("http://localhost:5000/api/register", {
      name,
      username,
      password,
     });
      alert(res.data.message);
      window.location.href = "/login";
    } catch (err) {
      alert("Error en el registro: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2 className="register-title">🖐️ Crear Cuenta</h2>
        <form onSubmit={handleRegister} className="register-form">
          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <button type="submit">Registrarse</button>
        </form>
        <p className="register-footer">
          ¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  );
}
