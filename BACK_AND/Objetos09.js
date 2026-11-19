
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function cadastrarPersonagem(nome, idade, poder) {
  const personagem = {
    nome: nome,
    idade: idade,
    poder: poder
  };
  return personagem;
}

rl.question('Digite o nome do personagem: ', (nome) => {
rl.question('Digite a idade do personagem: ', (idadeI) => {
rl.question('Digite o poder do personagem: ', (poder) => {
const idade = Number(idadeI);
const novoPersonagem = cadastrarPersonagem(nome, idade, poder);

console.log('Personagem cadastrado com sucesso:');
console.log(novoPersonagem);

});
});
});
