export const fnGenerarContenedores = (PaisesSimples) => {
    return PaisesSimples.map(pais => {
        const contenedorPais = document.createElement("article");
        contenedorPais.classList.add("pais-card-moderna");

        contenedorPais.innerHTML = `
            <div class="notch-top-right">
                <span class="texto-notch">${pais.continente}</span>
            </div>

            <div class="background-bandera" style="background-image: url('${pais.png}');"></div>
            
            <div class="overlay-vidrio">
                <div class="pob-chip">
                    <span>${(pais.poblacion / 1000000).toFixed(1)}M</span>
                </div>

                <div class="info-secundaria">
                    <p>capital: <strong>${pais.capital}</strong></p>
                    <p>oficial: <strong>${pais.nombreOficial}</strong></p>
                </div>
            </div>

            <div class="notch-bottom-left">
                <span class="nombre-texto">${pais.nombreGenerico}</span>
            </div>
        `;
        return contenedorPais;
    });
};

export const render = (elementosDelDOM, idContenedor) => {
    idContenedor.innerHTML = "";
    elementosDelDOM.forEach(elemento => idContenedor.appendChild(elemento));
};