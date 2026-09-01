const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Dígite a nota do aluno:  " ,(nota)=>{
 
    nota = Number (nota)

    let situacao = ( nota >= 6 ) ?
     console.log("Aprovado!") : console.log("Reprovado!");


});
