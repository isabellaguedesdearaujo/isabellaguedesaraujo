const player1 = {
    Nome: Mario,
    Velocidade:4,
    Manobrabilidade:3,
    Poder:3,
    Pontos:0,
};

const player2 = {
    Nome:Luigi,
    Velocidade:3,
    Manobrabilidade:4,
    Poder:4,
    Pontos:0,
};

async function rollDice (){
    return Math.floor(Math.random()* 6) + 1;
}

async function getRandomBlock (){
    let random = Math.random()
    let result 
    
    switch (true) {
        case random < 0,33:
            result = "Reta"
            break;
        case random < 0,66:
            result = "Curva"
            break;
        
        default:
            result = "Confronto"
    }
    
    return result
}

async function logRollResult(characterName, block, diceResult, attribute){
     console.log(`${characterName} rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}
    
}

async function playRaceEngine(character1,character2){
    for(let round = 1;<= 5; round++){
        console.log(`Rodada ${round}`);
        
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
        
         let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();
    
    
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;
    
    if(block === "Reta"){
        totalTestSkill1 = diceResult1 + character1.Velocidade;
        totalTestSkill2 = diceResult2 + character2.Velocidade;
      
      await logRollResult(character1.Nome,
      "Velocidade",
      diceResult1,
      character1.Velocidade);
      
       
      await logRollResult(character2.Nome,
      "Velocidade",
      diceResult2,
      character2.Velocidade);
    }
    if(block ==="Curva"){
        totalTestSkill1 = diceResult1 + character1.Manobrabilidade;
        totalTestSkill2 = diceResult2 + character2.Manobrabilidade;
     
      await logRollResult(character1.Nome,
      "Manobrabilidade",
      diceResult1,
      character1.Manobrabilidade);
      
       
      await logRollResult(character2.Nome,
      "Manobrabilidade",
      diceResult2,
      character2.Manobrabilidade);
    }
    if (block === "Confronto"){
        let powerResult1 = diceResult1 + character1.Poder;
        let powerResult2 = diceResult2 + character2.Poder;
        console.log(`${character1.Nome} confrontou com ${character2.Nome}!`);
        
       await logRollResult(character1.Nome,
      "Poder",
      diceResult1,
      character1.Poder);
      
       
      await logRollResult(character2.Nome,
      "Poder",
      diceResult2,
      character2.Poder);
      
      
      if(powerResult1 > powerResult2 && character2.Pontos > 0){
          console.log(`${character1.Nome} venceu o confronto! ${character2.Nome} perdeu 1 ponto`);
          
          character2.Pontos--;
          
      }
      
      if(powerResult2 > powerResult1 && character1.Pontos >0){
           console.log(`${character2.Nome} venceu o confronto! ${character1.Nome} perdeu 1 ponto`);
         
          character1.Pontos--;
      }
      

      console.log(powerResult2 === powerResult1 
      ? "Confronto empatado! Nenhum ponto foi perdido" :"");
       
    }
    
    if(totalTestSkill1 > totalTestSkill2){
        console.log(`${character1.Nome} marcou um ponto!`);
        character1.Pontos++;
    }else if(totalTestSkill2 > totalTestSkill1){
        console.log (`${character2.Nome} marcou um ponto!`);
        character2.Pontos++;
    }
    
   }
}

async function declareWinner(character1,character2){
    console.log("Resultando Final:")
    console.log(`${character1.Nome}: ${character1.Pontos} ponto(s)`);
    console.log(`${character2.Nome}: ${character2.Pontos} ponto(s)`);
    
    if (character1.Pontos > character2.Pontos){
        console.log(`\n ${character1.Nome} venceu a corrida! Parabéns!`);
        }else if(character2.Pontos > character1.Pontos){
            console.log(`\n ${character2.Nome} venceu a corrida! Parabéns!`);
        }else{
            console.log("A corrida terminou em empate");
        }
}


(async function main(){
    console.log(`\nCorrida entre ${player1.Nome} e ${player2.Nome} começando...` );
     await playRaceEngine(player1, player2);
     await declareWinner(player1, player2);
})();

