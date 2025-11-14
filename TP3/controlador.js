/* programa principal */
import { calcularPrecioVenta, calcularPromedio, calcularNota, calcularTasa } from './modelo.js';
import { calcularImporteBaseAgua, tasaSubsuelo, tasaFiscalizacionENRE } from './modelo.js';
import { calcularDosisInsulina, contarVocales, contarConsonantes, contieneDosS, contarEspacios, VerificarCadena } from './modelo.js';


//Ejercicio Nro. 13:
console.log("\nEjercicio Nro. 13:\n");


let importe = Number(prompt(`ingrese el precio del producto:`));
let margenGanancia = Number(prompt(`ingrese margen de ganancia que se aplicara sobre el producto:`));
let precioVenta = calcularPrecioVenta(importe, margenGanancia);
console.log(`Precio de venta: $${precioVenta.toFixed(2)}`);





//Ejercicio Nro. 14:
console.log("\nEjercicio Nro. 14:\n");


let nota1 = Number(prompt(`Ingrese primer nota:`));
let nota2 = Number(prompt(`Ingrese segunada nota:`));
let nota3 = Number(prompt(`Ingrese tercer nota:`));
let promedio = calcularPromedio(nota1, nota2, nota3);
console.log(`promedio de ${nota1}+${nota2}+${nota3} = ${promedio.toFixed(2)}`);




//Ejercicio Nro. 15:
console.log("\nEjercicio Nro. 15:\n");


let notaPromedio = Number(prompt("Ingrese el promedio (0-10):"));
let resultado = calcularNota(notaPromedio);
console.log(`Promedio: ${notaPromedio} - ${resultado}`);



//Ejercicio Nro. 16:
console.log("\nEjercicio Nro. 16:\n");


const categoria = prompt(
    `ELIJA EL TIPO DE BEBIDA:
1 - Agua en envases plásticos (5‰)
2 - Agua en envases retornables (1‰)
3 - Gaseosas azucaradas en envases plásticos (7‰)
4 - Gaseosas azucaradas en envases retornables (2‰)
5 - Bebidas energéticas (15‰)
6 - Otras bebidas (1‰)
Ingrese el número de categoría:`
);

const importeBase = Number(prompt("Ingrese el importe base de la bebida:"));

// Llamar a la función con los datos ingresados
const impuesto = calcularTasa(parseFloat(importeBase), parseInt(categoria));

// Mostrar el resultado al usuario
console.log(`El impuesto a pagar es: $${impuesto.toFixed(2)}`);




//Ejercicio Nro. 17:
console.log("\nEjercicio Nro. 17:\n");

console.log("\nImporte base a pagar por el cliente según el esquema tarifario");
let resultadoCalculoAgua1 = calcularImporteBaseAgua(20);
console.log(`para 20 mts. cubicos $${resultadoCalculoAgua1}`);

let resultadoCalculoAgua2 = calcularImporteBaseAgua(49);
console.log(`para 49 mts. cubicos $${resultadoCalculoAgua2}`);

let resultadoCalculoAgua3 = calcularImporteBaseAgua(68);
console.log(`para 68 mts. cubicos $${resultadoCalculoAgua3}`);

let resultadoCalculoAgua4 = calcularImporteBaseAgua(99);
console.log(`para 99 mts. cubicos $${resultadoCalculoAgua4}`);




//Ejercicio Nro. 18: // se reutilizo los importes anteriores del ejercicio 17
console.log("\nEjercicio Nro. 18:\n");


console.log("\nTasa de subsuelo");
let resultadoTasaSubsuelo1 = tasaSubsuelo(resultadoCalculoAgua1);
console.log(`Tasa de Subsuelo: $${resultadoTasaSubsuelo1.toFixed(2)}`);

let resultadoTasaSubsuelo2 = tasaSubsuelo(resultadoCalculoAgua2);
console.log(`Tasa de Subsuelo: $${resultadoTasaSubsuelo2.toFixed(2)}`);

