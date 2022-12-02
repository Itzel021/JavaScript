let texto="";
let i=1;
while(i<=10){
    texto+="<br>El número es: " +i;
    i++;
}
document.getElementById("demo").innerHTML=texto;