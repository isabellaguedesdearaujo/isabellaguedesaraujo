
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

function calcularArea(base, altura){
    return base*altura 
}
rl.question("Digite a base do retângulo:" ,(base)=>{
rl.question("Digite a altura do retângulo:",(altura)=>{

    console.log(calcularArea(base, altura));
});
});
