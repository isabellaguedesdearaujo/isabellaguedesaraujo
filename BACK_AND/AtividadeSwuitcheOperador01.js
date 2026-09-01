const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
console.log("Escolha seu turno: ")
console.log("1- Manhã. ")
console.log("2- Tarde. ")
console.log("3- Noite. ")
rl.question("Dígite o número da sua escolha:  " ,(opcao)=>{
 
    opcao = Number (opcao)

    switch (opcao) {
case 1:
console.log("Você estuda no período da manhã. ");
break;
case 2:
console.log("Você estuda no período da tarde. ");
break;
case 3:
console.log("Você estuda no período da noite. ");
break;
default:
console.log("Opção inválida! Escolha um número de 1 a 3");
}


});
