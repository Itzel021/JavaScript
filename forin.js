const persona={Nombre: "Juan", Paterno: "Doe", Edad: 25};
let texto = "";
/*for(let x in persona){
    texto+= persona[x] + " ";
} document.getElementById("demo").innerHTML=texto;*/

for(let x in persona){
    console.log(`${x}:${persona[x]}`);
}

var triangulo={a:1, b:2, c:3};
function ColorearTriangulo(){
  this.color='red';
  this.type='equilatero';
}

ColorearTriangulo.prototype=triangulo;

var obj=new ColorearTriangulo();

for(const prop in obj){
    if(obj.hasOwnProperty(prop)){
        console.log(`obj.${prop}}=${obj[prop]}`);
    }
}

var obj={a:1, b:2, c:3};
for(var i=0 in obj){
    console.log(obj[i]);
}

const numeros=[45,4,9,16,25];
let txt="";
for(let x in numeros){
    txt+=numeros[x]+"<br>";
    
}document.getElementById("demo").innerHTML=txt;