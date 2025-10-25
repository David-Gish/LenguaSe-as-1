import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Courses() {
  const navigate = useNavigate();
  const [unlockedLevel, setUnlockedLevel] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);

  // ✅ Inicializa el nivel guardado o lo crea si no existe
  useEffect(() => {
    const savedLevel = parseInt(localStorage.getItem("nivelDesbloqueado"));
    if (savedLevel && savedLevel <= 3) {
      setUnlockedLevel(savedLevel);
    } else {
      localStorage.setItem("nivelDesbloqueado", 1);
      setUnlockedLevel(1);
    }
  }, []);

  const courses = [
    {
      id: 1,
      title: "Saludos Básicos 🤝",
      description: "Aprende a saludar y despedirte usando LSC.",
      route: "/curso-saludo",
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
    },
  ];

  // ✅ Cerrar sesión
  const handleLogout = () => {
    alert("👋 Se cerró la sesión correctamente");
    navigate("/");
  };

  // ✅ Completar curso y desbloquear el siguiente + confeti
  const handleCompleteCourse = (id) => {
    if (id === unlockedLevel && id < courses.length) {
      const nextLevel = id + 1;
      setUnlockedLevel(nextLevel);
      localStorage.setItem("nivelDesbloqueado", nextLevel);

      // Animación de desbloqueo
      const card = document.querySelector(`.course-card[data-id='${nextLevel}']`);
      if (card) {
        card.classList.add("unlocked-flash");
        setTimeout(() => card.classList.remove("unlocked-flash"), 1000);
      }

      // 🎊 Mostrar confeti temporalmente
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2500);

      alert(`🎉 ¡Curso completado! Se ha desbloqueado el nivel ${nextLevel}.`);
    } else if (id === courses.length) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2500);
      alert("🎊 ¡Has completado todos los cursos disponibles!");
    }
  };

  // ✅ Reiniciar progreso
  const handleResetProgress = () => {
    if (window.confirm("¿Seguro que deseas reiniciar tu progreso?")) {
      localStorage.setItem("nivelDesbloqueado", 1);
      setUnlockedLevel(1);
      alert("🔄 Progreso reiniciado. ¡Comienza desde el primer nivel!");
    }
  };

  return (
    <div className="courses-page">
      {/* 🎊 Confeti animado */}
      {showConfetti && (
        <div className="confetti-container">
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i} className="confetti">
              🎉
            </span>
          ))}
        </div>
      )}

      <header className="courses-header">
        <h1>📚 Cursos de Lengua de Señas Colombiana 🇨🇴</h1>
        <p>Completa cada módulo y desbloquea el siguiente nivel de aprendizaje.</p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(unlockedLevel / courses.length) * 100}%` }}
          ></div>
        </div>
            <div className="progress-info">
              <span className="progress-text">
                Nivel {unlockedLevel} de {courses.length}
              </span>
            </div>


        </header>

      <section className="courses-grid">
        {courses.map((course) => {
          const locked = course.id > unlockedLevel;
          return (
            <div
              key={course.id}
              data-id={course.id}
              className={`course-card ${locked ? "locked" : "unlocked"}`}
            >
              <h2>{course.title}</h2>
              <p>{course.description}</p>

              {!locked ? (
                <div className="buttons">
                  <button
                    onClick={() => navigate(course.route)}
                    className="btn-view"
                  >
                    🚀 Ver curso
                  </button>
                  <button
                    onClick={() => handleCompleteCourse(course.id)}
                    className="btn-complete"
                  >
                    ✅ Marcar completado
                  </button>
                </div>
              ) : (
                <div className="locked-overlay">
                  <span className="lock-icon">🔒</span>
                  <p>Completa el nivel anterior</p>
                </div>
              )}
            </div>
          );
        })}
      </section>

        <div className="bottom-buttons">
        <button
            onClick={() => {
              localStorage.removeItem("nivelDesbloqueado");
              setUnlockedLevel(1);
              alert("🔄 Progreso reiniciado correctamente.");
            }}
            className="btn-reset"
          >
            🔄 Reiniciar progreso
          </button>


          <button onClick={handleLogout} className="btn-logout">
            🚪 Cerrar sesión
          </button>
        </div>

    </div>
  );
}
