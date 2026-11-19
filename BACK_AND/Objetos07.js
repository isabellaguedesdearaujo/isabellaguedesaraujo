const produto = {
    nome: "Arroz",
    preço: "R$25,00",
    marca: "Cristal",
}
function exibirProduto (produto){
    console.log("Nome: " + produto.nome);
     console.log("Nome: " + produto.preço);
      console.log("Nome: " + produto.marca);
}

exibirProduto(produto);

const produto2 = {
  nome: "Mouse Sem Fio",
  preco: 85,
  marca: "LogiPro"
};
console.log("Novo produto :");
exibirProduto(produto2);
