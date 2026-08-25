const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Digite o seu nome: ",(nome)=> {
  rl.question("Digite a sua idade: ", (idade)=> {
   rl.question("Digite o nome da cidade você mora: ", (cidade)=>{
     
    console.log("Olá " + nome); 
        console.log("Você tem " + idade ,"è vc mora " + cidade); 
          
         
    });
  });
});
