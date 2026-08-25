const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Qual é o seu nome: ",(nome)=> {
  rl.question("Qual é o seu curso: ",(curso)=> {
      rl.question("Qual é a sua matéria ",(materia)=> {
            rl.question("Qual é o sue turno",(turno)=> {
            console.log("Bem-vindo a turma");
                 console.log("Nome: " +  nome )
                     console.log("Curso: " + curso); 
                         console.log("Matéria: " + materia);
                             console.log("Turno " + turno);
                                  console.log("Bem-vindo a turma");
 
            
            
});
});
});
});
