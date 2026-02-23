/*
Una Frigorífico posee una cinta transportadora y clasificadora de huevos para consumo humano. La cinta 
no tan solo los transporta sino también los clasifica según su peso. es decir, al final de la cinta existe una balanza 
electrónica de alta precisión que evalúa su peso y los clasifica. 

a) XL, súper grandes: peso ≥ 73 gramos.  
b) L, grandes: peso ≥ 63 gramos y < 73 gramos.  
c) M, medianos: peso ≥ 53 gramos y < 63 gramos. 

Nota: considere como descartados aquellos que no estén dentro del rango de valores aceptables. 

Determinar lo siguiente: 

1) Cantidad total de Huevos (Todas las categorías) 
2) Cantidad total de Huevos XL 
3) Cantidad total de Huevos L 
4) Cantidad total de Huevos M 
5) Cantidad total de Huevos descartados 
6) Determinar el % de Huevos XL sobre el Total 
7) Determinar el % de Huevos L sobre el Total 
8) Determinar el % de Huevos M sobre el Total 

*/


let pesoHuevo = 0, salida = 1;
let XL = 0, L = 0, M = 0, totalCategorias = 0, descartados = 0;
let porcentajeXL = 0, porcentajeL = 0, porcentajeM = 0;


do {

    pesoHuevo = Number(prompt("ingreso del peso del huevo:"));

    if (pesoHuevo >= 73) {
        //console.log(`peso del huevo: ${pesoHuevo}g`);
        XL++;
    } else if (pesoHuevo >= 63 && pesoHuevo < 73) {
        //console.log(`peso del huevo: ${pesoHuevo}g`);
        L++;
    } else if (pesoHuevo >= 53 && pesoHuevo < 63) {
        //console.log(`peso del huevo: ${pesoHuevo}g`);
        M++;
    } else if (pesoHuevo < 0 || pesoHuevo === null || isNaN(pesoHuevo)) {
        console.log("Peso inválido. Intente nuevamente.");
    } else {
        console.log(`peso del huevo: ${pesoHuevo}, Descartado al no cumplir con rango de pesaje`);
        descartados++
    }

    salida = Number(prompt("¿Desea continuar? 1-si 0-NO"));
} while (salida !== 0);



totalCategorias = XL + L + M + descartados;
console.log(`Cantidad total de Huevos (Todas las categorías)  ${totalCategorias}`);
console.log(`Cantidad total de Huevos XL: ${XL}`);
console.log(`Cantidad total de Huevos L: ${L}`);
console.log(`Cantidad total de Huevos M: ${M}`);
console.log(`Cantidad total de Huevos descartados: ${descartados}`);

porcentajeXL = (XL / totalCategorias) * 100;
porcentajeL = (L / totalCategorias) * 100;
porcentajeM = (M / totalCategorias) * 100;

console.log(`porcentaje de Huevos XL: ${porcentajeXL.toFixed(2)} %`);
console.log(`porcentaje de Huevos L: ${porcentajeL.toFixed(2)} %`);
console.log(`porcentaje de Huevos M: ${porcentajeM.toFixed(2)} %`);