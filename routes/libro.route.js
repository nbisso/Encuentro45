//IMPORTO MODULOS
const autorService = require("../services/autor.service")
const libroService = require ('../services/libros.service')

//EXPORTO LOS MODULOS
module.exports = function (server) {

    server.get('/autores/:id/libros', (req, res) =>{
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

    server.get('/autores/:id/libros/:idLibro', (req,res)=>{
        let data = req.params
        try {
            let resultado = libroService.getLibroByAutor(data)
            res.status(200).json(resultado)
        }catch (error) {
            res.status(404).json({error: error.message})
        }
    })

    server.put('/autores/:id/libros/:idLibro', (req,res)=>{
        let libro = req.body
        let data = req.params
        try {
            let resultado = libroService.modificaLibro(libro, data)
            res.status(200).json(resultado)
        }catch (error) {
            res.status(404).json({error: error.message})
        }
    })

    server.delete('/autores/:id/libros/:idLibro', (req,res)=>{
        let data = req.params
        try {
            let resultado = libroService.eliminaLibro(data)
            res.status(204).send(resultado)
        }catch (error) {
            res.status(404).json({error: error.message})
        }
    })
}