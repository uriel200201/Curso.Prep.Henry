//Aprendiendo sobre objetos

/*var objeto = {
    propiedad1: valor1,
    ...,
    propiedadN: valorN
}*/

var boris = {
    nombre: 'Boris',
    apellido: 'Tralice',
    edad: 33,

    saludar: () => {
        console.log(`Hola, ${this.nombre}`);
    }
}
console.log(boris.nombre);
console.log(boris.apellido);
console.log(boris.edad);
boris.saludar()

for (let key in boris) {
    console.log(boris[key])
}