
/* 

Ejercicio Nro.10: Estructuras condicionales if/else / 
operador ternario
Realizar un programa que permita introducir un valor 
(X) y determinar si el mismo es PAR ó IMPAR.

*/

{
    let numeroIngresado = 0;

    numeroIngresado = Number(prompt(`Ingrese un Numero`));

    console.log(numeroIngresado);

    // aqui estoy calculando la division //
    let resultadoDivision = numeroIngresado / 2;

    // aqui estoy calculando el resto de una división //
    let restoDeDivision = numeroIngresado % 2;

    console.log(resultadoDivision);

    console.log(restoDeDivision);

    let esParOImpar = numeroIngresado % 2 === 0 ? 'PAR':'IMPAR';

    console.log(esParOImpar);

    /* por regla general si el resto de la división
    de un numero en 2 me da 
        resto es igual a 0 => par
        resto es igual a 1 => impar
    */

    

}