import React from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Saludos Básicos 🤝",
    description: "Aprende a saludar y despedirte usando LSC.",
    route: "/curso-saludo" // ruta de tu curso
  },
  // Puedes agregar más cursos aquí
];

export default function Cursos() {
  const navigate = useNavigate();

  return (
    <section className="courses-grid grid gap-6 sm:grid-cols-2 md:grid-cols-3 p-8">
      {courses.map((course) => (
        <div
          key={course.id}
          className="course-card bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-2">{course.title}</h2>
          <p className="text-gray-700 mb-4">{course.description}</p>
          <button
            onClick={() => navigate(course.route)}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full transition-colors duration-300"
          >
            Ver curso
          </button>
        </div>
      ))}
    </section>
  );
}
