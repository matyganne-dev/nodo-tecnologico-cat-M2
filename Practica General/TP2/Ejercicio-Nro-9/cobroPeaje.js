
/*

Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los 
comprobantes a los clientes que circulan por las autopistas concesionadas por la empresa, para ello 
se necesita realizar un programa que el cajero del puesto pueda realizar el cobro y levantado de la 
barrera.


Los precios establecidos son los siguientes

CAMION = 22.000,00 PESOS
CAMIONETA = 12.000,00 PESOS
AUTOMOVIL = 4.000,00 PESOS
MOTOS = 1.500,00 PESOS

La aplicación debe permitirle al cajero registrar todas las operaciones y al finalizar su jornada laboral realizar el cierre donde le deberá mostrar la siguiente información.

Cantidad de AUTOS
Total Cobrado de AUTOS
Cantidad de CAMIONETAS
Total de CAMIONETAS
Cantidad de AUTOMOVILES
Total de Automóviles
Cantidad de MOTOS
Total de MOTOS
Total GENERAL cobrado.

Compare al final si pasaron más camionetas que autos o fue al revés ¿?. O quizás hayan pasado la misma cantidad. Compare estas cantidades únicamente entre autos y camionetas.

Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el DOM y cargar los datos de entrada por medio de prompt.
*/

let salida = 999;
let opcion = 0;

let cantidadCamiones = 0, cantidadCamionetas = 0, cantidadAutomoviles = 0, cantidadMotos = 0;
let totalCamiones = 0, totalCamionetas = 0, totalAutomoviles = 0, totalMotos = 0, totalGeneral = 0;

do {

    opcion = Number(prompt(`Ingrese tipo de vehiculo:\n1- CAMION $ 22.000,00 \n2- CAMIONETA $ 12.000,00\n3- AUTOMOVIL $ 4.000,00\n4- MOTOS $ 1.500,00`));

    switch (opcion) {
        case 1:
            console.log("\nSe ingreso CAMION");
            totalCamiones += 22000;
            cantidadCamiones++;
            break;

        case 2:
            console.log("\nSe ingreso CAMIONETA");
            totalCamionetas += 12000;
            cantidadCamionetas++;
            break;

        case 3:
            console.log("\nSe ingreso AUTOMOVIL");
            totalAutomoviles += 4000;
            cantidadAutomoviles++;
            break;

        case 4:
            console.log("\nSe ingreso MOTOS");
            totalMotos += 1500;
            cantidadMotos++;
            break;

        default:
            console.log("ingreso incorrecto");
            break;

    }

    salida = Number(prompt("¿Desea seguir ingresando? 0-NO | 1-Si "));
} while (salida !== 0);

console.log(`
        Cantidad de AUTOS: ${cantidadCamiones}\n
        Total Cobrado de AUTOS: $${totalCamiones}\n
        Cantidad de CAMIONETAS: ${cantidadCamionetas}\n
        Total de CAMIONETAS: $${totalCamionetas}\n
        Cantidad de AUTOMOVILES: ${cantidadAutomoviles}\n
        Total de Automóviles: $${totalAutomoviles}\n
        Cantidad de MOTOS: ${cantidadMotos}\n
        Total de MOTOS: $${totalMotos}\n
        Total GENERAL cobrado: $${totalCamiones + totalCamionetas + totalAutomoviles + totalMotos}\n`);

    if (cantidadCamionetas > cantidadAutomoviles) {
        console.log(`pasaron más camionetas que autos, cantidad de camionetas ${cantidadCamionetas} y cantidad de autos ${cantidadAutomoviles}`);
    } else if (cantidadCamionetas < cantidadAutomoviles) {
        console.log(`pasaron más autos que camionetas, cantidad de camionetas ${cantidadCamionetas} y cantidad de autos ${cantidadAutomoviles}`);
    } else {
        console.log(`pasaron la misma cantidad de camionetas como de autos, cantidad de camionetas ${cantidadCamionetas} y cantidad de autos ${cantidadAutomoviles}`);
    }