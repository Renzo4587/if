const entrada6 = require("readline-sync");

let nota = parseFloat(entrada6.question("Nota: "))
let falta = parseFloat(entrada6.question("Falta: "))

if(nota >= 9 && nota<=10 && falta <= 20){
    console.log("A")}

else if(nota >= 9 && nota <=10 && falta > 20){
    console.log("B")}

if(nota >= 7.5 && nota <=8.9 && falta <= 20){
    console.log("B")}

else if(nota >= 7.5 && nota <= 8.9 && falta > 20){
    console.log("C")}

if(nota >= 5 && nota <= 7.4 && falta <= 20){
    console.log("C")}

else if(nota >= 5 && nota <= 7.4 && falta>20){
    console.log("D")}

if(nota >= 4 && nota <= 4.9 && falta <= 20){
    console.log("D")}

else if(nota >= 4 && nota<=4.9 && falta>20){
    console.log("E")}

if(nota >= 0 && nota <= 3.9 && falta <= 20){
    console.log("E")}

else if(nota >= 0 && nota <= 3.9 && falta > 20){
    console.log("E")}