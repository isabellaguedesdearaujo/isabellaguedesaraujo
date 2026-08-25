const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Digite o seu nome: ",(nome)=> {
  rl.question("Digite a quantidade guardada: ",(guardada)=> {
      rl.question("Digite a quantidade que pretende guarda este mês: ",(guarda)=> {

        guardada = Number(guardada)
        guarda = Number(guarda)

        const somas = (guardada + guarda)

          console.log("-----------------------RESULTADO---------------------------");
             console.log("nome: " + nome); 
                console.log("Já guardada:", + guardada)
                    console.log("Pretende guarda:", + guarda)
                        console.log("Valor obitido no final do mês: " + somas);
 
            
            
});
});
});
