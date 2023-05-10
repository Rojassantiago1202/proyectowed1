function mostrarDatos() {
    // Cambiar el título de h1
    document.querySelector("h1").innerHTML = "Datos de Países";

    // Enviar solicitud a la API
    fetch("https://restcountries.com/v3.1/independent?status=true")
    .then(response => response.json())
    .then(data => {
        // Crear una tabla para mostrar los datos
        let tabla = document.createElement("table");
        tabla.innerHTML = `
            <tr>
                <th>Nombre común</th>
                <th>Nombre oficial</th>
                <th>Capital</th>
                <th>Moneda</th>
                <th>Idiomas</th>
                <th>Bandera</th>
                <th>Escudo</th>
                <th>Población</th>
            `;

        // Recorrer los datos de los países y agregarlos a la tabla
        data.forEach(pais => {
            let fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${pais.name.common}</td>
                <td>${pais.name.official}</td>
                <td>${pais.capital?.[0]}</td>
                <td>${pais.currency}</td>
                <td>${listarIdiomas(pais.languages)}</td>
                <td><img src="${pais.flags.png}" alt="bandera de ${pais.name.common}"></td>
                <td>${listarEscudos(pais)}</td>
                <td>${pais.population?.toLocaleString()}</td>
            `;
            tabla.appendChild(fila);
        });

        // Mostrar la tabla en pantalla
        document.getElementById("datos").appendChild(tabla);
    })
    .catch(error => console.error(error));
}

function listarIdiomas(idiomas) {
    // Crear una lista de idiomas
    let lista = "<ul>";
    for (let idioma in idiomas) {
        lista += `<li>${idiomas[idioma]}</li>`;
    }
    lista += "</ul>";
    return lista;
}

function listarEscudos(pais) {
    // Crear una lista de escudos de armas
    if (pais.flags.svg);
}