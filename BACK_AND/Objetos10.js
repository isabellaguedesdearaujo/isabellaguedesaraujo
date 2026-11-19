
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function cadastrarProduto(nome, preco, quantidade, categoria) {
  const produto = {
    nome: nome,
    preco: preco,
    quantidade: quantidade,
    categoria: categoria
  };
  return produto;
}


rl.question('Digite o nome do produto: ', (nome) => {
rl.question('Digite o preço do produto: ', (precoInput) => {
rl.question('Digite a quantidade em estoque: ', (quantidadeInput) => {
rl.question('Digite a categoria do produto: ', (categoria) => {

const preco = Number(precoInput);
const quantidade = Number(quantidadeInput);
const produtoCadastrado = cadastrarProduto(nome, preco, quantidade, categoria);

     
console.log('\n--- Produto Cadastrado ---');
console.log(produtoCadastrado);

     
});
});
});
});
