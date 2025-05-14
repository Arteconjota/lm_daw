//Clase 'Persona':
class Persona {
    constructor(nombre, DNI, edad, colorCabello) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.edad = edad;
        this.colorCabello = colorCabello;
    }

    camina(distancia) {
        console.log(`${this.nombre} camina ${distancia} metros.`);
    }

    come(comida) {
        console.log(`${this.nombre} come ${comida}.`);
    }

    habla(idioma) {
        console.log(`${this.nombre} habla ${idioma}.`);
    }
}

//Clase 'Estudiante':
class Estudiante extends Persona {
    constructor(nombre, DNI, edad, colorCabello) {
        super(nombre, DNI, edad, colorCabello);
    }

    estudia(materia) {
        console.log(`${this.nombre} estudia ${materia}`);
    }
}

//Clase 'Profesor':
class Profesor extends Persona {
    constructor(nombre, DNI, edad, colorCabello) {
        super(nombre, DNI, edad, colorCabello);
    }

    ensenya(materia) {
        console.log(`${this.nombre} imparte ${materia}`);
    }
}

//Nueva instancia de 'Estudiante':
const instanciaEjemplo = new Estudiante('Javier', '50987452V', 28, 'castaño');
instanciaEjemplo.estudia('Entornos de Desarrollo.');