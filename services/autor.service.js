const dataStore = require("../db/datastore")



module.exports.getAutores = function () {
    return dataStore.autores;
}

/**
 *{
    id:1,
    nombre:"",
    apellido: "" ,
    fechaDeNacimiento: 01/01/2000,
    libros: []
}
 */
module.exports.crearAutor = function (autor) {
    let buscarAutoresPorNombreYApellido = dataStore.autores
        .filter(r => r.nombre == autor.nombre && r.apellido == autor.apellido)

    if (buscarAutoresPorNombreYApellido.length > 0) {
        throw new Error("Ya existe un autor con ese nombre y apellido")
    }

    return dataStore.agregarAutor(autor);
}

module.exports.getAutorById = function (idAutor) {
    let buscarAutorporId = dataStore.autores.find(r => r.id == idAutor)

    if(buscarAutorporId){
        return buscarAutorporId

    }else {
        throw new Error ('No existe el autor que estas buscando')
    }
}

