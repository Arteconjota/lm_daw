class Libro {
    constructor(ISBN, titulo, autor) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
    }

    prestar() {
        console.log(`Se ha prestado el libro '${this.titulo}' de ${this.autor}`);
    }
    devolver() {
        console.log(`Se ha devuelto el libro '${this.titulo}' de ${this.autor}`);
    }
}

class Usuario {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    solicitarLibro(Libro) {
        console.log(`${this.nombre} con ID ${this.id} ha solicitado el libro '${Libro.titulo}'.`);
    }

    devolverLibro(Libro) {
        console.log(`${this.nombre} con ID ${this.id} ha devuelto el libro '${Libro.titulo}'.`);
    }
}

class Bibliotecario {
    constructor(turno) {
        this.turno = turno;
    }

    registrarLibro(ISBN, titulo, autor) {
        console.log(`Se ha registrado el libro '${titulo}' (ISBN: ${ISBN})\nAutor: ${autor}`);
    }
}

const user = new Usuario(1, 'John');
const book = new Libro('0000125001456', 'Ángeles y Demonios', 'Dan Brown');
const booKepper = new Bibliotecario('Mañana');

book.prestar();
book.devolver();
user.solicitarLibro(book);
user.devolverLibro(book);
booKepper.registrarLibro('0000525480147', 'Teo va al parque', 'Nisu Laconoce');