export default function CursoSaludo() {
  return (
    <div className="curso-container">
      <div className="curso-card">
        <h1>Saludos Básicos 🤝</h1>
        <p>Aprende a saludar y despedirte usando Lengua de Señas Colombiana (LSC).</p>

         <iframe width="560" height="315" src="https://www.youtube.com/embed/QH_AIJA72jQ?si=VhNRnhy7bO1YEejc" 
         title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>        
        <a href="/">← Volver a cursos</a>
      </div>
    </div>
  );
}
