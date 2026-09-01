const readline = require("readline");
const { isNumberObject } = require("util/types");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Digite o seu nome: ",(nome)=> {
rl.question("Digite a sua idade: ", (idade)=> {
rl.question("Digite a pontuação da primeira fase: ", (primeira)=> {
rl.question("Digite a pontuação da segunda fase: ", (segunda)=> {

    idade = Number (idade)
    primeira = Number (primeira)
    segunda = Number (segunda)

   const pontuacaoTotal = primeira + segunda

   console.log("===== ESCOLHA SEU PERSONAGEM =====")
   console.log("1 - Guerreiro")
   console.log("2 - Mago")
   console.log("3 - Arqueiro")
   rl.question("Dígite o número do personagem: " , (opcao) =>{


    let personagem = "";
switch (opcao) {
    case "1":
        personagem = "Guerreiro";
        break;
    case "2":
        personagem = "Mago";
        break;
    case "3":
        personagem = "Arqueiro";
        break;
    default:
        personagem = "Opção Inválida";
}
 
 let desempenho = ""
 if (pontuacaoTotal >= 200) {
    desempenho = "Excelente!"
 }
 else if (pontuacaoTotal >= 100 && pontuacaoTotal < 199) {
    desempenho = "Bom!"
 }
 else if (pontuacaoTotal >= 50 && pontuacaoTotal < 99) {
    desempenho = "Regular!"
 }
 else {
    desempenho = "Precisa melhorar!"}

   
let apto = (idade >= 18 && pontuacaoTotal >= 100);
let statusAprovacao = apto ? "Aprovado para a próxima fase" : "Não aprovado para a próxima fase";

     console.log("================================")
     console.log("RESULTADO DO JOGADOR")
     console.log("================================")

     console.log("Nome: " + nome);
     console.log("Idade: " + idade);
     console.log("Personagem " + personagem);
     console.log("fase 1: " + primeira);
     console.log("Fase 2:  " + segunda);
     console.log("Total: " + pontuacaoTotal);
     console.log("Desenpenho " + desempenho);
     console.log("Apto para próxima fase: " + statusAprovacao);


 


});
});
});
});
});
