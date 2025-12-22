

/* El objetivo de esta función es
tomar todos los paises del Vector Simple.
transformar cada pais en un elemento visual del DOM
*/
export const fnGenerarContenedores = (PaisesSimples) =>{

    const elementosDelDOM = PaisesSimples.map(pais =>{

        /* aqui dentro voy a construir el div
        por cada pais */

        const contenedorPais = document.createElement("div");

        const tituloDelPais = document.createElement("h2");
        tituloDelPais.textContent = pais.nombreOficial;

        const tituloSuperficie = document.createElement("h3");
        tituloSuperficie.textContent = pais.superficie;

        const imagenBandera = document.createElement("img");
        imagenBandera.src = pais.png;

        imagenBandera.onclick = ()=>{

            console.log(`La Poblacion de ${pais.nombreOficial} es de ${pais.poblacion}`);

        };

        const linea = document.createElement("hr");

        contenedorPais.appendChild(tituloDelPais);
        contenedorPais.appendChild(tituloSuperficie);
        contenedorPais.appendChild(imagenBandera);
        contenedorPais.appendChild(linea);

        // este returnes pais x pais
        return (contenedorPais);
    });

    // este return es cuando termino map y todos estan corvertidos //
    return elementosDelDOM;
};

export const render = (elementosDelDOM,idContendor)=>{
    
    // con esto se renderiza en el dom //
    elementosDelDOM.forEach(elemento =>idContendor.appendChild(elemento));

};