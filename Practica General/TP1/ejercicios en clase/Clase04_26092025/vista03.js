
/* 

Ejercicio Nro. 16: Estructuras condicionales. 
switch
Realizar un programa que permita ingresar en 
una variable numérica el número de día y 
en función del número de día el programa debería

    1 => LUNES
    2 => MARTES
    3 => MIERCOLES.

    7 => DOMINGO

*/

{
    console.log(`aplicacion corriendo`);

    let numeroDeDia = 0; // declaro e inicializo en cero.

    numeroDeDia = Number(prompt(`Ing. el numero de dia`));

    console.log(numeroDeDia);

    /* cuando yo tengo un conjunto finito
    de valores. valores discretos. 
    y debo realizar un analisis de esos casos
    la estructura condicional por excelencia
    es el switch */

    switch(numeroDeDia)
    {
        case 1:
            {
                console.log(`LUNES`);
                break;
            }

        case 2:
            {
                console.log(`MARTES`);
                break;
            }

        case 3:
            {
                console.log(`MIERCOLES`);
                break;
            }

        case 4:
            {
                console.log(`JUEVES`);
                break;
            }

        case 5:
            {
                console.log(`VIERNES y el CUERPO LO SABE`);
                break;
            }

        case 6:
            {
                console.log(`SABADO`);
                break;
            }

        case 7:
            {
                console.log(`DOMINGO`);
                break;
            }

        default:
            {
                console.log(`NO INGRESO UN NUMERO VALIDO`);
                break;
            }

    }

}

/**** RESUMEN DE LAS ESTRUCTURAS CONDICIONALES 

    - (01) if/else

        - analizar variables continuas
        son las que pueden asumir valores infinitos
        dentro de un rango.
            - importe de una compra
            - sueldo de un empleado
            - peso en kilogramos de alguna cosa

        - tengo que analizar que se cumplan 
        operadores lógicos complejos.

            if ((sueldoBruto >= 1000) && (sueldoBruto <= 1500))
            {
            }
            else
            {
            }

        - que puede tener únicamente el lado veradero.

        - condicionales anidados

            if( a > b)
            {

            }
            else
            {
                if (c > d)

            }

    - (02) operador ternario => tres partes

        expresion lógica ? lado verdadero : lado falso;

        - tienen que tener lado verdadero
        - tiene que tener lado falso
        - para asignarl valor a variables

            let NumeroPositivo = numero >= 0 ? 'positivo':'negativo';

        - no recomiendo para estructuras
        condicionales anidadas.

    - (03) Stwitch

        - tengo que analizar variables discretas
        y con casos finitos.

        - ideal para hacer menus de opciones
            1 - paga contado
            2 - paga transferencia
            3 - paga con tarjeta de credito

        - se pueden anidar

        - es cada opción tiene que llevar la palabra break


 * *****/