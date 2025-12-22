
import { fnUnirPaisesDelMundo, fnGenerarVectorSimple, fnEjercitarDestructuring, fnEjercitarSpread } from "../modelo/fusionDeDatos.js";
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
        // Para Punto 2
        fnEjercitarDestructuring(datosBrutos);

        // Para Punto 3
        fnEjercitarSpread(datosBrutos, datosBrutos);

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
