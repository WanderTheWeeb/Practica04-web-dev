
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let mesIngresado = prompt("Ingrese el nombre de un mes:");

let indiceMes = meses.indexOf(mesIngresado);

indiceMes !== -1 
    ? alert(`El mes de ${mesIngresado} tiene ${dias[indiceMes]} días.`) 
    : alert("El nombre del mes ingresado no es válido.");