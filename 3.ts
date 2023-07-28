const entrada3 = require("readline-sync");

let anos: number = parseInt(entrada3.question("Digite o anos: "));

if(anos % 4 == 0){
    anos = anos % 4;
    if(anos % 100 == 0){
        anos = anos % 100;
        if(anos % 400 == 0)
        console.log("anos bissexto")
        else{
            console.log("anos bissexto");
        }
    }
    else{
        console.log("anos nao bissexto");
        
    }
}
else{
    console.log("anos nao bissexto");
    
}