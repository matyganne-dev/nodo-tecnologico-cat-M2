
import { fnUnirPaisesDelMundo, fnGenerarVectorSimple } from "../modelo/fusionDeDatos.js";
import { fnRecuperarDatosEndPoint } from "../modelo/modelo.js";
import { endPointAfrica, endPointAmerica, endPointAsia, endPointEuropa, endPointOceania } from "../modelo/endPoint.js";
import { fnGenerarContenedores, render } from "../vista/funcionesDeLaVista.js";

window.onload = async () => {

    console.log(`Aplicación iniciada y esperando interacción...`);

    const idContenedorPrincipal = document.querySelector("#idContenedorPrincipal");

    // Función interna para manejar la lógica de carga y dibujado
    const cargarYMostrar = async (fuenteDatos, nombreRegion) => {
        // 1. Limpiamos lo que haya antes para que no se amontone
        idContenedorPrincipal.innerHTML = "";

        // 2. Obtenemos los datos
        const datosBrutos = await fuenteDatos();

        // 3. Los transformamos a formato simple 
        const paisesSimples = fnGenerarVectorSimple(datosBrutos);

        //Muestra en consola
        console.log(`\nRegión seleccionada: ${nombreRegion}`);
        console.log(`Cantidad de países encontrados: ${paisesSimples.length}`);
        console.log(`Lista de países (Objeto):`, paisesSimples);

        // 4. Creamos los elementos visuales 
        const elementos = fnGenerarContenedores(paisesSimples);

        // 5. Los mostramos en pantalla 
        render(elementos, idContenedorPrincipal);
    };

    // --- Configuramos los clics de las Mini Cards ---

    document.querySelector("#btn-africa").onclick = () =>
        cargarYMostrar(() => fnRecuperarDatosEndPoint(endPointAfrica), "África");

    document.querySelector("#btn-americas").onclick = () =>
        cargarYMostrar(() => fnRecuperarDatosEndPoint(endPointAmerica), "Américas");

    document.querySelector("#btn-asia").onclick = () =>
        cargarYMostrar(() => fnRecuperarDatosEndPoint(endPointAsia), "Asia");

    document.querySelector("#btn-europa").onclick = () =>
        cargarYMostrar(() => fnRecuperarDatosEndPoint(endPointEuropa), "Europa");

    document.querySelector("#btn-oceania").onclick = () =>
        cargarYMostrar(() => fnRecuperarDatosEndPoint(endPointOceania), "Oceanía");

    document.querySelector("#btn-todos").onclick = () =>
        cargarYMostrar(fnUnirPaisesDelMundo, "Mundo Completo");

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