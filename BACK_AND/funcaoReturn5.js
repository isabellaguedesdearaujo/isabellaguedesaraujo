const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

function identificarTurno (opcao){
    switch (opcao) {
        case 1:
            return "Período selecionado: Manhã";
        case 2:
            return "Período selecionado: Tarde";
        case 3:
            return "Período selecionado: Noite";
        default:
            return "Opção inválida! Escolha 1, 2 ou 3.";
    }
}

console.log("Escolha um período: ");
console.log("1- Manhã ");
console.log("2- Tarde ");
console.log("3- Noite ");
rl.question("Dígite sua escolha: " , (opcao)=>{
   
    opcao = Number (opcao);
 
    let resultado = identificarTurno(opcao);

    console.log (resultado);
});
