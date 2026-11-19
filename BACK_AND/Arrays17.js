const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let rotina = ['Acordar', 'Estudar', 'Almoçar', 'Trabalhar', 'Academia'];

console.log("Lista de atividades:" , rotina);

rl.question("Digite qual é a atividade que deseja substituir: ", (s1)=>{
    rotina.push = (s1);

rl.question("Digite o nome da atividade que deseja colocar: ",(A1)=>{
    rotina[s1]= A1

console.log("Rotina Atualizada: ", rotina);
})
})
