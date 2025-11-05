import React, { useState } from "react";
import "./saludos.css";

const senas = [
  { nombre: "Hola", imagen: "https://www.shutterstock.com/image-vector/international-sign-language-hello-man-260nw-1759043180.jpg" },
  { nombre: "Gracias", imagen: "https://thumbs.dreamstime.com/b/lenguaje-de-signos-internacional-gracias-hombre-material-vectorial-la-ilustraci%C3%B3n-personas-187055368.jpg" },
  { nombre: "Por favor", imagen: "https://examtimeassets.s3.amazonaws.com/uploads/media/image/20432560/desktop_5fbb733d-62d0-4a5e-b5b3-89bf5153a29e.JPG" },
  { nombre: "Amigo", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYnduyjTOp-qkp37Mwjbi1lmgXWpGJLi1uiQ&s" },
  { nombre: "Te amo", imagen: "https://us.123rf.com/450wm/kayocci/kayocci2006/kayocci200600054/149792057-international-sign-language-i-love-you-woman.jpg" },
];

export default function CursoLenguaDeSeñas() {
  const [senaActual, setSenaActual] = useState(
    senas[Math.floor(Math.random() * senas.length)]
  );
  const [mensaje, setMensaje] = useState("");
  const [puntos, setPuntos] = useState(0);
  const [intentos, setIntentos] = useState(0);
  const [animacion, setAnimacion] = useState("");

  const verificarRespuesta = (nombreSeleccionado) => {
    setIntentos(intentos + 1);
    if (nombreSeleccionado === senaActual.nombre) {
      setMensaje("🎉 ¡Correcto! ¡Eres increíble! 🥳");
      setAnimacion("acierto");
      setPuntos(puntos + 1);
      new Audio("https://assets.mixkit.co/sfx/download/mixkit-correct-answer-tone-2870.wav").play();

      setTimeout(() => {
        reiniciarJuego();
      }, 1500);
    } else {
      setMensaje("❌ Incorrecto. Intenta nuevamente 😅");
      setAnimacion("error");
      new Audio("https://assets.mixkit.co/sfx/download/mixkit-wrong-answer-fail-notification-946.wav").play();
    }
  };

  const reiniciarJuego = () => {
    setSenaActual(senas[Math.floor(Math.random() * senas.length)]);
    setMensaje("");
    setAnimacion("");
  };

  return (
    <div className="curso-container">
      <div className="curso-card">
        <h1>🤟 Lengua de Señas Colombiana</h1>
        <p>
          Aprende las <strong>señas más comunes</strong> de la LSC mientras juegas y te diviertes.
          Observa, piensa y selecciona la imagen correcta. ¡Cada acierto suma puntos!
        </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YZAqyIIrwns?si=KFch9CodEiGnkGG4"
          title="Video de señas en LSC"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="juego-saludos">
          <h2>
            🙌 ¿Cuál es la seña de: <span>{senaActual.nombre}</span>?
          </h2>
          <p>Haz clic en la imagen correcta 👇</p>

          <div className="opciones-grid">
            {senas.map((s, index) => (
              <img
                key={index}
                src={s.imagen}
                alt={`Seña de ${s.nombre}`}
                onClick={() => verificarRespuesta(s.nombre)}
                className={`opcion-imagen ${animacion}`}
              />
            ))}
          </div>

          <p className={`mensaje ${animacion}`}>{mensaje}</p>

          <div className="estadisticas">
            <p>⭐ Puntos: <strong>{puntos}</strong></p>
            <p>🎯 Intentos: {intentos}</p>
          </div>

          <button onClick={reiniciarJuego} className="reiniciar-btn">
            🔄 Nueva Seña
          </button>

          <a href="/courses" className="volver-btn">← Volver a cursos</a>
        </div>
      </div>
    </div>
  );
}
