//IMPORTO LOS MODULOS NECESARIOS
const autorRoute = require("./routes/autor.route")
const libroRoute = require('./routes/libro.route')
const express = require("express")
const server = express();

//MIDDLEWARES
server.use(express.json())

//ROUTER
server.get("/ping", (req, res) => {
    res.headersSent
    res.send("pong")
})

autorRoute(server)
libroRoute(server)

//MANEJO DE ERRORES GENERALES
server.use((err, req, res, next) => {
    if (err) {
        console.log(err)
        if (!res.headersSent) {
            res.status(500).send("Error en el servidor: " + err.message)
        }
    }
    next();
})

//INICIO DEL SERVIDOR
server.listen(3000, () => {
    console.log("inicio el server")
})