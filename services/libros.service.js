//IMPORTO LOS MODULOS NECESARIOS
const dataStore = require("../db/datastore")
const autorService = require('../services/autor.service')

//EXPORTO LOS MODULOS
module.exports.nuevoLibro = function (libro, data){

    let resultadoAutor = autorService.getAutorById(data)

    let agregaLibro = dataStore.agregarLibro(libro, resultadoAutor)
    return agregaLibro
}

module.exports.getLibroByAutor = function (data){
    let resultado = autorService.getAutorById(data.id)

    let libroAMostrar = resultado.libros.find(a=> a.id == data.idLibro)
    if(libroAMostrar){
        return libroAMostrar
    }else {
        throw new Error ('No existe el libro que estas buscando')
    }
}

module.exports.modificaLibro = function (libro, data){
    let libroAModificar = this.getLibroByAutor(data)
    let resultado = dataStore.modificaLibro(libroAModificar, libro)
    return resultado
}

module.exports.eliminaLibro = function (data){
    let resultado = autorService.getAutorById(data.id)
    let existeLibro = resultado.libros.find(a=> a.id == data.idLibro)

    if(existeLibro){
        let libroEliminado = dataStore.eliminaLibro(data.idLibro, resultado)
        return libroEliminado
    }else {
        throw new Error ('No existe el libro que estas buscando')
    }
}