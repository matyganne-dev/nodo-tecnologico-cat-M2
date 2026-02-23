
/* 
Ejercicio Nro. 07: Estructuras Condicionales (if/else)
Un comercio que vende bolsas de alimentos para mascotas 
trabaja y comercializa únicamente con tres grandes marcas
 de alimentos para perros lo que le permite trabajar con descuentos
 muy interesantes para sus clientes. Las marcas con las que trabaja 
 son:
 
*/

{
    console.log(`la aplicación está corriendo`);

    let productoElegido = 0; // aqui ingresara el producto o el codigo.

    let cantidadDeProductos = 0; // aqui ingresara la cantidad de productos.

    productoElegido = Number(prompt(`Indique el producto. (1 = Dogui, 2 = Tiernitos, 3 = Dogpro`));

    cantidadDeProductos = Number(prompt(`Por favor indique la cantidad de bolsas`));

    console.log(productoElegido);

    console.log(cantidadDeProductos);

    /******* Producto 1 ********/

    let precio = 0; // declaro e inicializo en cero

    let totalAPagar = 0; // siempre que trabajo con numeros. declaro e inicializo en cero los importes.

    if(productoElegido === 1) // Dogui x 21 kilos
    {
        if((cantidadDeProductos >= 0) && (cantidadDeProductos <= 4))
        {
            precio = 38000;
        }

        if((cantidadDeProductos >= 5) && (cantidadDeProductos <= 10))
        {
            precio = 36000;
        }

        if(cantidadDeProductos >= 11)
        {
            precio = 34000;
        }
    }

    // aqui definimos el total a pagar //

    totalAPagar = cantidadDeProductos * precio;

    console.log(`Producto: ${productoElegido} Cantidad: ${cantidadDeProductos} Precio: ${precio} Total a Pagar: ${totalAPagar}`);


    console.log(precio);


}