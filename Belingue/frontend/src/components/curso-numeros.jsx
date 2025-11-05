import React, { useState } from "react";
import "./numeros.css";

export default function CursoNumeros() {
  const numeros = [
    { nombre: "1", imagen: "https://st.depositphotos.com/1029434/4867/v/950/depositphotos_48674141-stock-illustration-sign-languagenumber-1.jpg" },
    { nombre: "2", imagen: "https://st.depositphotos.com/1029434/4867/v/450/depositphotos_48674041-stock-illustration-sign-languagenumber-2.jpg" },
    { nombre: "3", imagen: "https://st.depositphotos.com/1029434/4867/v/950/depositphotos_48673829-stock-illustration-sign-languagenumber-3.jpg" },
    { nombre: "4", imagen: "https://st.depositphotos.com/1029434/4867/v/950/depositphotos_48673757-stock-illustration-sign-languagenumber-4.jpg" },
    { nombre: "5", imagen: "https://st.depositphotos.com/1029434/4867/v/450/depositphotos_48673707-stock-illustration-sign-languagenumber-5.jpg" },
    { nombre: "6", imagen: "https://previews.123rf.com/images/captainvector/captainvector2204/captainvector220455489/185249858-sign-language-number-6.jpg" },
    { nombre: "7", imagen: "https://previews.123rf.com/images/captainvector/captainvector2204/captainvector220455424/185249792-sign-language-number-7.jpg" },
    { nombre: "8", imagen: "https://st.depositphotos.com/1029434/4867/v/950/depositphotos_48673485-stock-illustration-sign-languagenumber-8.jpg" },
    { nombre: "9", imagen: "https://st.depositphotos.com/1029434/4867/v/110/depositphotos_48673373-stock-illustration-sign-languagenumber-9.jpg" },
    { nombre: "10", imagen: "https://previews.123rf.com/images/taesmileland/taesmileland1402/taesmileland140200010/25635658-sign-language-and-the-alphabet-number-10.jpg" },
  ];

  const [numeroActual, setNumeroActual] = useState(
    numeros[Math.floor(Math.random() * numeros.length)]
  );
  const [mensaje, setMensaje] = useState("");
  const [puntos, setPuntos] = useState(0);
  const [fallos, setFallos] = useState(0);

  // ✅ FUNCIÓN QUE FALTABA
  const reiniciarJuego = (reiniciarTodo = false) => {
    const nuevoNumero = numeros[Math.floor(Math.random() * numeros.length)];
    setNumeroActual(nuevoNumero);
    setMensaje("");
    if (reiniciarTodo) {
      setPuntos(0);
      setFallos(0);
    }
  };

  const verificarRespuesta = (nombreSeleccionado) => {
    if (nombreSeleccionado === numeroActual.nombre) {
      setMensaje("🌈 ¡Excelente! Lo hiciste genial 🎉");
      setPuntos((prev) => prev + 1);
      setFallos(0);
      setTimeout(() => reiniciarJuego(), 2000);
    } else {
      const nuevosFallos = fallos + 1;
      setFallos(nuevosFallos);
      setMensaje(`😿 Ups, intento ${nuevosFallos}/5 💪`);
      if (nuevosFallos >= 5) {
        setMensaje("💥 Has fallado 5 veces 😅. ¡Vamos a intentarlo de nuevo!");
        setTimeout(() => reiniciarJuego(true), 2500);
      }
    }
  };

  const handleReiniciarClick = () => {
    console.log("handleReiniciarClick fired");
    reiniciarJuego(true);
  };

  return (
    <div className="numeros-container">
      <div className="numeros-card">
        <h1>✨ Números en LSC 🔢</h1>
        <p>
          Aprende jugando y diviértete adivinando los números en lengua de señas colombiana.
        </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/d9HWbqY0TCM?si=nuisR0ulsXuMnqqt"
          title="Video de números en LSC"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className="juego-numeros">
          <h2>
            🎯 ¿Cuál es la seña del número <span>{numeroActual.nombre}</span>?
          </h2>
          <p>Selecciona la imagen correcta 👇</p>

          <div className="opciones-grid">
            {numeros.map((num, index) => (
              <img
                key={index}
                src={num.imagen}
                alt={`Seña del número ${num.nombre}`}
                onClick={() => verificarRespuesta(num.nombre)}
                className="opcion-imagen"
              />
            ))}
          </div>

          <p className={`mensaje ${mensaje.includes("Excelente") ? "acierto" : "error"}`}>
            {mensaje}
          </p>

          <div className="estadisticas">
            <p className="puntos">⭐ Puntos: {puntos}</p>
            <p className="fallos">❌ Fallos: {fallos}/5</p>
          </div>

          <button
            type="button"
            className="reiniciar-btn"
            onClick={handleReiniciarClick}
          >
            🔄 Nuevo número
          </button>

          <a href="/courses" className="volver-btn">
            ← Volver a cursos
          </a>
        </div>
      </div>
    </div>
  );
}
