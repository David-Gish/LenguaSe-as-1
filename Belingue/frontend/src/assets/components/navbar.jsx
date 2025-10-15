import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">LSC Colombia</h1>
        <ul className="flex gap-6 text-lg">
          <li><Link to="/" className="hover:text-yellow-300 transition">Inicio</Link></li>
          <li><Link to="/courses" className="hover:text-yellow-300 transition">Cursos</Link></li>
          <li><Link to="/about" className="hover:text-yellow-300 transition">Sobre LSC</Link></li>
          <li><Link to="/login" className="hover:text-yellow-300 transition">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}
