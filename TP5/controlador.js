
import {fnUnirPaisesDelMundo} from "./fusionDeDatos.js";

/* La idea de esto es recorrer
el vector complejo de Paises que
viene originalmente de la API y convertir
un objeto mucho mas legible y claro
y adaptado a mis necesidades */

const fnGenerarVectorSimple = (Paises)=>{

    const PaisesSimple = Paises.map(pais => {

        /* Estoy haciendo destructuring */
        const {area:superficie,population:poblacion,region:continente} = pais;

        const {common:nombreGenerico,official:nombreOficial} = pais.name;

        const {png,svg} = pais.flags;

        /* a partir de esas constantes me
        estoy creando un objeto mas simple */

        const paisSimple = {nombreGenerico,nombreOficial,superficie,poblacion,continente,png,svg};

        // este es el return del map //
        return paisSimple;

    });

    // este es el return de la función //
    return PaisesSimple;

};


window.onload = async ()=>{

    console.log(`aplication is running`);

    /* aqui estoy fusionando todos los paises
    pero me devuelve una estructura de objetos
    compleja. y que no es util para lo que yo necesito */

    const Paises = await fnUnirPaisesDelMundo();

    const PaisesSimples = fnGenerarVectorSimple(Paises);

    console.log(Paises);

    console.log(PaisesSimples);

    /* (1ro) les mostre con un forEach
    como hacer destructuring */

    /* (2do) utilizar map para transformar
    esos objetos complejos en objetos mas simples 
    
    me hice una función que recibe el vector completo
    de paises => como viene de la API => le aplique map
    a cada pais, haciendole destructuring.

    y tenía todos los datos aislados

    "constructuring" =>

    */

    

};

/*
    MODELO VISTA CONTROLADOR


    VISTA: 
        ESTATICOS: HTML, CSS, ...

        DINAMICA: RENDERIZACION DINAMICA DEL COM
            * map
            * ForEach

    CONTROLADOR:

        - CAPTURAR LOS EVENTOS QUE SUCEDEN EN EL DOM (Document Object Model)
            - click
            - checkbox
            - selectores
            - capturar los valores que se ingresaron en los input
            - onload

            - Buscar => click del Buscar. capturar el valor que ingreso en un input =>

                tiene que llamar a una función del Modelo
                que se encargue del trabajo "SUCIO"
                de conectarse al endPoint en la nube
                pasarle el parametro del valor que quiere buscar
                esa función del Modelo, seguramente
                recuperara datos en formato JSON. y
                el controlador, se va a encargar de tomar
                esos datos (esos resultados) y dibujarlos en el DOM

    MODELO: (No significa que sea un solo archivo)
        - recuperar datos desde APIS
        - recuperar datos desde APIs haciendo funciones
        que reciban parametros y devuelve un dato en particular
        - recuperar datos desde APIs => localStorage

        - recuperar datos desde localStorage => vectores

        - find, 
        - reduce

        - consultar datos de una persona desde el REGISTRO NACIONAL DE LAS PERSONAS





*/