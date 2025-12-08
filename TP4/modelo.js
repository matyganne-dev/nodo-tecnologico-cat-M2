

/*1) Realice una función, que reciba como parámetro un vector de alumnos (puede ser de cualquier
cohorte) los recorra con un forEach y muestre por consola, el apellido y el nombre.

Invoque esa misma función, pasándole como parámetro el vector de la cohorte01, luego el vector de
la cohorte02 y así sucesivamente hasta la cuarta cohorte.
*/

export const mostrarNombreAlumno = (alumnos, nombreCohorte) => {
    console.log(`\nListado de Alumnos ${nombreCohorte}\n`);
    alumnos.forEach((alumno) => {
        console.log(`Alumno: ${alumno.apellido} ${alumno.nombre}`);
    });
}

export const obtenerHTMLItemsListado = (alumnos) => {
    let htmlContent = '';
    //Generamos el listado en el index
    alumnos.forEach((alumno) => {
        htmlContent += `<li>${alumno.apellido} ${alumno.nombre}</li>`;
    });

    return htmlContent;
}
