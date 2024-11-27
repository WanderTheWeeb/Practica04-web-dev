// ===================================
// Desarrollar los siguientes programas:


// ============== Programa 01 ==============
//  Calcular y mostrar el producto de una lista variable de números enteros +
// =========================================
let producto = 1;
let numero;

do {
    numero = parseInt(prompt("Ingrese un número positivo (ingrese -1 para terminar):"));
    if (numero > 0) {
        producto *= numero;
    }
} while (numero !== -1);

alert(`El producto de los números ingresados es: ${producto}`);

// ============== Programa 02 ==============
//  Calcular y mostrar la raíz cuadrada de una lista variable de números enteros positivos ingresados por el usuario
// =========================================

do {
    numero = parseInt(prompt("Ingrese un número entero positivo (ingrese -1 para terminar):"));
    if (numero > 0) {
        alert(`La raíz cuadrada de ${numero} es: ${Math.sqrt(numero)}`);
    }
} while (numero !== -1);


// ============== Programa 03 ==============
//  Juego de adivinar un número aleatorio entre 1 y 10
// =========================================
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let adivinanza;

do {
    adivinanza = parseInt(prompt("Adivine el número (entre 1 y 10):"));
    if (adivinanza !== numeroAleatorio) {
        alert("Incorrecto, intente de nuevo.");
    }
} while (adivinanza !== numeroAleatorio);

alert("¡Correcto! Adivinaste el número.");