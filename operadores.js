let a=3, b=2;
let z=a+b;
console.log("Resultado suma = "+ z);
z= a-b;
console.log("Resultado resta = "+ z);
z= a*b;
console.log("Resulrado multiplicación = "+ z);
z=a/b;
console.log("Resultado dividir = "+ z);
z=a%b;
console.log("Resultado módulo = "+ z);
z=a**b;
console.log("Resultado exponente = "+ z);

//Pre- incremento
//Primero incrementa luego asigna
z=++a;
console.log(z);

//Post-incremento
//Primero asigna despues incrementa
z=b++;
console.log(z);

//Convertir el tipo de dato
 let num=15;
 let texto=num.toString();
 console.log(texto);
 console.log(typeof(texto));

 let numero2="234";
 let numero3=Number(numero2);
 console.log(numero3);
 console.log(parseInt(numero2,10))
