const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Digite o primeiro número: ",(primeiro)=> {
  rl.question("Digite o segundo número: ",(segundo)=> {
    

        primeiro = Number(primeiro);
        segundo = Number(segundo);

     somas = primeiro + segundo;
     subtracao = primeiro - segundo;
     mutiplicacao = primeiro * segundo;
     divisao =  primeiro / segundo;

     console.log("Compraração: ", primeiro > segundo);
     console.log( primeiro === segundo);
     console.log( primeiro > 10 && segundo>10 );
     console.log( "Verificação: " , primeiro >= 100 || segundo >= 100 );


          
            
            
});
});
