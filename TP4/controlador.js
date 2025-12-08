/* programa principal */

import { mostrarNombreAlumno, obtenerHTMLItemsListado } from './modelo.js';

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


const alumnos = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

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
// Ejercicio N°3
// Ejercicio N°4
// Ejercicio N°5
// Ejercicio N°6