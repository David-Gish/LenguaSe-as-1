import React from "react";
import "./lengueje.css";

export default function LenguasSenas() {
  return (
    <div className="lenguas-senas">
    {/* === BANNER SOBRE LSC === */}
      <div className="banner">
        <h1 className="banner-title">Lengua de Señas del Mundo</h1>
      </div>

      {/* === ENCABEZADO === */}
      <header className="header">
        <h1>🌍 Lenguas de Señas del Mundo</h1>
        <p>
          Conoce la diversidad de las lenguas de señas y su importancia cultural y educativa 
          en las comunidades sordas del planeta.
        </p>
      </header>

      {/* === CONTENIDO PRINCIPAL === */}
      <main className="content">
        <div className="card">
          <img
            src="https://i.pinimg.com/474x/3f/31/52/3f3152c48a1f0686e88dd8ec62679b99.jpg"
            alt="Lengua de Señas Americana (ASL)"
          />
          <h2>Lengua de Señas Americana (ASL)</h2>
          <p>
            La ASL es una de las lenguas de señas más conocidas a nivel mundial. 
            Se utiliza principalmente en Estados Unidos y Canadá, y cuenta con una 
            gramática visual única. Su difusión ha influido en otras lenguas de señas 
            debido a su presencia en medios educativos y tecnológicos.
          </p>
        </div>

        <div className="card">
          <img
            src="https://arcadialumenize.com/wp-content/uploads/2023/11/BSL-Fingerspelling-Chart.webp"
            alt="Lengua de Señas Británica (BSL)"
          />
          <h2>Lengua de Señas Británica (BSL)</h2>
          <p>
            La BSL se emplea en el Reino Unido y posee una estructura gramatical 
            completamente diferente del inglés. Fue reconocida oficialmente como 
            lengua independiente en 2003, fortaleciendo su enseñanza y la identidad 
            cultural de la comunidad sorda británica.
          </p>
        </div>

        <div className="card">
          <img
            src="https://fg.ull.es/noticias/wp-content/uploads/sites/2/2017/10/LSE.jpg"
            alt="Lengua de Señas Española (LSE)"
          />
          <h2>Lengua de Señas Española (LSE)</h2>
          <p>
            En España, la LSE tiene reconocimiento legal desde 2007. 
            Es una lengua viso-gestual con variaciones regionales, 
            utilizada en la educación, la televisión y los servicios públicos 
            para promover la inclusión de la comunidad sorda.
          </p>
        </div>

      </main>
        {/* === SECCIÓN ISL === */}
        <section className="isl-section">
          <h2>🤝 Lengua de Señas Internacional (ISL)</h2>
          <p>
            La <strong>ISL (International Sign Language)</strong> se usa principalmente en eventos
            internacionales para facilitar la comunicación entre personas sordas de distintos países.
            No sustituye a las lenguas nacionales, sino que actúa como un <strong>puente lingüístico</strong>
            en encuentros globales y conferencias internacionales.
          </p>
          <img
            src="https://planlea.edu.do/wp-content/uploads/2021/09/lengua-de-sen%CC%83as-amor.jpg"
            alt="Lengua de Señas Internacional"
            className="isl-img"
          />
        </section>

        {/* === SECCIÓN COMUNIDAD SORDA GLOBAL === */}
        <section className="global-section">
          <h2>🌐 Comunidad Sorda Global</h2>
          <p>
            La comunidad sorda global comparte valores, cultura y experiencias a través de diferentes
            lenguas de señas. Gracias a la tecnología y las redes sociales, hoy es posible conectarse,
            aprender e intercambiar conocimientos entre personas sordas de todo el mundo.
          </p>
          <img
            src="https://www.plataformaong.org/ARCHIVO/fotografias/noticias/1632312603_noticia-web-1.png"
            alt="Comunidad Sorda Global"
            className="global-img"
          />
        </section>


      {/* === PIE DE PÁGINA === */}
         <footer>
          <p>© 2025 LSC Colombia | Todos los derechos reservados</p>
        </footer>

    </div>
  );
}
