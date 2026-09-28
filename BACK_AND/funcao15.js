
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
function verificarPar(numero){
   return numero % 2 === 0 ? "Par" : "Ímpar";
}
  
rl.question("Digite um número:" , (numero)=>{
    console.log(verificarPar(numero));
})