let resultadoTasaSubsuelo3 = tasaSubsuelo(resultadoCalculoAgua3);
console.log(`Tasa de Subsuelo: $${resultadoTasaSubsuelo3.toFixed(2)}`);

let resultadoTasaSubsuelo4 = tasaSubsuelo(resultadoCalculoAgua4);
console.log(`Tasa de Subsuelo: $${resultadoTasaSubsuelo4.toFixed(2)}`);




//Ejercicio Nro. 19: este ejercicion tambien esta relacionado con el resultado del eje 17
console.log("\nEjercicio Nro. 19:\n");

console.log("\nTasa de Fiscalización ENRE ");
let tasaENRE1 = tasaFiscalizacionENRE(resultadoCalculoAgua1);
console.log(`Para 20m³ - Tasa ENRE: $${tasaENRE1.toFixed(2)}`);
let tasaENRE2 = tasaFiscalizacionENRE(resultadoCalculoAgua2);
console.log(`Para 49m³ - Tasa ENRE: $${tasaENRE2.toFixed(2)}`);
let tasaENRE3 = tasaFiscalizacionENRE(resultadoCalculoAgua3);
console.log(`Para 68m³ - Tasa ENRE: $${tasaENRE3.toFixed(2)}`);
let tasaENRE4 = tasaFiscalizacionENRE(resultadoCalculoAgua4);
console.log(`Para 99m³ - Tasa ENRE: $${tasaENRE4.toFixed(2)}`);




//Ejercicio Nro. 20:
console.log("\nEjercicio Nro. 20:\n");

//Tipo 1, glucosa alta
let dosis1 = calcularDosisInsulina(200, 70, "Tipo 1");
console.log(`Dosis de insulina recomendada: ${dosis1}`);
//Tipo 1, glucosa normal
let dosis2 = calcularDosisInsulina(150, 70, "Tipo 1");
console.log(`Dosis de insulina recomendada: ${dosis2}`);
//Tipo 2, glucosa normal
let dosis3 = calcularDosisInsulina(150, 70, "Tipo 2");
console.log(`Dosis de insulina recomendada: ${dosis3}`);




//Ejercicio Nro. 21:
console.log("\nEjercicio Nro. 21:\n");

console.log(contarVocales("Hola Mundo"));
console.log(contarVocales("Ganne Moreno Pablo Matias"));
console.log(contarVocales("AEIOU aeiou"));
console.log(contarVocales("123 456 789"));
console.log(contarVocales("Programación"));


//Ejercicio Nro. 22:
console.log("\nEjercicio Nro. 22:\n");

console.log(contarConsonantes("Hola Mundo"));
console.log(contarConsonantes("Ganne Moreno Pablo Matias"));
console.log(contarConsonantes("AEIOU aeiou"));
console.log(contarConsonantes("123 456 789"));
console.log(contarConsonantes("Programación"));




//Ejercicio Nro. 23:
console.log("\nEjercicio Nro. 23:\n");

console.log(contieneDosS("S.O.S"));
console.log(contieneDosS("programación"));
console.log(contieneDosS("mississippi"));
console.log(contieneDosS("hola"));
console.log(contieneDosS("asado"));




//Ejercicio Nro. 24:
console.log("\nEjercicio Nro. 24:\n");

console.log(contarEspacios("S .O .S "));
console.log(contarEspacios("programación orientada a objeto"));
console.log(contarEspacios("mississippi"));
console.log(contarEspacios("hola aqui hay 3 espacios"));
console.log(contarEspacios("profe apruebeme este tp"));



//Ejercicio Nro. 25:
console.log("\nEjercicio Nro. 25:\n");
console.log(VerificarCadena("S .O .S 1"));
console.log(VerificarCadena("Hola mundo"));
console.log(VerificarCadena("Tengo 3 gatos"));
console.log(VerificarCadena("vamos BOCA"));
console.log(VerificarCadena("Solo letras y espacios"));
