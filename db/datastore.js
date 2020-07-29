
let idLibro = 1;
let idAutor = 1;


module.exports = {
    libros: [

    ],
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
        libro.id = 1234124
        idLibro++
        return libro
    }

}