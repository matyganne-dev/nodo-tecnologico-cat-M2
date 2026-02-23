
/* 
¡LA NOTICIA QUE TODOS ESPERÁBAMOS... LLEGÓ!
👉🏻 VUELVEN LOS BENEFICIOS EXCLUSIVOS PARA LOS COMERCIOS DE CATAMARCA, ¡RENOVADOS Y MEJOR QUE NUNCA!

👉 Comercios de todos los rubros (que cumplan con los requisitos y estén debidamente encuadrados) podrán ofrecer estos increíbles beneficios a sus clientes:

------------------------------------------------------------

📌 ALIMENTOS => RUBRO
✅ 30% de descuento en un solo pago
📆 Todos los días
💳 Tope de reintegro mensual: $60.000 por cliente

📌 CONSTRUCCIÓN Y HOGAR => RUBRO
✅ 20% de descuento + 6 cuotas sin interés
📆 Lunes, martes y miércoles
💳 Tope de reintegro mensual: $120.000 por cliente


------------------------------------------------------------

    1) Rubro en el que esta haciendo la operación => 
        1 - ALIMENTOS
        2 - CONSTRUCCION
        3 - OTROS

    2) Dia de la Operacion => 1,2,3,...7

    3) Importe de la Compra

--------------------------------------------------------------


📌 VESTIMENTA Y OTROS RUBROS
✅ 20% de descuento + 6 cuotas sin interés
📆 Lunes, martes y miércoles
💳 Tope de reintegro mensual: $80.000 por cliente

📌 GASTRONOMÍA Y COMIDAS AL PASO
✅ 20% de descuento en un solo pago
📆 Todos los días
💳 Tope de reintegro mensual: $20.000 por cliente

📌 PRODUCTOS REGIONALES Y ARTESANÍAS
✅ 20% de descuento + 6 cuotas sin interés
📆 Todos los días
💳 Tope de reintegro mensual: $40.000 por cliente

📌 PERFUMERÍAS
✅ 20% de descuento + 6 cuotas sin interés
📆 Jueves y viernes
💳 Tope de reintegro mensual: $80.000 por cliente

📌 HOTELES Y HOSTERÍAS
✅ 20% de descuento + 6 cuotas sin interés
📆 Todos los días
💳 Tope de reintegro mensual: $80.000 por cliente
*/

{
    console.log(`Aplicación del MARCATON`);

    /* Parte 1 - Declaración variables de entrada */
    let rubroOperacion = 0; // declaro e inicializo una variable

    let diaOperacion = 0; // declaro e inicializo una variable

    let montoOperacion = 0;


    /* Parte 2 - Capturar los datos de entrada */

    rubroOperacion = Number(prompt(`Ingrese el Rubro (1 - ALIMENTOS, 2 - CONSTRUCCION, 3 - OTROS)`));

    diaOperacion = Number(prompt(`Ingrese día: 1.LUNES,2.MARTES,3.MIERCOLES,...,7.DOMINGO`));
    
    montoOperacion = Number(prompt(`Ingrese el Importe de la Compra`));


    /* Parte 3 - Mostrar los datos capturados */

    console.log(rubroOperacion,diaOperacion,montoOperacion);

    
    /* 
        variables continuas => asumen infinitos valores en un rango => if/else
        variables discretas => asumen valores establecidos y finitos. => switch    
    */

    let descuento = 0; // declaro e inicializo.
    let tope = 0;

    switch(rubroOperacion)
    {
        case 1: // ALIMENTOS
            {
                console.log(`Ud. eligió Alimentos y tiene 30% descuento todos los dias, tope de 60.000,00 TODOS LOS DIAS`);

                tope = 60000;

                // aqui estoy calculando el descuento directo //
               // descuento = (montoOperacion * 30)/100;

                // aqui estoy calculando el descuento pero controlando que no se pase del tope //

                /* aqui utilice un operador ternario */

                descuento = ((montoOperacion * 30)/100) > tope ? tope:(montoOperacion * 30)/100;

                break;
            }

        case 2: // CONSTRUCCION & HOGAR
            {
                console.log(`Ud. eligió el rubro Contrucción y tiene un descuento del 20% y tope de 120.000,00 LUNES,MARTES Y MIERCOLES`);

                tope = 120000;

                if((diaOperacion === 1) || (diaOperacion ===2) || (diaOperacion === 3))
                {
                    descuento = ((montoOperacion * 20)/100) > tope ? tope : (montoOperacion * 20)/100;
                }
                else
                {
                    descuento = 0; 
                    console.log(`Los dias Jueves,Viernes,Sabados y Domingos no hay descuentos`);
                }
                break;

            }

        default: // OTROS
            {
                console.log(`Otros Rubros no definidos`);

                descuento = 0;

                break;

            }

    }

    /* Parte 04 - Calculo del Neto a pagar */

    let importeNetoAPagar = 0; // declaro e inicializo en cero.

    importeNetoAPagar = montoOperacion - descuento;

    console.log(`Monto operación: ${montoOperacion} descuento : ${descuento} y Neto a Pagar: ${importeNetoAPagar}`);


}