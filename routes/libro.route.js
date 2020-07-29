/*
/autores/:id/libros
    GET: Devuelve todos los libros de un autor
    POST: Agrega un nuevo libro al autor

/autores/:id/libros/:idLibro
    GET: Devuelve el libro con el id indicado del autor
    POST: Modifica el libro con el id indicado del autor
    DELETE: Elimina el libro con el id indicado del autor
*/

const autorService = require("../services/autor.service")
const dataStore = require("../db/datastore")
const libroService = require ('../services/libros.service')

module.exports = function (server) {

    server.get('/autores/:id/libros', (req, res) =>{
        //id del autor
        //devolver el Array libros
        let data = req.params.id
        try {
            let resultado = autorService.getAutorById(data)
            res.status(200).json(resultado.libros)
        }catch (error) {
            res.status(404).json({error: error.message})
        }
    })

    server.post('/autores/:id/libros', (req,res)=>{
        let data = req.params.id
        let libro = req.body
        try {
            let libronuevo = libroService.nuevoLibro(libro, data)
            res.status(201).json(libronuevo)

        }catch (error) {
            res.status(404).json({error: error.message})
        }
    })

}