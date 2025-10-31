import React, { useState, useEffect } from "react";
import "./ahorcados.css";

const frases = [
  { texto: "INCLUSION", pista: "Participar sin excluir a nadie" },
  { texto: "SEÑAS", pista: "Forma visual de comunicarse" },
  { texto: "COMUNIDAD", pista: "Grupo con intereses comunes" },
  { texto: "CULTURA", pista: "Costumbres y tradiciones de un pueblo" },
  { texto: "ACCESO", pista: "Facilidad para usar o entender algo" },
  { texto: "BILINGUE", pista: "Persona que usa dos idiomas" },
  { texto: "IDENTIDAD", pista: "Sentido de pertenencia a un grupo" },
  { texto: "INTERPRETE", pista: "Traduce entre dos lenguas" },
  { texto: "INCLUSION EDUCATIVA", pista: "Educación para todos sin exclusión" },
  { texto: "LENGUA DE SEÑAS", pista: "Idioma visual de la comunidad sorda" }
];


const maxIntentos = 6;

export default function Ahorcado() {
  const [frase, setFrase] = useState({ texto: "", pista: "" });
  const [letrasAdivinadas, setLetrasAdivinadas] = useState([]);
  const [intentos, setIntentos] = useState(maxIntentos);
  const [estado, setEstado] = useState("jugando"); // “jugando”, “ganado”, “perdido”

  useEffect(() => {
    iniciarJuego();
  }, []);

  function iniciarJuego() {
    const idx = Math.floor(Math.random() * frases.length);
    setFrase(frases[idx]);
    setLetrasAdivinadas([]);
    setIntentos(maxIntentos);
    setEstado("jugando");
  }

  function manejarLetra(letra) {
    if (estado !== "jugando") return;

    const may = letra.toUpperCase();
    if (letrasAdivinadas.includes(may)) return;

    setLetrasAdivinadas((prev) => [...prev, may]);

    if (!frase.texto.includes(may)) {
      const nuevos = intentos - 1;
      setIntentos(nuevos);
      if (nuevos <= 0) {
        setEstado("perdido");
      }
    } else {
      const todas = frase.texto
        .split("")
        .every((ch) => ch === " " || letrasAdivinadas.includes(ch) || ch === may);
      if (todas) {
        setEstado("ganado");
      }
    }
  }

  const mostrarFrase = frase.texto
    .split("")
    .map((ch) => {
      if (ch === " ") return " ";
      if (letrasAdivinadas.includes(ch)) return ch;
      return "_";
    })
    .join(" ");

  const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");

  return (
    <div className="contenedor-ahorcado">
      <h1>🎯 Juego del Ahorcado</h1>
      <div className="dibujo-ahorcado">
        <DibujoAhorcado errores={maxIntentos - intentos} />
      </div>

      <div className="pista">
        <strong>Pista:</strong> {frase.pista}
      </div>

      <div className="palabra-oculta">{mostrarFrase}</div>
      <div className="info">Intentos restantes: {intentos}</div>

      {estado === "ganado" && (
        <div className="mensaje ganador">¡Felicidades! Ganaste 🎉</div>
      )}
      {estado === "perdido" && (
        <div className="mensaje perdedor">Perdiste 😢. La frase era: {frase.texto}</div>
      )}

      <div className="letras">
        {letras.map((letra) => (
          <button
            key={letra}
            onClick={() => manejarLetra(letra)}
            disabled={letrasAdivinadas.includes(letra) || estado !== "jugando"}
            className="letra-btn"
          >
            {letra}
          </button>
        ))}
      </div>

            <button className="reiniciar-btn" onClick={iniciarJuego}>
          🔄 Reiniciar
        </button>
    </div>
  );
}

function DibujoAhorcado({ errores }) {
  return (
    <div className="partes-ahorcado">
      <div className={`parte cabeza ${errores > 0 ? "visible" : ""}`} />
      <div className={`parte cuerpo ${errores > 1 ? "visible" : ""}`} />
      <div className={`parte brazo-izq ${errores > 2 ? "visible" : ""}`} />
      <div className={`parte brazo-der ${errores > 3 ? "visible" : ""}`} />
      <div className={`parte pierna-izq ${errores > 4 ? "visible" : ""}`} />
      <div className={`parte pierna-der ${errores > 5 ? "visible" : ""}`} />
    </div>
  );
}
