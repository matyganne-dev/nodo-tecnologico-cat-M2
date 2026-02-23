/*

Ejercicio Nro. 23: Estructuras condicionales if/else
Realizar un programa que permita introducir 
cuatro números (A,B,C,D) y determinar 
si la suma de los dos primeros (A + B) 
es mayor a la suma de los dos segundos (C + D).

*/

{

    /* Declaración e Inicialización de Variables */
    let A = 0;
    let B = 0;
    let C = 0;
    let D = 0;

    A = 10;
    B = 5;
    C = 30;
    D = 5;

    let resultado = (A+B) > (C+D) ? `Si. A + B es mayor que C + D`:`No. A + B no es mayor que C + D`;

    console.log(resultado);

}