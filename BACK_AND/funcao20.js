
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
function calcularValorPorPessoa(valortotal, pessoas){
   const valorComTaxa = valortotal * 1.10;
    const valorPorPessoa = valorComTaxa / pessoas;
    return valorPorPessoa;
}
rl.question("Digite o valor total da conta:" , (valortotal)=>{
rl.question("Digite a quantidade de pessoas: " ,(pessoas)=>{
    valortotal = Number (valortotal);
    pessoas = Number (pessoas);
    console.log(calcularValorPorPessoa(valortotal, pessoas));
});
});
