

/* 

Ejercicio Nro.09: Estructuras condicionales if/else
Realizar un programa que permita ingresar la edad de una persona
 y determine 
    si es niño (0 a 12 años), => 12.8
    adolescente (13 a 17 años), 
    adulto (18 a 64 años), 
    adulto mayor (más de 64 años).
*/

/* HAGO Y ... */

{
    let edadPersona = 0; // declaro e inicializo en cero.

    edadPersona = Number(prompt(`Ingrese la Edad`));

    console.log(edadPersona);

    if(edadPersona < 0)
    {
        console.log(`debe ingresar un valor correcto`);
    }

    if((edadPersona >= 0) && (edadPersona < 13))
    {
        console.log(`es un niño`);
    }

    if((edadPersona >= 13) && (edadPersona < 18))
    {
        console.log(`es un adolescente`);
    }

    if((edadPersona >= 18) && (edadPersona <=64))
    {
        console.log(`es un adulto`);
    }

    if(edadPersona > 64)
    {
        console.log(`es un adulto mayor`);
    }







}