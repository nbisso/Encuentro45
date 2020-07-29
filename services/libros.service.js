const dataStore = require("../db/datastore")
const autorService = require('../services/autor.service')


module.exports.nuevoLibro = function (libro, data){

    let resultadoAutor = autorService.getAutorById(data)

    let agregaLibro = dataStore.agregarLibro(libro, resultadoAutor)
    return agregaLibro
}



