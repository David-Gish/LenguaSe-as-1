
       const preguntas = [
      { img: "./img/mano-cinco.jpg", respuesta: 5, opciones: [1, 2, 5, 6, 8] },
      { img: "./img//mano-tres.jpg", respuesta: 3, opciones: [1, 3, 5, 7, 2] },
      { img: "./img/mano-siete.jpg", respuesta: 7, opciones: [2, 4, 7, 9,0] },
      { img: "./img/uno.jpg", respuesta: 1, opciones: [0, 1, 6, 8, 5] },
      { img: "./img/mano-nueve.jpg", respuesta: 9, opciones: [3, 6, 8, 9, 0] },
      { img: "./img/mano-ocho.jpg", respuesta: 8, opciones: [2, 4, 8, 6, 9] }
    ];
     let nivel = 0;
    let puntuacion = 0;
    let intentos = 3;

    function cargarPregunta() {
      if (nivel >= preguntas.length) {
        alert("🏁 Juego terminado. Tu puntuación fue: " + puntuacion);
        reiniciarJuego();
        return;
      }

      intentos = 3;
      actualizarIntentos();

      const pregunta = preguntas[nivel];
      document.getElementById("imagenSenia").src = pregunta.img;
      document.getElementById("nivel").textContent = "Nivel " + (nivel + 1);

      const opcionesDiv = document.getElementById("opciones");
      opcionesDiv.innerHTML = "";

      pregunta.opciones.forEach(opcion => {
        const btn = document.createElement("button");
        btn.textContent = opcion;
        btn.onclick = () => verificarRespuesta(opcion);
        opcionesDiv.appendChild(btn);
      });
    }

    function verificarRespuesta(seleccion) {
      const correcta = preguntas[nivel].respuesta;

      if (seleccion === correcta) {
        alert("✅ ¡Correcto!");
        puntuacion += 10;
        nivel++;
        document.getElementById("puntuacion").textContent = "Puntuación: " + puntuacion;
        cargarPregunta();
      } else {
        intentos--;
        actualizarIntentos();

        if (intentos <= 0) {
          alert("❌ Fallaste 3 veces. Juego terminado.\nTu puntuación fue: " + puntuacion);
          reiniciarJuego();
        } else {
          alert("Incorrecto. Te quedan " + intentos + " intento(s).");
        }
      }
    }

    function actualizarIntentos() {
      document.getElementById("intentos").textContent = "Intentos restantes: " + intentos;
    }

    function reiniciarJuego() {
      nivel = 0;
      puntuacion = 0;
      intentos = 3;
      document.getElementById("puntuacion").textContent = "Puntuación: 0";
      cargarPregunta();
    }
    

    window.onload = cargarPregunta;