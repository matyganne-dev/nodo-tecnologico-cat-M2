import {endPointAfrica,endPointAmerica,endPointEuropa,endPointOceania,endPointAsia} from "./endPoint.js";
import {fnRecuperarDatosEndPoint} from "./modelo.js";

/* Funcion que se encargará de llamar
la función de recuperar los datos de
un EndPoint. Continente por continente.
unificarlos a todos y devolver todos
los paises juntos */


export const fnUnirPaisesDelMundo = async ()=>{
    
    let paisesAfrica = await fnRecuperarDatosEndPoint(endPointAfrica);

    let paisesEuropa = await fnRecuperarDatosEndPoint(endPointEuropa);

    let paisesOceania = await fnRecuperarDatosEndPoint(endPointOceania);

    let paisesAmerica = await fnRecuperarDatosEndPoint(endPointAmerica);

    let paisesAsia = await fnRecuperarDatosEndPoint(endPointAsia);

    /* Aqui voy a Unificar todos los Paises
    del Mundo en un solo vector. 
    usando un Concepto que vimos que 
    se llama SpreadOperator => operador de propagacion 
    
    propagación de elementos de un vector. SpreadOperator => elementos de un vector.

    */

    const paisesMundo = [...paisesAfrica,...paisesAmerica,...paisesAsia,...paisesEuropa,...paisesOceania];

    return paisesMundo;

};
