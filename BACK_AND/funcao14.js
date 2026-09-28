
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
function converterParaMinutos(horas){
    return horas*60
}
rl.question("Dígite a quantidade de horas:", (horas) =>{
console.log(converterParaMinutos(horas));
})
