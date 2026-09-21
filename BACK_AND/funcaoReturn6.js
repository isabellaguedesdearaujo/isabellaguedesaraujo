const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

function escolherProduto (opcao){
    switch (opcao) {
        case 1:
            return " lanche selecionado: Hambúrguer — R$ 20";
        case 2:
            return "lanche selecionado: Cachorro-quente — R$ 15";
        case 3:
            return "lanche selecionado: Sanduíche — R$ 18";
        default:
            return "Opção inválida! Escolha 1, 2 ou 3.";
    }
}
console.log("A lanchonete possui o seguite cardápio: ");
console.log("1 - Hambúrguer — R$ 20 ");
console.log("2 - Cachorro-quente — R$ 15 ");
console.log("3 - Sanduíche — R$ 18 ");
rl.question("Dígite sua escolha: " , (opcao)=>{
   
    opcao = Number (opcao);
 
    let resultado = escolherProduto (opcao);

    console.log (resultado);
});
