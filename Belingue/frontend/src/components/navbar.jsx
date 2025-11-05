import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "INICIO", path: "/" },
    { name: "SOBRE LSC", path: "/about" },
    { name: "LENGUAS DE SEÑAS", path: "/lenguas-senas" },
    { name: "VIDEOS DE CARRERAS", path: "/videos-carreras" },
    { name: "👤", path: "/login" },
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
