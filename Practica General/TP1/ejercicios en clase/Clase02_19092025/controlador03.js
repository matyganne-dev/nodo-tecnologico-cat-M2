
/* 

Ejercicio Nro. 08: Estructuras condicionales if/else
Realizar un programa que permita ingresar dos números y 
que realice todas las comparaciones lógicas que se 
pueden realizar entre ellos. Como ser

Numero1 > Numero2
Numero1 < Numero2
Numero1 === Numero2

    a > b
    a < b
    a = b

*/

{
    console.log(`aplicación corriendo`);

    /* (1) - declaramos las variables donde vamos
    a ingresar los numeros */

    let numero1 = 0; // operador de asignación. declaro y asigno el valor 0
    let numero2 = 0; // operador de asignación. declaro y asigno el valor 0

    /* (2) - vamos a decirle al usuario que 
    ingrese por teclado esos valores */

    numero1 = Number(prompt(`Ingrese por favor el numero 1`));

    numero2 = Number(prompt(`Ingrese por favor el numero 2`));

    /* (3) - Mostrar los valores ingresados */

    console.log(numero1);
    console.log(numero2);


    /* (4) - Comparaciones lógicas */



    if(numero1 > numero2) // numero1 es mayor al numero2
    { 
        console.log(`El primer valor ${numero1} es mayor al segundo ${numero2}`);
    }
    else
    {
        if(numero1 < numero2)
        {
            console.log(`El segundo valor ${numero2} es mayor que el primero ${numero1}`);
        }
        else
        {
            console.log(`Por descarte ambos valores ${numero1} y ${numero2} son iguales`);
        }
    }


    /* ESTRUCTUCTURAS CONDICIONALES 
    
    if(comparacion logica)
    {
        // lado verdadero
    }
    else
    {
        // lado falso
    }
        
    */





}