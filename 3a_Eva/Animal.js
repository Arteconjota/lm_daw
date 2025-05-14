class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar() {
        console.log("El animal está hablando.");
    }
}

class Gato extends Animal {
    constructor(nombre) {
        super(nombre);
    }

    hablar() {
        console.log("El gato está maullando.");
    }
}

class Perro extends Animal {
    constructor(nombre) {
        super(nombre);
    }

    hablar() {
        console.log("El perro está ladrando.");
    }
}