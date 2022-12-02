var persona={
    nombre: "Itzel",
    paterno: "Martinez",
    edad: 25,
    direccion:{
        pais: "Mexico",
        ciudad: "Puebla",
        edificio:{
            nombre: "Edificio Alfa",
            telefono: "2247895647",
        }
    }
};
//Notacion punto
console.log(persona);
console.log(persona.direccion);
console.log(persona.direccion.edificio);
//Para agregar un nuevo valor al alcance de direccion 
persona.direccion.codpostal=72550;
console.log(persona.direccion.codpostal);
//Guardarlo en una variable local
let edificio=persona.direccion.edificio;
console.log(edificio.telefono);

//Notacion corchete
console.log(persona["nombre"]);
//Guardamos en una variable local
let campo1="edad";
console.log(persona[campo1]);