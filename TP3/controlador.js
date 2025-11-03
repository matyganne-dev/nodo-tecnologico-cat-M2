/* programa principal */
import { calcularPrecioVenta } from './modelo.js';

//Ejercicio Nro. 13:

const ejecutarCalculo = () => {

    let importe = Number(prompt(`ingrece el precio del producto:`));
    let margenGanancia = Number(prompt(`ingrese margen de ganancia que se aplicara sobre el producto:`));
    let precioVenta = calcularPrecioVenta(importe, margenGanancia);
    console.log(`Precio de venta: $${precioVenta.toFixed(2)}`);
}

ejecutarCalculo();


//Ejercicio Nro. 14:
//Ejercicio Nro. 15:
//Ejercicio Nro. 16:
//Ejercicio Nro. 17:
//Ejercicio Nro. 18:
//Ejercicio Nro. 19:
//Ejercicio Nro. 20:
//Ejercicio Nro. 21:
//Ejercicio Nro. 22:
//Ejercicio Nro. 23:
//Ejercicio Nro. 24:
//Ejercicio Nro. 25: