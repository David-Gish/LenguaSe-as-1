import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <ul className="flex gap-6 justify-center">
        <li><Link to="/" className="hover:text-yellow-300">Inicio</Link></li>
        <li><Link to="/lessons" className="hover:text-yellow-300">Lecciones</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-300">Contacto</Link></li>
      </ul>
    </nav>
  );
}
