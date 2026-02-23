
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

    /* a estos casos les decimos variables continuas.
    y para este tipo de variables la estructura
    condicional. => if/else */

    if((edadPersona >= 0) && (edadPersona <13))
    {
        console.log(`La persona es niño`);        
    }
    else
    {
        if((edadPersona >= 13)&&(edadPersona <18))
        {
            console.log(`La persona es adolescente`);
        }
        else
        {
            if((edadPersona >= 18) && (edadPersona <= 64))
            {
                console.log(`La persona es n adulto`);
            }
            else
            {
                if(edadPersona > 64)
                {
                     console.log(`La persona es un adulto mayor`);
                }
                else
                {
                    console.log(`La Edad debe ser un valor numerico positivo`);
                }
            }
        }
    }
}