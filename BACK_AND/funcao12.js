const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

function apresentarFuncionario(nome, cargo){
    console.log(nome, "trabalha no cargo de" ,cargo);
}

rl.question("Digite seu nome: ",(nome)=>{
rl.question("Digite o seu cargo: " ,(cargo)=>{

    apresentarFuncionario(nome, cargo);
});
});
