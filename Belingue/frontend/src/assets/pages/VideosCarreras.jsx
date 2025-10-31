import React, { useState } from "react";
import "./videoscarreras.css";
import { Link } from "react-router-dom";

export default function VideosCarreras() {
  const [carrera, setCarrera] = useState("psicologia");

  // Lista de videos de ejemplo: reemplaza los src por los tuyos
  const videos = {
    psicologia: [
      { id: "saludos", title: "Concepto de la Psicología Social (LSC)", src: "https://youtu.be/CY515u7lnc4?si=Hd4pvoxIHrjncnMC" },
      { id: "emociones", title: "Vocabulario: Emociones", src: "https://www.youtube.com/watch?v=3uk_7NyKvwA" },
      { id: "terapia", title: "Términos de terapia y apoyo", src: "https://youtu.be/SI5bZ_mMync?si=6RpvPru1SsXwpiE7" },
    ],
    ingenieria: [
      { id: "computadoras", title: "Vocabulario TIC (LSC)", src: "https://youtu.be/9_BxdUJAECw?si=6Hl7a0mc-pf7P-lx" },
      { id: "programacion", title: "Conceptos básicos de programación", src: "https://youtu.be/VZe9tjqa9xw?si=JoBIBS_jo3mA8nea" },
      { id: "redes", title: "Redes y conectividad (LSC)", src: "https://youtu.be/duFuO1DvvL0?si=CDm59r0ZmTzmkAr1" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* === BANNER SOBRE LSC === */}
      <div className="banner">
        <h1 className="banner-title">Videos de Lenguaje de Seña (LSC)</h1>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700">📹 Videos LSC por Carrera</h1>
          <p className="mt-2 text-gray-600">
            Explora videos en Lengua de Señas Colombiana organizados por áreas: <strong>Psicología</strong> e <strong>Ingeniería de Sistemas</strong>.
            Estos recursos son ejemplo para incorporar en materiales educativos y en plataformas inclusivas.
          </p>
        <nav className="mt-6 flex gap-4 flex-wrap eliminar-nav">
          <button
            onClick={() => setCarrera("psicologia")}
            className={`boton-carrera ${carrera === "psicologia" ? "activo" : ""}`}
          >
            Psicología
          </button>

          <button
            onClick={() => setCarrera("ingenieria")}
            className={`boton-carrera ${carrera === "ingenieria" ? "activo" : ""}`}
          >
            Ingeniería de Sistemas
          </button>
        </nav>

        </header>

        <main>
          <h2 className="text-xl font-semibold mb-4 capitalize">
            {carrera === "psicologia" ? "Recursos para Psicología" : "Recursos para Ingeniería de Sistemas"}
          </h2>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {videos[carrera].map((v) => (
              <article key={v.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Video en LSC con explicación del vocabulario y conceptos relevantes para la carrera.
                  </p>
                </div>

                  <div className="video-placeholder">
                    <a
                      href={v.src.replace("embed/", "watch?v=")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver en YouTube
                    </a>
                  </div>

                <footer className="p-3 flex items-center justify-between">
                  <small className="text-xs text-gray-500">CC · LSC</small>
                  <Link to="/Login" className="text-sm text-blue-600 hover:underline">Más LSC</Link>
                </footer>
              </article>
            ))}
          </div>

          <section className="mt-10 bg-blue-50 rounded-xl p-6">
            <h4 className="font-semibold">Sugerencias para usar estos videos</h4>
            <ul className="list-disc ml-5 mt-2 text-gray-600">
              <li>Combina videos con ejercicios prácticos en clase y fichas con imágenes de señas.</li>
              <li>Solicita retroalimentación de personas sordas o intérpretes certificados para validar el contenido.</li>
              <li>Incluye subtítulos y transcripciones para accesibilidad adicional.</li>
            </ul>
          </section>
        </main>
      </section>

     <footer>
          <p>© 2025 LSC Colombia | Todos los derechos reservados</p>
        </footer>
    </div>
  );
}
