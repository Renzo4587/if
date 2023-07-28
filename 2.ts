const entrada2 = require("readline-sync");

let n1: number = parseFloat(entrada2.question("Digite um numero: "));
let n2: number = parseFloat(entrada2.question("Digite outro numero: "));

if(n1 > n2){
    console.log(n2 + " Menor");
    console.log(n1 + " Maior");
}
else{
    console.log(n1 + " Menor");
    console.log(n2 + " Maior");
}