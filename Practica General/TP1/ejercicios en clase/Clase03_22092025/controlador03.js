
/* CALCULO DE DESCUENTOS DEL MARCATON 

    30% DE DESCUENTO CON TARJETA DE CREDITO.

    200.000,00 => COMPRA DESCUENTO 30% => 60.000,00

    380.000,00 => DESCENTO 30% => 60.000,00

    
*/

{
    /* (1ra. Parte - Capturar las Entradas) */

    let importeDeLaCompra = 0; // declaro e inicializo en cero.

    importeDeLaCompra = Number(prompt(`Ingrese el importe de la compra`));

    console.log(importeDeLaCompra);

    /* (2da. Parte - Vamos a calcular el descuento) */

    let descuento = 0;

    descuento = (importeDeLaCompra * 30) / 100;
   
    /* (3ra. Parte) - este condicional. evalua si el descuento se pasa del TOPE. y 
    si llega a pasar el tope. lo fija en 60.000 mil pesos */

    if(descuento >= 60000)
    {
        descuento = 60000; // es topear el descuento en 60.0000
    }

    /* (4ta. Parte) - Determinar el importe a pagar */

    let importeNeto = 0;

    importeNeto = importeDeLaCompra - descuento;

    
    /* (5ta. Parte) - Salida definitiva */

    console.log(`Importe Compra ${importeDeLaCompra} Descuento: ${descuento} y Neto a pagar: ${importeNeto}`);






}