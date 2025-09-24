 // --- Cambiar enlace activo ---
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      });
    });

    // --- Animación iframe al cargar ---
    const iframe = document.querySelector("iframe");
    iframe.addEventListener("load", () => {
      iframe.classList.add("loaded");
    });

