/* programa principal */

import { mostrarNombreAlumno, obtenerHTMLItemsListado } from './modelo.js';
import { obtenerAprobados, obtenerDesaprobados, obtenerHTMLItemsFiltrados } from './modelo.js';
import { obtenerHTMLItemsOrdenados, ordenarNotaMenorMayor } from './modelo.js';
import { buscarAlumnoDni } from './modelo.js';
import { contarAprobados, contarAprobadosTernario } from './modelo.js';


/*
Ejercicio Nro. 18: ( spread operator ... y métodos de vectores)
*/

const cohorte01 = [
    { dni: "12345678", nombre: "Juan", apellido: "Pérez", nota_final: 8 },
    { dni: "23456789", nombre: "Ana", apellido: "Gómez", nota_final: 6 },
    { dni: "34567890", nombre: "Carlos", apellido: "López", nota_final: 5 },
    { dni: "45678901", nombre: "María", apellido: "Martínez", nota_final: 7 }
];
const cohorte02 = [
    { dni: "56789012", nombre: "Sofía", apellido: "Ramírez", nota_final: 9 },
    { dni: "67890123", nombre: "Luis", apellido: "Fernández", nota_final: 4 },
    { dni: "78901234", nombre: "Elena", apellido: "Torres", nota_final: 5 }
];

const cohorte03 = [
    { dni: "89012345", nombre: "Pedro", apellido: "Álvarez", nota_final: 10 },
    { dni: "90123456", nombre: "Clara", apellido: "Méndez", nota_final: 3 },
    { dni: "12345679", nombre: "Jorge", apellido: "Salinas", nota_final: 6 },
    { dni: "23456780", nombre: "Andrea", apellido: "Cruz", nota_final: 2 },
    { dni: "34567891", nombre: "Sergio", apellido: "Paredes", nota_final: 8 }
];

const cohorte04 = [
    { dni: "45678902", nombre: "Lucía", apellido: "Ortiz", nota_final: 7 },
    { dni: "56789013", nombre: "Miguel", apellido: "Vega", nota_final: 4 },
    { dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9 },
    { dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5 },
    { dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6 },
    { dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3 }
];




// Ejercicio N°1

//capturamos los eleemntos
const btnC1 = document.getElementById('btn-cohorte1');
const btnC2 = document.getElementById('btn-cohorte2');
const btnC3 = document.getElementById('btn-cohorte3');
const btnC4 = document.getElementById('btn-cohorte4');
const btnLimpiar = document.getElementById('btn-limpiar');
const resultadosDiv1 = document.getElementById('ejercicio1-resultados');

const listarCohorte = (cohorteVector, nombre) => {
    // Limpiar resultados Anteriores
    resultadosDiv1.innerHTML = '';

    // Mostrar en consola como pide el ejercicio
    mostrarNombreAlumno(cohorteVector, nombre);

    const itemsHTML = obtenerHTMLItemsListado(cohorteVector);

    let htmlContent = `<h3>${nombre}</h3>`;

    //Usamos ternario para avisar sobre si el vector esta vacio
    htmlContent += (cohorteVector.length > 0)
        ? `<ul>${itemsHTML}</ul>`
        : `<p>Error: Vector vacío.</p>`;

    resultadosDiv1.innerHTML = htmlContent;
};

if (btnC1) {
    btnC1.addEventListener('click', () => {
        listarCohorte(cohorte01, "Cohorte 01");
    });
}
if (btnC2) {
    btnC2.addEventListener('click', () => {
        listarCohorte(cohorte02, "Cohorte 02");
    });
}
if (btnC3) {
    btnC3.addEventListener('click', () => {
        listarCohorte(cohorte03, "Cohorte 03");
    });
}
if (btnC4) {
    btnC4.addEventListener('click', () => {
        listarCohorte(cohorte04, "Cohorte 04");
    });
}
if (btnLimpiar) {
    btnLimpiar.addEventListener('click', () => {
        resultadosDiv1.innerHTML = '';
    });
}

// Ejercicio N°2

//usames spread operator para empaquetar los vectores
const alumnos = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

const btnListar = document.getElementById('btn-listar');
const btnLimpiar1 = document.getElementById('btn-limpiar1');
const resultadosDiv2 = document.getElementById('ejercicio2-resultados');

