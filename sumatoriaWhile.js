//Suma los primeros diez números
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
let i=1;
let sumatoria=0;

while(i<=10){
    sumatoria+=i;
    i++;
}
document.getElementById("caja").value=sumatoria;