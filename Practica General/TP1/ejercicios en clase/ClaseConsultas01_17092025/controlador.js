
/* llave de apertura y cierre = bloque de códigos */
{

    // mostrar mensajes por consola //

    console.log(`el programa esta arrancando`) // ALT + 96 `` ``

    // como crear variables //

    /* las variables son lugares de almacenamiento
    temporal de datos en una aplicación. aplicación web.
    las variables pueden almacenar 1 solo valor a la vez 
    
        - con la palabra reservada let creo variables
        - las variables tienen que tener un nombre
        - ese nombre tiene que ser representativo => carga semantica fuerte
        - el nombre de las variables no puede comenzar con numero
        - el nombre de las variables no puede tener simbolos %, / *, 
        - no hay limite en el largo del nombre
        - si pueden comenzar con el simbolo $
        - no pueden tener espacios el medio
        - utilizar la nomenclatura camelCase
        - una variable nace y muere en su bloque de codigos
        - no pueden existir dos variables con el mismo nombre dentro de un bloque de codigos
    */

    let totalCobrado = 0; // declaro e inicializo en cero.

    let becaDeNazarenaEnEnero = 300000; // declarando e inicializando la variable
    let becaDeNazarenaEnFebrero = 320000; // declarando e inicializando la variable
    let becaDeNazarenaEnMarzo = 300000;

    let becaDeNazarenaEnAbril; // la estoy declarando
    
    becaDeNazarenaEnAbril = 300000;

    totalCobrado = becaDeNazarenaEnEnero + becaDeNazarenaEnFebrero + becaDeNazarenaEnMarzo + becaDeNazarenaEnAbril;

    let promedioCobrado = 0; // aqui declaro e inicializo en cero
    promedioCobrado = (becaDeNazarenaEnEnero + becaDeNazarenaEnFebrero + becaDeNazarenaEnMarzo + becaDeNazarenaEnAbril)/4;

    // mostrar directamente la variable //

    console.log(`hola soy el Profe`);

    console.log(totalCobrado);

    // vamos a mezclar texto con variables - interporlación de strings //
    
    console.log(`El Total cobrado por Becas de Nazarena es ${totalCobrado} y en promedio cobró ${promedioCobrado}`);


    /********-- cositas en general con variables --**********/

    let facturaEnero2024 = 150000;
    let facturaFebrero2024 = 170000;
    let facturaMarzo2024 = 225000;

    // suma simple //
    let totalGastoEnergia = facturaEnero2024 + facturaFebrero2024 + facturaMarzo2024;

    /* pronosticar las facturas 
    de enero, febrero y marzo de 2025
    sabiendo que.
        enero tendra un 25% de aumento
        febrero tendra un 22.5% de aumento
        marzo tendra un 17.8% de aumento 
    */

    let facturaEnero2025 = 0; // declarando e inicializando en cero
    let facturaFebrero2025 = 0;
    let facturaMarzo2025 = 0;

    facturaEnero2025 = facturaEnero2024 + (facturaEnero2024 * 25)/100;
    facturaFebrero2025 = facturaFebrero2024 +  (facturaFebrero2024 * 22.5)/100;
    facturaMarzo2025 = facturaMarzo2024 + (facturaMarzo2024 * 17.8)/100;

    console.log(`Enero 2024 ${facturaEnero2024} - Enero 2025 ${facturaEnero2025}`);


    /*     
        100.000,00 enero 2024 25%

        (Numero * Porcentaje) / 100;

        100.000,00 * 25 = 25.000.000
    
    */


}

/************************

    1) 1 hora x dia = no es lo mismo que 5 horas el sabado

    2) PROGRAMAR NO ES ESCRIBIR UNA CARTA 

    3) Tengo que hacer el esfuerzo mental de
    resolver esos problemas.

        Ejercitando el MUSUCULO 

  
 
 ************************/

