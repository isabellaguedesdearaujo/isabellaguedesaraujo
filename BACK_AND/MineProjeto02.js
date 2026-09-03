const readline = require("readline");
const { isNumberObject } = require("util/types");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Digite o seu nome: ",(nome)=> {
rl.question("Digite o nome do produto: ", (produto)=> {
rl.question("Digite o preço do produto: ", (preço)=> {
rl.question("Digite a quantidade: ", (quantidade)=> {

    preço = Number (preço)
    quantidade = Number (quantidade)

    
   const valorTotal = preço * quantidade

  let classificação = ""
 if (valorTotal <= 50 ) {
    classificação = "Compra pequena!"
 }
 else if (valorTotal > 50 && valorTotal < 200) {
    classificação = "Compra média!"
 }
 else {
    classificação = "Compra grande!"}


console.log ("===== FORMA DE PAGAMENTO =====")
console.log ("1 - Pix")
console.log ("2 - Cartão")
console.log ("3 - Dinheiro ")
rl.question ("Digite o número da opção desejada: ", (opcaoPagamento) => {

let formaPagamento = "";

switch (opcaoPagamento) {
    case "1":
        formaPagamento = "Pix";
        break;
    case "2":
        formaPagamento = "Cartão";
        break;
    case "3":
        formaPagamento = "Dinheiro";
        break;
    default:
        formaPagamento = "Não informada/Inválida";
} 


 let = descontoEspecial ="";
 if(valorTotal >= 100 && quantidade >= 2){
    descontoEspecial = (" Você tem desconto especial");
 }else{
    descontoEspecial = ("Não tem desconto ");
 }

 const  frete = valorTotal >= 150 ? ("Você tem fretes grátis!") : ("Você não tem fretes grátis!"); 



     console.log("================================")
     console.log("RESUMO DA COMPRA")
     console.log("================================")

     console.log("Nome: " + nome);
     console.log("Nome do Produto: " + produto);
     console.log("Preço: " + preço);
     console.log("Quantidade: " + quantidade);
     console.log("Valor Total:  " + valorTotal);
     console.log("Classificação: " + classificação );
     console.log("Forma de pagamento " + formaPagamento);
     console.log("Desconto especial: " + descontoEspecial); 
     console.log("Frete: " + frete); 

     console.log("================================")
     console.log("Obrigado pela compra!")
     console.log("================================")


 

});
});
});
});
});
