//numeros
let numero1=1000;
console.log(typeof(numero1));
//objetos
var object={
    nombre:"Carlos",
    apellido:"Rivera",
    correo:"carlos.rivera@gmail.com"
};
console.log(object);
//funciones
function Funcion(){}
    console.log(typeof Funcion);
//arreglos
let autos=["BMW","AUDI","VOLVO"];
console.log(typeof autos);
//clases
class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(typeof Persona);
//Variables locales con let, no se puede redeclarar
let nombre="Pedrito";
//let nombre="Juan";
//Variables globales con var, se puede redeclarar
 var paterno="Rivera";
 var paterno='Rosas';
