const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
let nome =[];
rl.question("Dígite o nome do primeiro aluno: ", (nomes1)=>{
nome.push(nomes1);
rl.question("Dígite o nome do primeiro aluno: ", (nomes2)=>{
nome.push(nomes2);
rl.question("Dígite o nome do primeiro aluno: ", (nomes3)=>{
nome.push(nomes3);
console.log("Alunos cafastrados: ",nome);
});
});
});
