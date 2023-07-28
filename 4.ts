const entrada4 = require("readline-sync");

let velocidade: number = parseFloat(entrada4.question("Digite a velocidade (km/h):"));
 if(velocidade > 80){
    console.log("Voce foi multado");
    let multa = (velocidade - 80) * 7
    console.log("Sua multa é de " + multa + " R$");
 }
 else{
    console.log("Nao foi multado");
    
 }