import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Sobre LSC", path: "/about" },
    { name: "Lenguas de Señas", path: "/lenguas-senas" },
    { name: "Videos por Carrera", path: "/videos-carreras" },
    { name: "Juego del Ahorcado", path: "/ahorcado" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        {/* Título */}
        <h1 className="title">LSC Colombia</h1>

        {/* Menú escritorio */}
        <ul className="desktop-menu">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa móvil */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menú móvil */}
      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link.name}>
            <Link to={link.path} onClick={() => setMenuOpen(false)}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
