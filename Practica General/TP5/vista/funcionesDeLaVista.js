
//Formato card
export const fnGenerarContenedores = (PaisesSimples) => {
    return PaisesSimples.map(pais => {
        // Lógica para formatear la población dinámicamente - repetir en la tabla
        const formatearPoblacion = (num) => {
            if (num >= 1000000) {
                return (num / 1000000).toFixed(1) + "M";
            } else if (num >= 1000) {
                return (num / 1000).toFixed(0) + "K";
            } else {
                // Para países chiquitos
                return num;
            }
        };

        const contenedorPais = document.createElement("article");
        contenedorPais.classList.add("pais-card-moderna");

        contenedorPais.innerHTML = `
            <div class="notch-top-right">
                <span class="texto-notch">${pais.continente}</span>
            </div>

            <div class="background-bandera" style="background-image: url('${pais.png}');"></div>
            
            <div class="overlay-vidrio">
                <div class="pob-chip">
                    <span>${formatearPoblacion(pais.poblacion)}</span>
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

//Formato Tabla
export const fnGenerarTabla = (PaisesSimples) => {
    const tabla = document.createElement("table");
    tabla.classList.add("tabla-glass");

    tabla.innerHTML = `
        <thead>
            <tr>
                <th>Bandera</th>
                <th>Nombre</th>
                <th>Capital</th>
                <th>Población</th>
                <th>Continente</th>
            </tr>
        </thead>
        <tbody>
            ${PaisesSimples.map(pais => `
                <tr>
                    <td><img src="${pais.png}" class="img-tabla" alt="Bandera"></td>
                    <td><span class="nombre-tabla">${pais.nombreGenerico}</span></td>
                    <td>${pais.capital}</td>
                    <td>${(pais.poblacion / 1000000).toFixed(1)}M</td>
                    <td><span class="badge-tabla">${pais.continente}</span></td>
                </tr>
            `).join('')}
        </tbody>
    `;
    return [tabla];
};