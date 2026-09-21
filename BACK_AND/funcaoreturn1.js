const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

function soma (numero1 , numero2) {
    return numero1 + numero2;
}

rl.question("Dígite um número: " ,(numero1)=>{
rl.question("Dígite o segundo número: ",(numero2)=>{

    numero1 = Number (numero1);
    numero2 = Number (numero2);

    let resultado = soma(numero1, numero2);

console.log("O resultado da soma é: ", resultado);
    
});
});
