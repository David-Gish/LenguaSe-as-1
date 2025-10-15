export default function About() {
  return (
    <div className="about-page">
      
      {/* === BANNER SOBRE LSC === */}
      <div className="banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1 className="banner-title">Lengua de Señas Colombiana 🇨🇴</h1>
          <p className="banner-text">
            Una lengua visual y corporal que une culturas, promueve la inclusión y celebra la identidad de la comunidad sorda en Colombia.
          </p>
        </div>
      </div>

      {/* === CONTENIDO PRINCIPAL === */}
      <div className="content">
        <h1 className="title">🧏‍♀️ Sobre la Lengua de Señas Colombiana (LSC)</h1>
        <p className="text">
          La <strong>Lengua de Señas Colombiana (LSC)</strong> es el medio de comunicación natural de la comunidad sorda en Colombia y fue reconocida oficialmente mediante la 
          <strong> Ley 324 de 1996</strong>, durante el gobierno de Ernesto Samper Pizano.
          <br /><br />
          Su carácter visual y corporal permite la interacción comunicativa a través de gestos, movimientos faciales y corporales dentro de un espacio determinado.
          Desde 1984, la comunidad sorda comenzó a interesarse por el estudio, la enseñanza y la difusión de su lengua.
          <br /><br />
          La <strong>Federación Nacional de Sordos de Colombia (Fenascol)</strong> desarrolló las primeras cartillas de aprendizaje, en las que inicialmente se denominaba “lenguaje manual colombiano”.
          <br /><br />
          Posteriormente, y con el apoyo de investigaciones académicas y universitarias, se consolidó la denominación <strong>Lengua de Señas Colombiana</strong>, reconociéndose como una lengua con estructura propia y completa.
        </p>
      </div>

    </div>
  );
}

