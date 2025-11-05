import React, { useState, useEffect } from "react";
import "./colores.css";

export default function CursoColores() {
  const colores = [
    { nombre: "Rojo", codigo: "#FF6B6B" },
    { nombre: "Azul", codigo: "#6BCBFF" },
    { nombre: "Verde", codigo: "#81E979" },
    { nombre: "Amarillo", codigo: "#FFF56B" },
    { nombre: "Naranja", codigo: "#FFB86B" },
    { nombre: "Morado", codigo: "#C69BFF" },
  ];

  const [colorActual, setColorActual] = useState(null);
  const [opciones, setOpciones] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [puntuacion, setPuntuacion] = useState(0);

  useEffect(() => {
    generarRonda();
  }, []);

  const generarRonda = () => {
    const nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    const opcionesAleatorias = [...colores]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    if (!opcionesAleatorias.includes(nuevoColor)) {
      opcionesAleatorias[Math.floor(Math.random() * 3)] = nuevoColor;
    }

    setColorActual(nuevoColor);
    setOpciones(opcionesAleatorias);
    setMensaje("");
  };

  const manejarRespuesta = (colorSeleccionado) => {
    if (colorSeleccionado.nombre === colorActual.nombre) {
      setMensaje("🎉 ¡Correcto, qué lindo trabajo!");
      const nuevaPuntuacion = puntuacion + 1;
      setPuntuacion(nuevaPuntuacion);

      // 🔓 Desbloquea siguiente curso automáticamente al alcanzar 5 aciertos
      if (nuevaPuntuacion === 5) {
        localStorage.setItem("nivelDesbloqueado", 3);
        alert("🌈 ¡Felicidades! Has desbloqueado el siguiente curso: Números 🔢");
      }

      setTimeout(() => generarRonda(), 1000);
    } else {
      setMensaje("😿 ¡Oh no! Inténtalo de nuevo con cariño 💕");
    }
  };

  return (
    <div className="kawaii-container">
      <div className="kawaii-card">
        <h1 className="titulo-kawaii">🎨 Colores en LSC 🌈</h1>
        <p className="subtitulo">Aprende los colores más bonitos en Lengua de Señas Colombiana 💖</p>

        {/* 🎥 Video educativo */}
        <iframe
          width="480"
          height="270"
          src="https://www.youtube.com/embed/aQGTQ6Wglns?si=0O_0ioQG-TUUUIbE"
          title="Video educativo de colores LSC"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-kawaii"
        ></iframe>

        {/* 🎮 Juego */}
        {colorActual && (
          <div className="juego-kawaii">
            <div
              className="muestra-color"
              style={{ backgroundColor: colorActual.codigo }}
            ></div>

            <div className="opciones-kawaii">
              {opciones.map((color, index) => (
                <button
                  key={index}
                  onClick={() => manejarRespuesta(color)}
                  className="boton-color"
                >
                  {color.nombre}
                </button>
              ))}
            </div>

            <p className="mensaje">{mensaje}</p>
            <p className="puntuacion">⭐ Puntuación: {puntuacion}</p>
          </div>
        )}

        <a href="/courses" className="volver-btn">
          ⬅️ Volver a cursos
        </a>
      </div>
    </div>
  );
}
