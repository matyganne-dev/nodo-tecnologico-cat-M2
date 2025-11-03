

//Ejercicio N°13

export const calcularPrecioVenta = (importe, margen) => {
    return importe * (1 + margen / 100);
};


//Ejercicio N°14

export const calcularPromedio = (nota1, nota2, nota3) => {
    return ((nota1 + nota2 + nota3) / 3);
}


//Ejercicio N°15
export const calcularNota = (promedio) => {
    if (promedio >= 0 && promedio <= 4) {
        return "Desaprobado";
    } else if (promedio > 4 && promedio <= 7) {
        return "Aprobado";
    } else if (promedio > 7 && promedio <= 9) {
        return "Muy Bueno";
    } else if (promedio === 10) {
        return "Excelente";
    } else {
        return "valor ingresado incorrecto, revisar por favor";
    }
}