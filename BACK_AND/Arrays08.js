const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let nome = ["João" , "Maria", "Isaque", "isis"];
console.log("Lista atual:", nome);

rl.question("Dígite a posição que deseja alterar:" ,(posição)=>{
nome[posição] = ""
rl.question("Digite um novo nome: ", (nomenv)=>{
nome[posição]= nomenv
console.log("Lista atualizada: ", nome);

});
});

