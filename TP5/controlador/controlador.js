import { fnUnirPaisesDelMundo, fnGenerarVectorSimple, fnEjercitarDestructuring, fnProcesarIncisoE, fnEjecutarIncisoF } from "../modelo/fusionDeDatos.js";
import { fnRecuperarDatosEndPoint } from "../modelo/modelo.js";
import { endPointAfrica, endPointAmerica, endPointAsia, endPointEuropa, endPointOceania } from "../modelo/endPoint.js";
import { fnGenerarContenedores, render, fnGenerarTabla } from "../vista/funcionesDeLaVista.js";

// VARIABLES GLOBALES (Scope correcto para que cargarYMostrar las vea)
let modoCombinarActivo = false;
let regionAncla = null;
let nombreAncla = "";
let vistaActual = "cards"; // [cite: 88, 89]

const limpiarSeleccionContinentes = () => {
    document.querySelectorAll(".card-mini").forEach(card => {
        card.classList.remove("seleccionado");
        delete card.dataset.esAncla;
    });
};

window.onload = async () => {
    const idContenedorPrincipal = document.querySelector("#idContenedorPrincipal");
    const btnCombinar = document.querySelector("#btn-modo-combinar");
    const btnSwitch = document.querySelector("#btn-switch-vista"); // El botón que agregaste al HTML

    btnCombinar.onclick = () => {
        modoCombinarActivo = !modoCombinarActivo;
        regionAncla = null;
        nombreAncla = "";
        idContenedorPrincipal.innerHTML = "";
        limpiarSeleccionContinentes();
        btnCombinar.classList.toggle("activo", modoCombinarActivo);
        console.clear();
        console.log(modoCombinarActivo ? "MODO COMBINACIÓN ACTIVADO" : "MODO NORMAL ACTIVADO");
    };

    // Función para cambiar el fondo dinámicamente
    const actualizarFondo = (nombreRegion) => {
        const body = document.body;
        Array.from(body.classList).forEach(className => {
            if (className.startsWith('bg-')) body.classList.remove(className);
        });
        const nombreLimpio = nombreRegion.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
        body.classList.add(`bg-${nombreLimpio}`);
    };

    const cargarYMostrar = async (fuenteDatos, nombreRegion, elementoClickeado) => {
        actualizarFondo(nombreRegion);
        const datosBrutos = await fuenteDatos(); // [cite: 23, 28]
        let datosAMostrar;

        console.clear();

        if (!modoCombinarActivo) {
            limpiarSeleccionContinentes();
            elementoClickeado.classList.add("seleccionado");
            console.log(`REGIÓN: ${nombreRegion}`);
            console.log(`Cantidad de países encontrados: ${datosBrutos.length}`);
            fnEjercitarDestructuring(datosBrutos); // [cite: 62]
            datosAMostrar = datosBrutos;
        } else {
            if (!regionAncla) {
                regionAncla = datosBrutos;
                nombreAncla = nombreRegion;
                elementoClickeado.classList.add("seleccionado");
                elementoClickeado.dataset.esAncla = "true";
                datosAMostrar = datosBrutos;
                console.log(`Ancla fijada en: ${nombreAncla}. Selecciona otra región.`);
            } else {
                document.querySelectorAll(".card-mini").forEach(card => {
                    if (!card.dataset.esAncla) card.classList.remove("seleccionado");
                });
                elementoClickeado.classList.add("seleccionado");

                // Inciso E - Combinar regiones [cite: 77]
                datosAMostrar = fnProcesarIncisoE(regionAncla, datosBrutos, nombreAncla, nombreRegion);

                // Inciso F - Objeto simplificado [cite: 79]
                fnEjecutarIncisoF(datosAMostrar);
            }
        }

        const paisesSimples = fnGenerarVectorSimple(datosAMostrar);
        idContenedorPrincipal.innerHTML = "";

        // LÓGICA DE ALTERNANCIA DE VISTA (PUNTO 04) [cite: 86, 89]
        const elementos = (vistaActual === "cards")
            ? fnGenerarContenedores(paisesSimples)
            : fnGenerarTabla(paisesSimples);

        render(elementos, idContenedorPrincipal); // [cite: 88]
    };

    // BOTONES DE CONTINENTES
    document.querySelector("#btn-africa").onclick = function () { cargarYMostrar(() => fnRecuperarDatosEndPoint(endPointAfrica), "África", this); };
    document.querySelector("#btn-americas").onclick = function () { cargarYMostrar(() => fnRecuperarDatosEndPoint(endPointAmerica), "Américas", this); };
    document.querySelector("#btn-asia").onclick = function () { cargarYMostrar(() => fnRecuperarDatosEndPoint(endPointAsia), "Asia", this); };
    document.querySelector("#btn-europa").onclick = function () { cargarYMostrar(() => fnRecuperarDatosEndPoint(endPointEuropa), "Europa", this); };
    document.querySelector("#btn-oceania").onclick = function () { cargarYMostrar(() => fnRecuperarDatosEndPoint(endPointOceania), "Oceanía", this); };

    document.querySelector("#btn-todos").onclick = function () {
        modoCombinarActivo = false;
        regionAncla = null;
        btnCombinar.classList.remove("activo");
        limpiarSeleccionContinentes();
        cargarYMostrar(fnUnirPaisesDelMundo, "Mundo Completo", this);
    };

    // INTERRUPTOR DE VISTA (Asegúrate que el ID coincida con tu HTML)
    if (btnSwitch) {
        btnSwitch.onclick = () => {
           
            vistaActual = (vistaActual === "cards") ? "tabla" : "cards";

            const span = btnSwitch.querySelector("span");
            const img = btnSwitch.querySelector("img");

            if (vistaActual === "cards") {
                span.textContent = "Ver Tabla";
                img.src = "https://img.icons8.com/deco/48/day-view.png";
            } else {
                span.textContent = "Ver Cards";
                img.src = "https://img.icons8.com/deco/48/bank-card-front-side.png";
            }

            const seleccionado = document.querySelector(".card-mini.seleccionado");
            if (seleccionado) seleccionado.click();
        };
    }
};