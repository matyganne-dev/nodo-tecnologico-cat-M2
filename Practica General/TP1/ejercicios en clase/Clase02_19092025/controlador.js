
/* 

Ejercicio Nro. 4: Introducción y conceptos básicos
Realizar un programa que permita ingresar el importe
total de una compra que realiza un cliente y sobre 
el mismo aplicarle un descuento del 15%. 
Mostrar por consola el importe total de la compra
 y el descuento del 15% como así también el importe
restante final.

*/

/* Bloque de codigos */
{
    console.log(`la aplicación está corriendo`);

    /* paso1 - debería tener una variable 
    donde el usuario de la aplicación pueda
    ingresar el importe de la compra */

    let importeDeCompra = 0; // declaro e inicializo una variable.

    /* paso2 - pedirle al usuario que ingrese un valor
    y que lo guarde en una variable */

    importeDeCompra = Number(prompt("Ingrese el valor de la compra"));

    /* paso 3 - mostrar ese valor por la consola */
    console.log(importeDeCompra);

    /* paso 4 - voy a declarar una variable 
    donde voy a calcular momentaneamente
    el descuento del 15% */

    let descuento = 0; // siempre declaro e inicializo.

    /* paso 5 - hacer el calculo del descuento */

    descuento = (importeDeCompra * 15) / 100;

    /* paso 6 - mostrar el descuento */

    console.log(descuento);

    /* paso 7 - voy a calcular el importe a pagar */

    let importeAPagar = 0; // declaro e inicializo la variable

    importeAPagar = importeDeCompra - descuento;

    /* paso 8 - mostrar las salidas */

    console.log(`Importe Compra: ${importeDeCompra} Descuento: ${descuento} y total a pagar: ${importeAPagar}`);


}