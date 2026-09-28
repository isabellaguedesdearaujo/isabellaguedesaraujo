
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
function verficarMaioridade(idade){
    return idade>= 18 ? "Maior de idade" : "Menor de idade"
}

rl.question("Dígite sua idade:" , (idade)=>{
    console.log(verficarMaioridade(idade));
})
