

/*

1) Realice una función, que reciba como parámetro un vector de alumnos (puede ser de cualquier
cohorte) los recorra con un forEach y muestre por consola, el apellido y el nombre.

Invoque esa misma función, pasándole como parámetro el vector de la cohorte01, luego el vector de
la cohorte02 y así sucesivamente hasta la cuarta cohorte.

2) El profesor desea unificar todos los alumnos en un solo vector, dado que estructuralmente son
iguales, utilice spread operator para “unificar el contenido de las cuatro cohortes” en un solo
vector. Muestre por consola el vector resultante.
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

/*
3)Sobre los datos unificados, cree dos vectores nuevos, uno puede llamarse alumnosAprobados y el
otro alumnosDesaprobados.

Para crear el vector de alumnos aprobados, aplique el método filter sobre el Vector que tiene todos
los alumnos cuando la nota > 5;

Para crear el vector de alumnos desaprobados, aplique el método filter sobre el Vector que tiene
todos los alumnos cuando la nota <= 5;
*/

//Alumnos Aprobados
export const obtenerAprobados = (alumnos) => {
    return alumnos.filter(alumno => alumno.nota_final > 5);
}
//Alumnos desaprobados
export const obtenerDesaprobados = (alumnos) => {
    return alumnos.filter(alumno => alumno.nota_final <= 5);
}

// Función de ítems que incluye la NOTA y el estado (para el DOM)
export const obtenerHTMLItemsFiltrados = (alumnos) => {
    let htmlContent = '';
    alumnos.forEach((alumno) => {
        htmlContent += `<li> ${alumno.apellido} ${alumno.nombre} (Nota: ${alumno.nota_final})</li>`;
    });
    return htmlContent;
}

/*
4)Sobre el vector Total de alumnos (cuatro cohortes), aplique el método “sort” = ordenar y ordene los
datos de todos esos alumnos por nota de menor a mayor.
*/

export const ordenarNotaMenorMayor = (alumnos) => {
    //creamos copia para no modificar la original
    const alumnosCopia = [...alumnos];
    return alumnosCopia.sort((a, b) => a.nota_final - b.nota_final);
}

export const obtenerHTMLItemsOrdenados = (alumnosOrdenados) => {
    let htmlContent = '';
    alumnosOrdenados.forEach((alumno) => {
        htmlContent += `<li>${alumno.apellido} ${alumno.nombre} Nota: ${alumno.nota_final}</li>`;
    });

    return htmlContent;
}

/*
5)Sobre el vector Total de alumnos, realice una búsqueda de los siguientes alumnos aplicando el
método “find” que tienen los vectores incorporados y busque algún alumno por su “dni”. El que ud.
Desee.
*/


/*
6)Sobre el vector Total de alumnos, deseamos “contabilizar” la cantidad de alumnos aprobados, es
decir la cantidad de alumnos que tienen nota > 5; para ello utilicen el método reduce que tienen los
vectores incorporados para contabilizar. Realice esto de dos formas

    a. Usando una arrow function que a dentro utilice un condicional if/else para saber si la nota >
    5 y por lo tanto contabilizar los aprobados;

    b. Usando una arrow function que a dentro utilice un operador ternario para saber si la nota >
    5 y por lo tanto contabilizar los aprobados;

Ambas formas deben llegar al mismo resultado, únicamente que se implementaron de dos formas
diferentes.
*/
