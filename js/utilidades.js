function crearElemento(nombreTag) {

    return document.createElement(nombreTag);
    
}

function crearElementoConTexto(nombreTag, textoTag) {

    var elemento = crearElemento(nombreTag);
    var elemntoTexto = document.createTextNode(textoTag);
    elemento.appendChild(elemntoTexto);
    return elemento;
    
}

function adicionarBody(elemento) {

    document.body.appendChild(elemento);

}

function crearImagen(urlImagen){

 var img = crearElemento("img");
 img.src = urlImagen;
 return img;

}

function adicionarHijos(padre, hijo) {

 padre.appendChild(hijo);

}

function crearLink(TextoLink, urlReferencia) {

 var a = crearElementoConTexto("a", TextoLink);
 a.href = urlReferencia;
 return a;

}

function crearImagen(){

        var img = crearElemento("img");
        img.src = urlImagen;
        return img;

}

function crearElemento(nombreTag) {
    return document.createElement(nombreTag);
}

function crearElementoConTexto(nombreTag, textoTag) {
    var elemento = crearElemento(nombreTag);
    var elementoTexto = document.createTextNode(textoTag);
    elemento.appendChild(elementoTexto);
    return elemento;
}

function crearLink(textoLink, urlReferencia) {

    var a = crearElementoConTexto("a",textoLink);
    a.href = urlReferencia;
    return a;

}

function adicionarHijo(padre, hijo) {

    padre.appendChild(hijo);
}
