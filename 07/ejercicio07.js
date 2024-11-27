let conteoPares = 0;
let entrada;

do {
    entrada = prompt("Ingrese un número (o 'stop' para terminar):");
    
    if (entrada.toLowerCase() === 'stop') {
        break;
    }
    
    let numero = parseInt(entrada);
    
    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            alert("Par");
            conteoPares++;
        } else {
            alert("Impar");
        }
    } else {
        alert("Entrada no válida. Por favor, ingrese un número o 'stop' para terminar.");
    }
} while (true);

alert(`El número de números pares ingresados es: ${conteoPares}`);