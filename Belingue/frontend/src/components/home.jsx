export default function Home() {
  return (

    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-300 flex flex-col items-center text-center px-6 py-12">
      {/* === BANNER SOBRE LSC === */}
      <div className="banner">
        <h1 className="banner-title">Lengua de Señas Colombiana (LSC)</h1>
      </div>
      {/* === SECCIÓN HERO === */}
          <section className="relative w-full max-w-6xl mb-20">
          <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl py-16 px-8 md:px-20 flex flex-col items-center text-center">
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-6 drop-shadow-lg">
              Lengua de Señas Colombiana 🇨🇴
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              La <strong>Lengua de Señas Colombiana (LSC)</strong> es una manifestación viva de la cultura sorda,
              una forma única de expresión que promueve la inclusión, el respeto y la diversidad.
              Aprende, comparte y comunica en una lengua que une corazones más allá del sonido.
            </p>
          </div>
        </section>


      {/* === TARJETAS DE OBJETIVOS === */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 w-full max-w-6xl">
        <div className="card">
          <h3>🤝 Inclusión</h3>
          <p>
            La LSC rompe barreras comunicativas y fomenta una convivencia basada
            en la empatía y el reconocimiento mutuo entre sordos y oyentes.
          </p>
        </div>
        <br></br>
        <br></br>
        <div className="card">
          <h3>📚 Educación</h3>
          <p>
            Promovemos el aprendizaje accesible con materiales didácticos visuales
            y estrategias interactivas que facilitan el conocimiento de la lengua.
          </p>
        </div>
        <br></br>
        <br></br>
        <div className="card">
          <h3>🌍 Cultura</h3>
          <p>
            La LSC es patrimonio lingüístico de Colombia y símbolo de identidad
            de una comunidad que construye inclusión desde la comunicación.
          </p>
        </div>
        <br></br>
      </section>

      {/* === INFORMACIÓN SOBRE LSC === */}
      <section className="info-section">
        <h2>¿Qué es la Lengua de Señas Colombiana?</h2>
        <p>
          La <strong>LSC</strong> fue reconocida oficialmente mediante la <strong>Ley 324 de 1996</strong>,
          que garantiza el derecho de las personas sordas a comunicarse en su lengua natural.
          Es una lengua <strong>viso-gestual y espacial</strong>, que utiliza movimientos de las manos,
          expresiones faciales y posturas corporales para construir significados.
        </p>
        <p>
          A diferencia del español, la LSC posee su propia <strong>gramática y sintaxis</strong>,
          lo que la convierte en un sistema lingüístico completo. Su enseñanza y difusión
          han sido impulsadas por la <strong>Federación Nacional de Sordos de Colombia (FENASCOL)</strong>,
          fortaleciendo el reconocimiento de la comunidad sorda como un grupo cultural y lingüístico.
        </p>
      </section>

      {/* === LENGUAS DE SEÑAS EN EL MUNDO === */}
      <section className="info-section border-l-8 border-yellow-500">
        <h2>Lenguas de Señas en el Mundo</h2>
        <p>
          Existen más de <strong>300 lenguas de señas</strong> en todo el planeta, cada una
          con sus particularidades culturales y lingüísticas. No hay una lengua de señas universal,
          sino una rica diversidad que refleja la identidad de cada comunidad.
        </p>
        <p>
          Estas lenguas representan la <strong>diversidad cultural y lingüística</strong> del mundo sordo,
          reafirmando que la comunicación no depende del sonido, sino de la expresión, el cuerpo
          y la comprensión mutua.
        </p>
      </section>

      {/* === FOOTER === */}
      <footer className="mt-20 text-gray-600 text-sm">
        <p>© 2025 Plataforma LSC | Promoviendo inclusión y comunicación sin barreras</p>
      </footer>
    </div>
  );
}
