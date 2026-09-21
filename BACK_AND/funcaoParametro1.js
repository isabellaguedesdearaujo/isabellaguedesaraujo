const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

function saudarAluno(nome) {
    console.log("Olá,"  ,nome,"! Seja bem-vindo(a)."); 
}
rl.question("Dígite seu nome: " ,(nome)=>{
    
    saudarAluno(nome);

});
