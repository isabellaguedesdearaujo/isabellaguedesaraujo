
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
function calculartroco(valor, valorpago){
    return valorpago-valor 
}
rl.question("Dígite o valor da compra:" , (valor)=>{
rl.question("Dígite o valor pago:" , (valorpago)=>{
    console.log(calculartroco(valor, valorpago));
});
});
