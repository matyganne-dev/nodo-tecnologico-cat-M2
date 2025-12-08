

/*1) Realice una función, que reciba como parámetro un vector de alumnos (puede ser de cualquier
cohorte) los recorra con un forEach y muestre por consola, el apellido y el nombre.

Invoque esa misma función, pasándole como parámetro el vector de la cohorte01, luego el vector de
la cohorte02 y así sucesivamente hasta la cuarta cohorte.
*/

export const mostrarNombreAlumno = (alumnos) => {
    console.log("\nListado de Alumnos\n");
    alumnos.forEach((alumno) => {
        console.log(`Alumno: ${alumno.apellido} ${alumno.nombre}`);
    });
}


