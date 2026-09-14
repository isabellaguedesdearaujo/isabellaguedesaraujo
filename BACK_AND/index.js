const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Digite o nome do  produto: ",(nome)=> {
  rl.question("Digite o preço do produto: ",(preço)=> {
      rl.question("Digite a quantidade de produtos vendidos: ",(vendas)=> {

        preço = Number(preço)
        vendas = Number(vendas)

        const somas = (preço + vendas)
            console.log("Compraração: ", somas >= 100 );
                  console.log( "Verificação: " , vendas >= 2 || preço<20 );


          
            
            
});
});
});
