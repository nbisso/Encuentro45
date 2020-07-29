//IMPORTADO DE MODULOS NECESARIOS
const dataStore = require("../db/datastore")

//EXPORTACION DE MODULOS
module.exports.getAutores = function () {
    return dataStore.autores;
}

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

module.exports.modificaAutor = function (idAutor, data) {
    let buscarAutorporId = dataStore.autores.find(r => r.id == idAutor)

    if(buscarAutorporId) {
        let resultado = dataStore.modificaAutor(buscarAutorporId, data)
        return resultado
    }else {
        throw new Error ('No existe el autor que desea modificar')
    }
}

module.exports.borraAutor = function (idAutor) {
    let buscarAutorporId = dataStore.autores.find(r => r.id == idAutor)

    if(buscarAutorporId) {
        let resultado = dataStore.eliminaAutor(idAutor)
        return resultado
    }else {
        throw new Error ('No existe el autor que desea eliminar')
    }
}