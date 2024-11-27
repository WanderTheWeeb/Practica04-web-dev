const year = parseInt(prompt("Ingrese un año:"));

const esBisiesto = (year) => {
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    return isLeap;
};

if (esBisiesto(year)) {
    alert(`${year} es un año bisiesto.`);
} else {
    alert(`${year} no es un año bisiesto.`);
}