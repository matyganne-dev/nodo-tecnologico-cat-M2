
/*
un comercio necesita realizar 
un proceso de cálculo del precio
de venta de sus productos.
y la lógica de negocios que impone
el Gerente Comercial es la siguiente.

para productos cuyo precio de costo
sea menor a 50.000 pesos, el precio
de venta tendrá un margen de ganancia
del 70%

caso contrario, tendrá un margen del 95%

*/

/* precioCosto => precioDeVenta */

{
    console.log(`la aplicación esta corriendo`);

    let precioCosto = 0; // voy a declararla e inicializarla en cero

    precioCosto = Number(prompt(`Ingrese el precio de costo`));

    console.log(precioCosto);

    let precioDeVenta = 0; 

    /* estructura condicional if/else */

    /* operador ternario. es un condicional simple.
    porque analiza una condición que seguramente
    tiene un calculo por lado verdadero y tiene un cálculo
    o una expresión por el lado falso. 
    
    expresion logica ? (lado verdadero) : (lado falso)
    
    */

    precioDeVenta = precioCosto < 50000 ? precioCosto + (precioCosto * 70)/100 : precioCosto + (precioCosto * 95)/100;

    console.log(`Precio Costo: ${precioCosto} Precio Venta: ${precioDeVenta}`);

}


    /*
    if(precioCosto < 50000)
    {
        precioDeVenta = precioCosto + (precioCosto * 70)/100;
    }
    else
    {
        precioDeVenta = precioCosto + (precioCosto * 95)/100;
    }
    */