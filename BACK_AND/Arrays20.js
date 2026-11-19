
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tarefas = [];

function adicionarTarefa(descricao) {
    tarefas.push(descricao);
}


function removerTarefa() {
    return tarefas.pop();
}

function cadastrarTarefas() {

rl.question('Digite a primeira tarefa: ', (tarefa1) => {
adicionarTarefa(tarefa1);

rl.question('Digite a segunda tarefa: ', (tarefa2) => {
adicionarTarefa(tarefa2);

 rl.question('Digite a terceira tarefa: ', (tarefa3) => {
adicionarTarefa(tarefa3);

               
console.log('\nLista de tarefas:');
console.log(tarefas);

          
rl.question('\nDigite a posição da tarefa (0, 1 ou 2): ', (posicao) => {
 posicao = Number(posicao);

if (posicao >= 0 && posicao < tarefas.length) {
console.log('Tarefa encontrada: ' + tarefas[posicao]);
} else {
console.log('Posição inválida!');
         }

let tarefaRemovida = removerTarefa();

console.log('Tarefa removida: ' + tarefaRemovida);
console.log('Lista atualizada:');
console.log(tarefas);                  
console.log('Quantidade de tarefas restantes: ' + tarefas.length);
               
});
});
});
});
