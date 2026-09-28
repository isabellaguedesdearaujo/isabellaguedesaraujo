
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
function identificarDia(numero){
    switch (numero) {
        case 1:
        return "Domingo";

        case 2:
        return "Segunda-feira";
   

        case 3:
        return "Terça-feira";

        case 4:
        return "Quarta-feira";

        case 5:
        return "Quinta-feira";

        case 6:
        return "Sexta-feira";

        case 7:
        return "Sábado";
     default:
            return "Opção inválida! Escolha 1 a 7.";
    
    }
}
rl.question("Digite o número do dia (1 a 7): ",(numero)=>{
   numero = Number (numero);
    console.log(identificarDia(numero));

});
