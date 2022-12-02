let ingresosMensuales=1490;
let aniosEmpleo=0;
let antecedentesPenales=false;
let realizaPagosTarjeta=true;

if(ingresosMensuales>=1500){
    if(aniosEmpleo<1){
        console.log("No ofrecer prestamo");
    }
    else{
        console.log("Ofrecer empleo");
        }
}
else {
    if(aniosEmpleo>=1)
    console.log("No ofrecer prestamo");
    else{
        if(realizaPagosTarjeta)
        console.log("Ofrecer prestamo");
        else
        console.log("No ofrecer prestamo");
    }
}

let balance = 180;
let duracionCredito = 30;
let statusPrevio="PAID";
let currentemployment =0;

 if(balance>200){
     if(currentemployment>1){
       console.log("Credito otorgado");
     }
     else{
         console.log("Credito denegado");
     }
 }
 else{
  if(duracionCredito<30){
      if(statusPrevio=="PAID")
      console.log("Credito otorgado");
      else
      console.log("Credito Denegado");
  }
  else
  console.log("Credito Denegado");
 }
//Horas del dia
let horadeldia=16;
if((horadeldia>=7)&&(horadeldia<=9))
   console.log("Es tiempo del desayuno");
else{
    if((horadeldia>=14)&&(horadeldia<=16))
    console.log("Es tiempo de la comida");
    else{
        if((horadeldia>=19)&&(horadeldia<=20))
        console.log("Es tiempo de la cena");
    }
}
//Mensaje respecto a las calificaciones
let promedio=6.7;
if((promedio>=0)&&(promedio<=10)){
  if((promedio>=9.0)&&(promedio<=10.0))
    console.log("Excelente");
  else{
    if((promedio>=8.0)&&(promedio<=8.9))
    console.log("Muy bien");
    else{
        if((promedio>=7.0)&&(promedio<=7.9))
        console.log("Suficiente");
        else{
            if((promedio>=6.0)&&(promedio<=6.9))
            console.log("Suficiente pero requiere asesoría");
            else
            console.log("No aprobado");
        }
    }
    }
}
else
console.log("Calificación no valida");


