const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Dígite a temperatura atual:",(temperatura)=>{

    temperatura = Number (temperatura)
    
    if(temperatura <15 && temperatura > 0 ){
        console.log("Muito frio!");
    }else if (temperatura >=15 && temperatura < 24){
        console.log("frio");
    }else if (temperatura >=25 && temperatura < 30){
        console.log("Agradável");
    }else 
        console.log("Muito quente");
});
