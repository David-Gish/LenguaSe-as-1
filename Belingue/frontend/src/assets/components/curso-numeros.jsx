export default function CursoNumeros() {
  return (
    <div className="numeros-container">
      <div className="numeros-card">
        <h1>Números 🔢</h1>
        <p>Aprende a contar del 1 al 10 en Lengua de Señas Colombiana (LSC).</p>

        {/* Video de ejemplo */}
       <iframe width="560" height="315" src="https://www.youtube.com/embed/d9HWbqY0TCM?si=nuisR0ulsXuMnqqt"
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        </iframe>

        {/* Botón para volver */}
        <a href="/">← Volver a cursos</a>
      </div>
    </div>
  );
}
