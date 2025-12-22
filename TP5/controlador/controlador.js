import { fnUnirPaisesDelMundo, fnGenerarVectorSimple, fnEjercitarDestructuring, fnProcesarIncisoE, fnEjecutarIncisoF } from "../modelo/fusionDeDatos.js";
import { fnRecuperarDatosEndPoint } from "../modelo/modelo.js";
import { endPointAfrica, endPointAmerica, endPointAsia, endPointEuropa, endPointOceania } from "../modelo/endPoint.js";
import { fnGenerarContenedores, render } from "../vista/funcionesDeLaVista.js";

let modoCombinarActivo = false;
let regionAncla = null;
let nombreAncla = "";

const limpiarSeleccionContinentes = () => {
    document.querySelectorAll(".card-mini").forEach(card => {
        card.classList.remove("seleccionado");
        delete card.dataset.esAncla;
    });
};

window.onload = async () => {
    const idContenedorPrincipal = document.querySelector("#idContenedorPrincipal");
    const btnCombinar = document.querySelector("#btn-modo-combinar");

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

    const cargarYMostrar = async (fuenteDatos, nombreRegion, elementoClickeado) => {
        const datosBrutos = await fuenteDatos();
        let datosAMostrar;

        console.clear();

        if (!modoCombinarActivo) {
            // Modo Normal: Puntos A, B, C, D
            limpiarSeleccionContinentes();
            elementoClickeado.classList.add("seleccionado");
            console.log(`REGIÓN: ${nombreRegion}`);
            fnEjercitarDestructuring(datosBrutos); 
            datosAMostrar = datosBrutos;
        } else {
            // Modo Combinación: Puntos E, F
            if (!regionAncla) {
                regionAncla = datosBrutos;
                nombreAncla = nombreRegion;
                elementoClickeado.classList.add("seleccionado");
                elementoClickeado.dataset.esAncla = "true";
                datosAMostrar = datosBrutos;
                console.log(`Ancla fijada en: ${nombreAncla}. Selecciona otra región.`);
            } else {
                document.querySelectorAll(".card-mini").forEach(card => { 
                    if(!card.dataset.esAncla) card.classList.remove("seleccionado");
                });
                elementoClickeado.classList.add("seleccionado");

                // Inciso E
                datosAMostrar = fnProcesarIncisoE(regionAncla, datosBrutos, nombreAncla, nombreRegion);
                
                // Inciso F
                fnEjecutarIncisoF(datosAMostrar);
            }
        }

        const paisesSimples = fnGenerarVectorSimple(datosAMostrar);
        idContenedorPrincipal.innerHTML = "";
        const elementos = fnGenerarContenedores(paisesSimples);
        render(elementos, idContenedorPrincipal);
    };

    document.querySelector("#btn-africa").onclick = function() { 
        cargarYMostrar(() => fnRecuperarDatosEndPoint(endPointAfrica), "África", this); 
    };
    document.querySelector("#btn-americas").onclick = function() { 
        cargarYMostrar(() => fnRecuperarDatosEndPoint(endPointAmerica), "Américas", this); 
    };
    document.querySelector("#btn-asia").onclick = function() { 
        cargarYMostrar(() => fnRecuperarDatosEndPoint(endPointAsia), "Asia", this); 
    };
    document.querySelector("#btn-europa").onclick = function() { 
        cargarYMostrar(() => fnRecuperarDatosEndPoint(endPointEuropa), "Europa", this); 
    };
    document.querySelector("#btn-oceania").onclick = function() { 
        cargarYMostrar(() => fnRecuperarDatosEndPoint(endPointOceania), "Oceanía", this); 
    };

    document.querySelector("#btn-todos").onclick = function() {
        modoCombinarActivo = false;
        regionAncla = null;
        btnCombinar.classList.remove("activo");
        limpiarSeleccionContinentes();
        cargarYMostrar(fnUnirPaisesDelMundo, "Mundo Completo", this);
    };
};