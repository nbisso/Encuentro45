/**
 *
 * RestFull API (Autores)

La idea es armar una API que nos permita manejar y devolver al cliente Autores.

Autor
{
    id:1,
    nombre:"",
    apellido: "" ,
    fechaDeNacimiento: 01/01/2000,
    libros: []
}

Libros
{
    id: 1,
    titulo: "",
    descripcion: "",
    anioPublicacion: 2001
}



Rutas/Libros

/autores/:id/libros
    GET: Devuelve todos los libros de un autor
    POST: Agrega un nuevo libro al autor

/autores/:id/libros/:idLibro
    GET: Devuelve el libro con el id indicado del autor
    POST: Modifica el libro con el id indicado del autor
    DELETE: Elimina el libro con el id indicado del autor

Validaciones - Autores
    GET /autores
        Devuelve la lista de autores si hay alguno o un array vacío
    POST /autores
        Si ya existe un autor con mismo nombre y apellido, devuelve 409
        De lo contrario agrega el nuevo autor y devuelve 201 con el JSON correspondiente al autor
    GET /autores/:id
        Si el autor no existe devuelve 404
        De lo contrario devuelve 200 con el autor correspondiente
    PUT /autores/:id
        Si el autor no existe devuelve 404
        De lo contrario modifica el autor y devuelve 200 con el autor correspondiente
    DELETE /autores/:id
        Si el autor no existe devuelve 404
        De lo contrario elimina el autor y devuelve 204

Validaciones - Libros
    GET /autores/:id/libros
        Si el autor no existe devuelve 404
        si el autor no tiene ningún libro devuelve 200 con un array vacío
        Caso contrario devuelve 200 con la lista de libros del autor
    POST /autores/:id/libros
        Si el autor no existe devuelve 404
        De lo contrario agrega el libro al autor y devuelve 201 con el libro agregado
    GET /autores/:id/libros/:idLibro
        Si el autor no existe devuelve 404
        si el libro no existe devuelve 404
        Caso contrario devuelve 200 con el libro correspondiente
    PUT /autores/:id/libros/:idLibro
        Si el autor no existe devuelve 404
        Si el libro no existe devuelve 404
        De lo contrario modifica el libro y devuelve 200 con el libro modificado
    DELETE /autores/:id/libros/:idLibro
        Si el autor no existe devuelve 404
        Si el libro no existe devuelve 404
        De lo contrario elimina el libro y devuelve 204
 *
 */
const autorRoute = require("./routes/autor.route")

const express = require("express")

const server = express();

server.use(express.json())


server.get("/ping", (req, res) => {
    res.send("pong");
})

server.get("/pong", (req, res) => {
    res.send("ping")
})

autorRoute(server)

server.use((err, req, res, next) => {
    // console.log(err)
    if (err) {
        console.log(err)
        if (!res.headersSent) {
            res.status(500).send("Error en el servidor: " + err.message)
        }
    }
    next();
})

server.listen(3000, () => {
    console.log("inicio el server")
})