let text="";
for(let i=0; i<10;i++){
    if(i==3){continue;}
    text+="El numero es "+ i +"<br>";
}document.getElementById("demo").innerHTML=text;
