const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Dígite sua senha:",(senha)=>{

    senha = Number (senha)
    
    if(senha === 1234){
        console.log("Acesso permitido!");
    }else{
        console.log("Acesso não permitida!");}
});
