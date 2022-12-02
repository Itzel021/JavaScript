const etiquetas=["Inicio","Contacto","Acerca De","Contenido","Ingresar"];
const paginas=["introduccion.html","contacto.html","acerca.html","contenido.html","ingresar.html"];

etiquetas.push("Cerrar");//Insertar
paginas.push("cerrar.html");

let flen = etiquetas.length;
let text="<ul>";
for (let i=0;i<flen;i++)
{
    text+="<li><a href='"+paginas[i]+"'>"+etiquetas[i]+"</li>";

}
text+="</ul>";
document.getElementById("demo").innerHTML=text;

function myOnLoad(){
    var arreglo=["Pedro","Luisa","Ana","Luis","Daniel"];
    arreglo.sort();//Ordena los elementos del arreglo
    var select = document.getElementsByName("contacto")[0];
    for(let valor in arreglo)
    {
      var option=document.createElement("option");
      option.text=arreglo[valor];
      select.add(option);

    }

}


function sumar(){
    var n1=document.getElementById("txt1").value;
    var n2=document.getElementById("txt2").value;
    var n3=Number(n1)+Number(n2);

    alert("La suma es: "+ n3);
}

function resta(){
    var n1=document.getElementById("txt1").value;
    var n2=document.getElementById("txt2").value;
    var n3=Number(n1) - Number(n2);

    alert("La resta es: "+ n3);
}

const suma = function(a,b) {return a+b;};
const restar = function(a,b){ return a-b;};
const multiplica=function(a,b){return a*b;};

console.log(suma(6,7));
console.log(restar(6,7));
console.log(multiplica(6,7));