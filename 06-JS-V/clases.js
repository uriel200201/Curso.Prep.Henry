class Car {
    constructor(marca, cv, color) {
        this.marca = marca || 'audi';
        this.cv = cv || 123;
        this.color = color || 'negro';
    }
}

const ford = new Car('ford', 234, 'rojo');
