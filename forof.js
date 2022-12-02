/*const cars=["BWM", "AUDI", "VOLVO", "VW"];
let texto="";
for(let x of cars){
    texto+=x + "<br>";
}document.getElementById("demo").innerHTML=texto;*/


/*let iterable="boo";
for(let value of iterable){
    console.log(value);
}*/


/*let iterable = new Uint8Array([0x00, 0xff]);

for (let value of iterable) {
  console.log(value);
}*/
// 0
// 255


/*let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of iterable) {
  console.log(value);
}*/
// 1
// 2
// 3


let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3