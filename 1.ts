const entrada1 = require("readline-sync");

let numero: number = parseFloat(entrada1.question("Digite um numero: "))
if(numero > 0){
    console.log("Positivo")
}
else if(numero == 0){
    console.log("Igual a zero");
    
}
else{
    console.log("Negativo");
    
}