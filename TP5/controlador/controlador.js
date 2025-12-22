
import {fnUnirPaisesDelMundo} from "../modelo/fusionDeDatos.js";
import {fnGenerarVectorSimple} from "../modelo/fusionDeDatos.js";
import {fnGenerarContenedores,render} from "../vista/funcionesDeLaVista.js";

window.onload = async ()=>{

    console.log(`aplication is running`);

    const idContenedorPrincipal = document.querySelector("#idContenedorPrincipal");

    /* aqui estoy fusionando todos los paises
    pero me devuelve una estructura de objetos
    compleja. y que no es util para lo que yo necesito */

    const Paises = await fnUnirPaisesDelMundo(); // este recupera de internet. los fusiona

    const PaisesSimples = fnGenerarVectorSimple(Paises); // este los transforma y devuelve un vector de paises mas simple

    // console.log(Paises);

    console.log(PaisesSimples);

    const elementosDelDOM = fnGenerarContenedores(PaisesSimples);

    render(elementosDelDOM,idContenedorPrincipal);

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