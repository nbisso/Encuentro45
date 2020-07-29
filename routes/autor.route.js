//IMPORTADO DE MODULOS
const autorService = require("../services/autor.service")

//EXPORT DE MODULOS 
module.exports = function (server) {

    server.get("/autores", (req, res) => {
        let autores = autorService.getAutores();
        res.json(autores)
    })

    server.post("/autores", (req, res) => {
        let autor = req.body;
        try {
            let autorNuevo = autorService.crearAutor(autor);
            res.status("201").json(autorNuevo)
        } catch (err) {
            res.status(409).json({ error: err.message })
        }
    })

    server.get('/autores/:id', (req,res)=>{
        let idAutor = req.params.id
        try {
            let resultado = autorService.getAutorById(idAutor)
            res.status(200).json(resultado)

        }catch (error) {
            res.status(404).json({error: error.message})
        }
    })

    server.put('/autores/:id', (req,res)=> {
        let idAutor = req.params.id
        let data = req.body
        try {
            let resultado = autorService.modificaAutor(idAutor, data)
            res.status(200).json(resultado)
        }catch (error) {
            res.status(404).json({error: error.message})
        }
    })

    server.delete('/autores/:id', (req,res)=> {
        let idAutor = req.params.id
        try {
            let resultado = autorService.borraAutor(idAutor)
            console.log(resultado)
            res.status(204).send(resultado)
        }catch (error){
            res.status(404).json({error: error.message})
        }
    })
}