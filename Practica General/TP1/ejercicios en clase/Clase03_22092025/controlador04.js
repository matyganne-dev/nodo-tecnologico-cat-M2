
/* 

Ejercicio Nro.13: Estructuras condicionales if/else

    Realizar un programa que permita ingresar el importe total 
de una compra y aplicar descuentos según los totales de compra.
Si el monto es menor a $10.000, no tiene descuento.
Si el monto está entre $10.000 y $50.000, se aplica un 10% de descuento.
Si el monto es mayor a $50.000, se aplica un 20% de descuento.
Mostrar el importe final a pagar luego del descuento.


    importeDeCompra

    0 - 10.000 => no tiene descuento

    10.000,00 hasta 50.000,00 => descuento 10%

    > 50.000,00 => descuento del 20%

*/

    {
        let importeDeCompra = 0; // declarar e inicializar

        importeDeCompra = Number(prompt(`Ingrese el Importe de la compra`));

        console.log(importeDeCompra);

        let descuento = 0; // declaro e inicializo en cero la variable descuento

        /* si el importe de la compra está entre
        0 y 10 mil. no hay descuento */

        if((importeDeCompra >= 0) && (importeDeCompra <= 10000))
        {
            descuento = 0;
        }

        /* aqui si el importe de la compra esta entre 10 y 20 mil
        aplico el 10% */
        if((importeDeCompra > 10000)&&(importeDeCompra <= 50000))
        {
            descuento = (importeDeCompra * 10)/100; // si se cumple la condición aplicamos el 10% descuento.
        }

        /* aqui si el importe es mayor a 50 mil aplico el 20% de 
        descuento */

        if(importeDeCompra > 50000)
        {
            descuento = (importeDeCompra * 20)/100; // si se cumple la condición calculo el 20% 
        }

        console.log(descuento);

        /* Total a pagar */

        let totalAPagar = 0;

        totalAPagar = importeDeCompra - descuento;

        console.log(`Total de la Compra: ${importeDeCompra} Descuento: ${descuento} y total pagar: ${totalAPagar}`);


    }

