
/* variante 2 

    si la compra > 250.000 => 20%
    si no 12%

*/

{
    console.log(`aplicación is running`);

    /* Estructuras Condicionales - if/else */

    /* 
    
        A > B => si "A" es mayor que "B" => 4 > 2

        A < B => si "A" es menor que "B" => 7 < 14

        A = B => si "A" es igual a "B" => 4 = (2+2)

        A >= B => si "A" es mayor o igual a "B" => 6 >= (3+3)

        A <= B => si "A" es mayor o igual a "B"
    
    */

    /* prueba 1 */
    if(4 > 3 )
    {
        console.log("se cumple la condicion");
    }
    else
    {
        console.log("la condicion no se cumple");
    }

    /* prueba 2 */
    if(4 > (1 + 1) )
    {
        console.log("se cumple la condicion");
    }
    else
    {
        console.log("la condicion no se cumple");
    }

    /* prueba 3 */

    if(4 > (7 - 5) )
    {
        console.log("se cumple la condicion");
    }
    else
    {
        console.log("la condicion no se cumple");
    }

    /* prueba 3 */

    if(4 > 7)
    {
        console.log("se cumple la condicion");
    }
    else
    {
        console.log("la condicion no se cumple");
    }

    /* prueba 4 */

    if(4 < 7 + 1 )
    {
        console.log("se cumple la condicion");
    }
    else
    {
        console.log("la condicion no se cumple");
    }

     /* prueba 5 */

    if(4 < (-14 + 14 + 2))
    {
        console.log("se cumple la condicion");
    }
    else
    {
        console.log("la condicion no se cumple");
    }

    /* prueba 6 */

    let importe1 = 50; // no se usa el simple =

    let importe2 = 200000; // no se usa el simple =

    if(importe1 === importe2)
    {
        console.log("ambos importes son iguales")
    }
    else
    {
        console.log("ambos importes son desiguales");
    }

    /* prueba 7 */

    let totalCompra1 = 280000;

    let totalCompra2 = "280000";

    if(totalCompra1 === totalCompra2) 
    {
        console.log("son iguales por magnitud pero no por tipo de datos");
    }
    else
    {
        console.log("son distintos valores");
    }


}
