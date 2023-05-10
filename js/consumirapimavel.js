function consumirAPI() {
    var apikey = "d8b02dc109d7a677a61793797397e470";
    var ts = "1000";
    var hash = "15aa89127ec7f5cc41b3362aa8c68a9b";
    var url = 'http://gateway.marvel.com/v1/public/characters?ts=' + ts + "&apikey=" + apikey + "&hash=" + hash;    



    fetch(url)
        .then(response => response.json())
        .then(json => {

            var tablaMarvel = document.getElementById("tablaMarvl");

            for (item of json.data.results) {

                var fila = tablaMarvel.insertRow();

                var columnaIdentificador = fila.insertcell(0);
                var columnaNombre = fila.insertcell(1);
                var columnaDescription = fila.insertcell(2);
                var columnaImagen = fila.insertcell(3);

                columnaIdentificador.innerHTML = item.id;
                columnaNombre.innerHTML = item.name;
                columnaDescription.innerHTML = item.description;

                var urlImagen = item.thumbnail.path + "." + item.thumbnail.extension
                var imagen = crearImagen(urlImagen);
                columnaImagen.appendChild(imagen);
                console.log(urlImagen);


            }
        });
}