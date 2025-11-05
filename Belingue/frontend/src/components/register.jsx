import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Obtener usuarios guardados (si existen)
    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si el usuario ya existe
    const existe = usuariosGuardados.find((u) => u.usuario === username);
    if (existe) {
      alert("❌ Este nombre de usuario ya está registrado.");
      return;
    }

    // Crear nuevo usuario
    const nuevoUsuario = {
      nombre: name,
      usuario: username,
      clave: password,
    };

    // Agregar al array y guardar
    usuariosGuardados.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));

    alert(`✅ Registro exitoso. Bienvenido, ${username}!`);
    console.log("Usuarios registrados:", usuariosGuardados);

    // Redirigir al login
    window.location.href = "/login";
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2 className="register-title">🖐️ Crear Cuenta</h2>

        <form className="register-form" onSubmit={handleRegister}>
          <div>
            <label>Nombre completo</label>
            <input
              type="text"
              placeholder="Ej: María López"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Nombre de usuario</label>
            <input
              type="text"
              placeholder="Ej: marialopez"
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

          <button type="submit">Registrarse</button>
        </form>

        <p className="register-footer">
          ¿Ya tienes cuenta?{" "}
          <a href="/login">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  );
}
