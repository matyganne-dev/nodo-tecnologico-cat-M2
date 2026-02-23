
/* Objetivo: vamos a realizar
un programa que permita determinar
el dinero disponible en todas
las villeteras virtuales de una persona 

    1 - Banco Nacion
    2 - Naranja X
    3 - Mercado Pago
    4 - Uala

*/

{
    let titularDeLasCuentas = "FRANCO JUAREZ";

    let dineroEnNacion = 0; // declarando la variable y asignandole un valor cero.

    let dineroEnNaranjaX = 0;

    let dineroEnMercadoPago = 0;

    let dineroEnUala = 0;

    dineroEnNacion = 150000;

    dineroEnNaranjaX = 320000;

    dineroEnMercadoPago = 20000;

    dineroEnUala = 9800;

    /* declaro una variable para acumular el dinero
    que tiene el usuario en todas las cuentas */
    let totalDineroDisponible = 0;

    /* puedo realizar operaciones matematicas
    entre variables */

    totalDineroDisponible = dineroEnNacion + dineroEnNaranjaX + dineroEnMercadoPago + dineroEnUala;

    console.log(titularDeLasCuentas);
    console.log(totalDineroDisponible);

    /* interpolación de Strings o texto */
    console.log(`El Sr. ${titularDeLasCuentas} tiene ${totalDineroDisponible}`);

}