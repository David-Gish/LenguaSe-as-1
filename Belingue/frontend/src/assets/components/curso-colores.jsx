export default function CursoColores() {
  return (
    <div className="colores-container">
      <div className="colores-card">
        <h1>Colores 🎨</h1>
        <p>Identifica y expresa los colores más comunes en Lengua de Señas Colombiana (LSC).</p>

        {/* Video de ejemplo */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/aQGTQ6Wglns?si=0O_0ioQG-TUUUIbE" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        {/* Botón para volver */}
        <a href="/">← Volver a cursos</a>
      </div>
    </div>
  );
}
