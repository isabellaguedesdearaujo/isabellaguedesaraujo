const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

function boasVindas(nome){
    console.log("Seja bem-vindo(a) á",nome);
}

rl.question("Dígite o nome da sua empresa:  " ,(nome)=>{
    boasVindas(nome);
});