const listarAlumnos = (cohortesUnidas, nombre) => {
    // Limpiar resultados Anteriores
    resultadosDiv2.innerHTML = '';

    // Mostrar en consola como pide el ejercicio
    mostrarNombreAlumno(cohortesUnidas, nombre);

    const itemsHTML = obtenerHTMLItemsListado(cohortesUnidas);

    let htmlContent = `<h3>Lista ${nombre}</h3>`;

    //Usamos ternario para avisar sobre si el vector esta vacio
    htmlContent += (cohortesUnidas.length > 0)
        ? `<ul>${itemsHTML}</ul>`
        : `<p>Error: Vector vacío.</p>`;

    resultadosDiv2.innerHTML = htmlContent;
};

if (btnListar) {
    btnListar.addEventListener('click', () => {
        listarAlumnos(alumnos, "completa");
    });
}
if (btnLimpiar1) {
    btnLimpiar1.addEventListener('click', () => {
        resultadosDiv2.innerHTML = '';
    });
}


// Ejercicio N°3
//captura de elementos
const btnA = document.getElementById('btn-A');
const btnF = document.getElementById('btn-F');
const btnLimpiar2 = document.getElementById('btn-limpiar2');
const resultadosDiv3A = document.getElementById('ejercicio3-resultados-Aprobados');
const resultadosDiv3F = document.getElementById('ejercicio3-resultados-Desaprobados');

//filtro de aprobados
const manejarAprobados = () => {
    resultadosDiv3A.innerHTML = '';
    resultadosDiv3F.innerHTML = '';

    const alumnosAprobados = obtenerAprobados(alumnos);

    console.log("\nEjercicio 3: Aprobados ");
    console.log(alumnosAprobados);

    const itemsHTML = obtenerHTMLItemsFiltrados(alumnosAprobados);
    let htmlContent = `<h3>Alumnos Aprobados (${alumnosAprobados.length})</h3>`;

    htmlContent += (alumnosAprobados.length > 0)
        ? `<ul>${itemsHTML}</ul>`
        : `<p>No hay alumnos aprobados (Nota > 5).</p>`;

    resultadosDiv3A.innerHTML = htmlContent;
};

//filtro desaprobados
const manejarDesaprobados = () => {
    resultadosDiv3A.innerHTML = '';
    resultadosDiv3F.innerHTML = '';

    const alumnosDesaprobados = obtenerDesaprobados(alumnos);

    console.log("\nEjercicio 3: Desaprobados");
    console.log(alumnosDesaprobados);

    const itemsHTML = obtenerHTMLItemsFiltrados(alumnosDesaprobados);
    let htmlContent = `<h3>Alumnos Desaprobados (${alumnosDesaprobados.length})</h3>`;

    htmlContent += (alumnosDesaprobados.length > 0)
        ? `<ul>${itemsHTML}</ul>`
        : `<p>No hay alumnos desaprobados (Nota <= 5).</p>`;

    resultadosDiv3F.innerHTML = htmlContent;
};

if (btnA) {
    btnA.addEventListener('click', manejarAprobados);
}
if (btnF) {
    btnF.addEventListener('click', manejarDesaprobados);
}
if (btnLimpiar2) {
    btnLimpiar2.addEventListener('click', () => {
        resultadosDiv3A.innerHTML = '';
        resultadosDiv3F.innerHTML = '';
    });
}

// Ejercicio N°4

const btnSort = document.getElementById('btn-sort');
const btnLimpiar4 = document.getElementById('btn-limpiar4');
const resultadosDiv4 = document.getElementById('ejercicio4-resultados');

const manejarOrdenamiento = () => {
    resultadosDiv4.innerHTML = '';

    // Obtener el vector ordenado
    const alumnosOrdenados = ordenarNotaMenorMayor(alumnos);

    // Mostrar el vector ordenado por consola
    console.log("\nEjercicio 4: Alumnos Ordenados por Nota menor a mayor");
    console.log(alumnosOrdenados);

    //Generacion de HTML para el DOM
    const itemsHTML = obtenerHTMLItemsOrdenados(alumnosOrdenados);
    let htmlContent = `<h3>Listado Ordenado por Nota (Menor a Mayor)</h3>`;

    htmlContent += (alumnosOrdenados.length > 0)
        ? `<ol>${itemsHTML}</ol>`
        : `<p>Error: No se pudo realizar el ordenamiento.</p>`;

    resultadosDiv4.innerHTML = htmlContent;
};

