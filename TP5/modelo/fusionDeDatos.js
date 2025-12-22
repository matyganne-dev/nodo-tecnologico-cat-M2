import { endPointAfrica, endPointAmerica, endPointEuropa, endPointOceania, endPointAsia } from "./endPoint.js";
import { fnRecuperarDatosEndPoint } from "./modelo.js";

/* Funcion que se encargará de llamar
la función de recuperar los datos de
un EndPoint. Continente por continente.
unificarlos a todos y devolver todos
los paises juntos */


export const fnUnirPaisesDelMundo = async () => {

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

    const paisesMundo = [...paisesAfrica, ...paisesAmerica, ...paisesAsia, ...paisesEuropa, ...paisesOceania];

    return paisesMundo;

};


/* La idea de esto es recorrer
el vector complejo de Paises que
viene originalmente de la API y convertir
un objeto mucho mas legible y claro
y adaptado a mis necesidades */

export const fnGenerarVectorSimple = (Paises) => {

    const PaisesSimple = Paises.map(pais => {

        /* Estoy haciendo destructuring */
        const { area: superficie, population: poblacion, region: continente } = pais;

        const { common: nombreGenerico, official: nombreOficial } = pais.name;

        const { png, svg } = pais.flags;

        // Extraemos la primera capital y asignamos valor por defecto
        const [primeraCapital = "No posee capital"] = pais.capital || [];

        /* a partir de esas constantes me
        estoy creando un objeto mas simple */

        const paisSimple = { nombreGenerico, nombreOficial, superficie, poblacion, continente, png, svg, capital: primeraCapital };

        // este es el return del map //
        return paisSimple;

    });

    // este es el return de la función //
    return PaisesSimple;

};

// Punto 2
export const fnEjercitarDestructuring = (paises) => {
    // Mostramos en consola solo los primeros 3 para no saturar la consola y dar la muestra
    // De caso contrario solo seria cambiar muestra por paises
    const muestra = paises.slice(0, 3);

    console.log("\n\nINCISO A: Destructuring Simple");
    paises.forEach(pais => {
        const { name, population, flags } = pais;
        console.log(`Nombre: ${name.common} | Pob: ${population} | Bandera: ${flags.png}`);
    });

    console.log("\n\nINCISO B: Destructuring con Alias");
    paises.forEach(pais => {
        const { name: { common: nombre }, population: poblacion, flags: { png: bandera } } = pais;
        console.log(`País: ${nombre} | Habitantes: ${poblacion} | Link: ${bandera}`);
    });

    console.log("\n\nINCISO D: Destructuring Array (Capital)");
    paises.forEach(pais => {
        const [capital = "Sin Datos"] = pais.capital || [];
        console.log(`Capital: ${capital}`);
    });

    console.log("\n\nINCISO C: Destructuring en Parámetros");
    paises.forEach(({ name: { common }, population }) => {
        console.log(`Directo -> ${common}: ${population}`);
    });
};