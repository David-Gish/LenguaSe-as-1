import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Obtener usuarios del registro
    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Buscar coincidencia
    const valido = usuariosGuardados.find(
      (u) => u.usuario === username && u.clave === password
    );

    if (valido) {
      alert("✅ Bienvenido " + valido.nombre);
      navigate("/courses");
    } else {
      alert("❌ Usuario o clave incorrectos");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">🔐 Iniciar Sesión</h2>

        <form className="login-form" onSubmit={handleLogin}>
          <div>
            <label>Usuario</label>
            <input
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Ingresar</button>
        </form>

        <p className="login-footer">
          ¿No tienes cuenta?{" "}
          <a href="/register">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
}
