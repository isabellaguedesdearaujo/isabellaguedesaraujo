const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Digite o nome do jogador: ",(nome)=> {
  rl.question("Digite a quantidade de pontos da primeira partida: ",(primeira)=> {
      rl.question("Digite a quantidade de pontos da segunda partida: ",(segunda)=> {

        primeira = Number(primeira)
        segunda = Number(segunda)

        const somas = (primeira + segunda)
            console.log("Pontuação Total: ", somas >= 100 );
                  console.log( "Verificação: " ,primeira && segunda  );


          
            
            
});
});
});
