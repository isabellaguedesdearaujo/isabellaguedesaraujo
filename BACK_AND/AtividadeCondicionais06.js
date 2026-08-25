const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Dígite seu nome: ",(nome)=>{
rl.question("Dígite valor do saldo: ",(saldo)=>{
rl.question("Dígite valor do saque: ",(saque)=>{

    saldo = Number (saldo)
    saque = Number (saque)
    


    if(saque > saldo ){
        console.log("Saldo insuficiente");
    }else if (saldo > saque){
        const valor = saldo - saque
        console.log("Saque realizado agora seu saldo disponivel é de: " + valor );
    };
        
});
});
});
