function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

let numero1 = generarNumeroAleatorio();
let numero2 = generarNumeroAleatorio();
let respuestaCorrecta = numero1 + numero2;
let respuestaUsuario;

do {
    respuestaUsuario = parseInt(prompt(`¿Cuál es la suma de ${numero1} + ${numero2}?`));
    if (respuestaUsuario !== respuestaCorrecta) {
        alert("Incorrecto, intente de nuevo.");
    }
} while (respuestaUsuario !== respuestaCorrecta);

alert("¡Correcto! La respuesta es " + respuestaCorrecta);