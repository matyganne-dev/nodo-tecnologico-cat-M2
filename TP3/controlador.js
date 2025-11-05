/* programa principal */
import { calcularPrecioVenta, calcularPromedio, calcularNota } from './modelo.js';

//Ejercicio Nro. 13:

let importe = Number(prompt(`ingrese el precio del producto:`));
let margenGanancia = Number(prompt(`ingrese margen de ganancia que se aplicara sobre el producto:`));
let precioVenta = calcularPrecioVenta(importe, margenGanancia);
console.log(`Precio de venta: $${precioVenta.toFixed(2)}`);





//Ejercicio Nro. 14:

let nota1 = Number(prompt(`Ingrese primer nota:`));
let nota2 = Number(prompt(`Ingrese segunada nota:`));
let nota3 = Number(prompt(`Ingrese tercer nota:`));
let promedio = calcularPromedio(nota1, nota2, nota3);
console.log(`promedio de ${nota1}+${nota2}+${nota3} = ${promedio.toFixed(2)}`);




//Ejercicio Nro. 15:

let notaPromedio = Number(prompt("Ingrese el promedio (0-10):"));
let resultado = calcularNota(notaPromedio);
console.log(`Promedio: ${notaPromedio} - ${resultado}`);


//Ejercicio Nro. 16:
//Ejercicio Nro. 17:
//Ejercicio Nro. 18:
//Ejercicio Nro. 19:
//Ejercicio Nro. 20:
//Ejercicio Nro. 21:
//Ejercicio Nro. 22:
//Ejercicio Nro. 23:
//Ejercicio Nro. 24:
//Ejercicio Nro. 25: