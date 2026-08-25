const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Qual é o lanche: ",(lanche)=> {
  rl.question("Qual é o tamanho do lanche: ",(tamanho)=> {
      rl.question("Qual é a bebida ",(bebida)=> {
            console.log("Seu pedido")
                console.log("lanche: " + lanche); 
                    console.log("Tamanho do lanche: " + tamanho);
                         console.log("bebida: " + bebida);
                             console.log("Pedido registrado");
 
            
            
});
});
});
