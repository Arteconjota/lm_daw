class Persona {
    constructor(nombre, pais, edad) {
        this.nombre = nombre;
        this.pais = pais;
        this.edad = edad
    }

    mostrarDetalles() {
        console.log("Nombre: ", this.nombre, "\nPaís: ", this.pais, "\nEdad: ", this.edad, " años");
    }
}

class Conductor extends Persona {
    constructor(nombre, pais, edad, licencia) {
        super(nombre, pais, edad);
        this.licencia = licencia;

        this.vehiculos = []; // Se crea un array de Vehículo para la relación 1 a n.
    }

    mostrarDetalles() {
        console.log("Nombre: ", this.nombre, "\nPaís: ", this.pais, "\nEdad: ", this.edad, " años\nNº Licencia: ", this.licencia);
    }

    agregarVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo);
    }
}

class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    mostrarDetalles() {
        console.log("Marca: ", this.marca, "\nModelo: ", this.modelo, "\nAño: ", this.año);
    }
}