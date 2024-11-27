const n = parseInt(prompt("Ingrese el valor de n:"));
let sumaReciprocos = 0;

for (let i = 1; i <= n; i++) {
    sumaReciprocos += 1 / i;
}

alert(`La suma de los recíprocos de los primeros ${n} números naturales es: ${sumaReciprocos}`);