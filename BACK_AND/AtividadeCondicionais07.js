const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Escolha uma bebida:");
console.log("1 - Refrigerante");
console.log("2 - Suco\n");

rl.question("Digite sua opção: ", (opcao) => {
  if (opcao === '1') {
    console.log("Você escolheu Refrigerante.");
  } else {
    console.log("Você escolheu Suco.");
  }
  rl.close();
});
