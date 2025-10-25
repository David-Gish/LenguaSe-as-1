export default function About() {
  return (
    <div className="about-page">
      
     {/* === BANNER SOBRE LSC === */}
      <div className="banner">
        <h1 className="banner-title">Lengua de Señas Colombiana (LSC)</h1>
      </div>

              {/* === TÍTULO PRINCIPAL (afuera del recuadro) === */}
            <h1 className="main-title">🧏‍♀️ Lengua de Señas Colombiana (LSC)</h1>

            {/* === CONTENIDO PRINCIPAL === */}
            <div className="content-box">
              <p className="text">
                La <strong>Lengua de Señas Colombiana (LSC)</strong> es el medio natural de comunicación 
                de la comunidad sorda en Colombia. Reconocida por la <strong>Ley 324 de 1996</strong>, 
                su forma de expresión se basa en movimientos manuales, gestos y expresiones faciales 
                dentro de un espacio visual.
                <br /><br />
                Gracias al impulso de la <strong>Federación Nacional de Sordos de Colombia (Fenascol)</strong> 
                y al apoyo de investigaciones académicas, la LSC se consolidó como una lengua con estructura 
                propia, gramática y valor cultural.
              </p>

              {/* === VIDEO === */}
              <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/G6LVmXkmFQE?si=CIxIHEUn2M0aOZfs" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                 allowfullscreen>
                  
                 </iframe>
                <p className="video-caption">
                  🎬 Introducción a la Lengua de Señas Colombiana (LSC)
                </p>
              </div>
            </div>



        {/* === PIE DE PÁGINA === */}
      <footer className="footer">
        <p>© 2025 Proyecto LSC Colombia — Promoviendo la inclusión y el aprendizaje viso-gestual.</p>
      </footer>
    </div>

    
  );
}