if (btnSort) {
    btnSort.addEventListener('click', manejarOrdenamiento);
}
if (btnLimpiar4) {
    btnLimpiar4.addEventListener('click', () => {
        resultadosDiv4.innerHTML = '';
    });
}

// Ejercicio N°5

const btnBuscar = document.getElementById('btn-buscar');
const inputDNI = document.getElementById('input-dni');
const btnLimpiar5 = document.getElementById('btn-limpiar5');
const resultadosDiv5 = document.getElementById('ejercicio5-resultados');

// function para manejar el evento del boton
const manejarBusqueda = () => {
    resultadosDiv5.innerHTML = '';
    const dniBuscado = inputDNI.value.trim();

    if (dniBuscado.length === 0) {
        resultadosDiv5.innerHTML = `<p class="error">Por favor, ingrese un DNI.</p>`;
        return;
    }

    // Obtener el alumno buscado
    const alumnoEncontrado = buscarAlumnoDni(alumnos, dniBuscado);

    // Mostrar resultado por consola
    console.log(`\nEjercicio 5: Busqueda por DNI: ${dniBuscado}`);
    console.log(alumnoEncontrado);

    // Renderizado con el operador ternario
    let htmlContent = `<h3>Resultado de Búsqueda</h3>`;

    htmlContent += (alumnoEncontrado)
        ? `<div class="alumno-card">
            <p>¡Alumno Encontrado!</p>
            <ul>
                <li>DNI: ${alumnoEncontrado.dni}</li>
                <li>Nombre: ${alumnoEncontrado.nombre} ${alumnoEncontrado.apellido}</li>
                <li>Nota Final: ${alumnoEncontrado.nota_final}</li>
            </ul>
           </div>`
        : `<p class="error">Alumno con DNI ${dniBuscado} no encontrado.</p>`;

    // agregar en el DOM
    resultadosDiv5.innerHTML = htmlContent;
};

if (btnBuscar) {
    btnBuscar.addEventListener('click', manejarBusqueda);
}
if (btnLimpiar5) {
    btnLimpiar5.addEventListener('click', () => {
        resultadosDiv5.innerHTML = '';
        inputDNI.value = ''; // Limpiar también el input
    });
}



// Ejercicio N°6

const btnContabilizar = document.getElementById('btn-contabilizar');
const btnLimpiar6 = document.getElementById('btn-limpiar6');
const resultadosDiv6 = document.getElementById('ejercicio6-resultados');

const manejarContabilizacion = () => {
    resultadosDiv6.innerHTML = '';

    // Contabilizar usando if/else 
    const totalIfElse = contarAprobados(alumnos);

    // Contabilizar usando ternario 
    const totalTernario = contarAprobadosTernario(alumnos);

    // Mostrar resultados por consola
    console.log(`\nEjercicio 6: Contabilización con REDUCE (Nota > 5)`);
    console.log(`a. Total Aprobados (If/Else): ${totalIfElse}`);
    console.log(`b. Total Aprobados (Ternario): ${totalTernario}`);

    // Renderizado en el DOM (Mostrando que ambos son iguales)
    let htmlContent = `<h3>Resultados de Contabilización</h3>`;

    if (totalIfElse === totalTernario) {
        htmlContent += `
            <p>Resultado Verificado: Ambas formas de implementación llegaron al mismo resultado.</p>
            <ul>
                <li>Total Aprobados (Usando If/Else): <strong>${totalIfElse}</strong></li>
                <li>Total Aprobados (Usando Operador Ternario): <strong>${totalTernario}</strong></li>
            </ul>
        `;
    } else {
        htmlContent += `<p class="error">Error: Los resultados de If/Else y Ternario no coinciden.</p>`;
    }

    resultadosDiv6.innerHTML = htmlContent;
};


if (btnContabilizar) {
    btnContabilizar.addEventListener('click', manejarContabilizacion);
}
if (btnLimpiar6) {
    btnLimpiar6.addEventListener('click', () => {
        resultadosDiv6.innerHTML = '';
    });
}