const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Dígite seu nome",(nome)=>{
rl.question("Dígite valor do saldo",(saldo)=>{
rl.question("Dígite valor do saque",(saque)=>{

    saldo = Number (saldo)
    saque = Number (saque)
    


    if(saldo > saque ){
        console.log("Saldo insuficiente");
    }else if (saldo  saque){
        valor = saldo - saque
        console.log("Saque realizado agora seu saldo disponivel é de: " + valor );
    };
        
});
});
});
