
let idLibro = 1;
let idAutor = 1;

//EXPORTO LA DB PARA SER UTILIZADA
module.exports = {
    autores: [

    ],
    agregarAutor(autor) {
        autor.id = idAutor;
        autor.libros = [];
        this.autores.push(autor)
        idAutor++;
        return autor
    },
    agregarLibro(libro, autor) {
        libro.id = idLibro
        autor.libros.push(libro)
        idLibro++
        return libro
    },
    modificaAutor(autor, data) {
        autor.nombre = data.nombre
        autor.apellido = data.apellido
        autor.fechaDeNacimiento = data.fechaDeNacimiento
        return autor
    },
    eliminaAutor(idAutor){
        let resultado = this.autores.findIndex(a => a.id == idAutor)
        this.autores.splice(resultado, 1)
        return true
    },
    modificaLibro (libroAMoficar, libro) {
        libroAMoficar.titulo = libro.titulo
        libroAMoficar.descripcion = libro.descripcion
        libroAMoficar.anioPublicaion = libro.anioPublicacion
        return libroAMoficar
    },
    eliminaLibro(idLibro, autor) {
        let resultado = autor.libros.findIndex(a=> a.id == idLibro)
        autor.libros.splice(resultado, 1)
        return true
    }
}