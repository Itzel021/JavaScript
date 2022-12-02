//const cars=["Saab", "Volvo", "BWN"];
//const cars = new Array ["Saab", "Volvo", "BWN"];
/*
Cambiar un valor
const cars=["Saab", "Volvo", "BWN"];
cars[0]="Audi";
 */
//document.getElementById("demo").innerHTML=cars;
//document.getElementById("demo").innerHTML=cars[0];

/*const persona=["Itzel", "Carrera", 20];
document.getElementById("txtNombre").value=persona[0];
document.getElementById("txtPaterno").value=persona[1];
document.getElementById("txtEdad").value=persona[2];*/

/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.length;*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;