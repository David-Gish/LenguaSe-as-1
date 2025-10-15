import React from "react";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Saludos Básicos 🤝",
      description: "Aprende a saludar y despedirte usando LSC.",
      route: "/curso-saludo", // ruta que abrirá el curso
    },
    {
      id: 2,
      title: "Colores 🎨",
      description: "Identifica y expresa los colores más comunes en señas.",
      route: "/curso-colores",
    },
    {
      id: 3,
      title: "Números 🔢",
      description: "Aprende a contar del 1 al 10 en Lengua de Señas Colombiana.",
      route: "/curso-numeros",
    }
  ];

  return (
    <div className="courses-page bg-gradient-to-b from-blue-100 to-blue-300 min-h-screen p-10">
      <header className="courses-header text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-3">
          Cursos de Lengua de Señas Colombiana 🇨🇴
        </h1>
        <p className="text-gray-700 text-lg">
          Aprende paso a paso con nuestros módulos interactivos y prácticos.
        </p>
      </header>

      <section className="courses-grid grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="course-card bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              {course.title}
            </h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <button
              onClick={() => navigate(course.route)}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition"
            >
              Ver curso
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
