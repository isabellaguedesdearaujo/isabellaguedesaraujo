const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
console.log("Escolha o tamanho da pizza: ")
console.log("1- Pequena. ")
console.log("2- Média. ")
console.log("3- Grande. ")
rl.question("Dígite o número da sua escolha:  " ,(opcao)=>{
 
    opcao = Number (opcao)

    switch (opcao) {
case 1:
console.log("Você escolheu uma pizza pequena. ");
break;
case 2:
console.log("Você escolheu uma pizza média. ");
break;
case 3:
console.log("Você escolheu uma pizza grande. ");
break;
default:
console.log("Opção inválida! Escolha um número de 1 a 3");
}


});
