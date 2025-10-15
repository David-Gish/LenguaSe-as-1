export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col items-center text-center px-6 py-12">
      
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

      {/* === HERO === */}
      <section className="mb-16 mt-10">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4 drop-shadow-md">
          Bienvenido a la Plataforma LSC 🇨🇴
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Aprende la <strong>Lengua de Señas Colombiana (LSC)</strong> con cursos interactivos,
          actividades y recursos diseñados para fortalecer la comunicación y la inclusión social.
        </p>
      </section>

      {/* === OBJETIVOS === */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 w-full max-w-6xl px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">🤝 Inclusión</h3>
          <p className="text-gray-600">
            Promovemos la comunicación accesible entre oyentes y personas sordas,
            fomentando una sociedad más justa y empática.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">📚 Aprendizaje</h3>
          <p className="text-gray-600">
            Ofrecemos cursos interactivos, material visual y herramientas pedagógicas
            para aprender de forma dinámica la LSC.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">🎯 Evaluación</h3>
          <p className="text-gray-600">
            Evalúa tu progreso y obtén retroalimentación personalizada para mejorar
            tus habilidades comunicativas.
          </p>
        </div>
      </section>

      {/* === INFORMACIÓN SOBRE LA LSC === */}
      <section className="bg-white shadow-xl rounded-2xl p-10 max-w-5xl border-l-8 border-blue-600 text-justify mb-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          Lengua de Señas Colombiana (LSC)
        </h2>
        <p className="text-gray-700 leading-relaxed">
          La <strong>Lengua de Señas Colombiana (LSC)</strong> es el medio de comunicación
          natural de la comunidad sorda en Colombia. Fue reconocida oficialmente mediante
          la <strong>Ley 324 de 1996</strong>, que destaca su importancia cultural, lingüística
          y educativa dentro del país.
          <br /><br />
          La LSC es una lengua <strong>visual y gestual</strong>, basada en movimientos de las manos,
          expresiones faciales y posiciones corporales que permiten construir significados
          y transmitir ideas. No es universal, ni una traducción directa del español,
          sino una lengua completa con su propia <strong>gramática, sintaxis y vocabulario</strong>.
          <br /><br />
          Desde 1984, la comunidad sorda, junto con la <strong>Federación Nacional de Sordos
          de Colombia (Fenascol)</strong>, ha trabajado en su enseñanza y difusión, logrando
          que sea reconocida como una lengua legítima y símbolo de identidad cultural.
        </p>
      </section>

      {/* === DIFERENTES LENGUAS DE SEÑAS EN EL MUNDO === */}
      <section className="bg-white shadow-xl rounded-2xl p-10 max-w-5xl border-l-8 border-yellow-500 text-justify mb-16">
        <h2 className="text-3xl font-bold text-yellow-600 mb-4 text-center">
          🌍 Tipos de Lenguas de Señas en el Mundo
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Aunque muchas personas piensan que existe una única “lengua de señas universal”,
          en realidad hay <strong>más de 300 lenguas de señas diferentes</strong> en todo el mundo.
          Cada comunidad sorda desarrolla su propia lengua, adaptada a su cultura y entorno.
        </p>
        <br />
        <ul className="list-disc list-inside text-gray-700 leading-relaxed text-left">
          <li><strong>ASL (American Sign Language):</strong> Utilizada en Estados Unidos y Canadá.</li>
          <li><strong>BSL (British Sign Language):</strong> Empleada en Reino Unido.</li>
          <li><strong>LSM (Lengua de Señas Mexicana):</strong> Lengua oficial de la comunidad sorda en México.</li>
          <li><strong>LSC (Lengua de Señas Colombiana):</strong> Propia de Colombia, reconocida oficialmente.</li>
          <li><strong>LSCh (Lengua de Señas Chilena):</strong> Utilizada en Chile, también reconocida por ley.</li>
        </ul>
        <br />
        <p className="text-gray-700 leading-relaxed">
          Cada lengua de señas es una <strong>expresión única de identidad y cultura</strong>,
          demostrando la riqueza y diversidad de las comunidades sordas del mundo.
        </p>
      </section>

      {/* === FOOTER === */}
      <footer className="bg-blue-800 w-full text-white py-6 text-center rounded-t-3xl shadow-inner">
        <p className="text-sm">
          © {new Date().getFullYear()} LSC Colombia — Promoviendo la educación, la inclusión
          y la cultura de la comunidad sorda.
        </p>
      </footer>
    </div>
  );
}
