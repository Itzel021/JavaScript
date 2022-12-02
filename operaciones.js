//Menu 

const etiquetas=["Inicio","Contacto", "Acerca De", "Contenido", "Ingresar"];
const paginas=["introduccion.html","contacto.html","acerca.html","contenido.html",
                "ingresar.html"];

etiquetas.push("Cerrar");
paginas.push("cerrar.html"); 

let flen=etiquetas.length;
let text="<ul>";
for (let i=0;i<flen;i++)
{
   text+="<li><a href='"+paginas[i]+"'>"+etiquetas [i]+"</li>"; 
}
text+="</ul>"; 
document.getElementById("demo").innerHTML=text;

//Funcion para enviar los datos
function miFuncion(){
    let nombre=null;
    let paterno=null;
    let materno=null;
    let correo=null;
    let mensaje=null;
let x=document.getElementById('info');
x.style.display="block";
nombre=document.getElementById("nombre").value;
paterno=document.getElementById ("paterno").value;
materno=document.getElementById ("materno").value;
 correo=document.getElementById("correo").value;
mensaje=nombre + "<br>" +paterno + " <br> "+  materno + "<br>" +correo;
document.getElementById('info').innerHTML=
"Los datos personales son: <br>"+mensaje;
}
//Funcion para limpiar

function limpiar(){    
   document.getElementById('info').innerHTML="";
   document.getElementById('info').innerHTML= "Los datos personales son: <br>";
   let x=document.getElementById('info');
  if (x.style.display==="none")
     x.style.display="block";
  else
     x.style.display="none";
}