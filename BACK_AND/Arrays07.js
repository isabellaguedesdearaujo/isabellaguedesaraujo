const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
let compras = [];
rl.question("Produto 1: ", (p1) => {
compras.push(p1);

rl.question("Produto 2: ", (p2) => {
compras.push(p2);    

rl.question("Produto 3: ", (p3) => {
compras.push(p3);

rl.question("Produto 4: ", (p4) => {
compras.push(p4);

console.log("lista Incial:");
console.log(compras);

rl.question("Digite outro produto: ", (novoProduto) => {
compras.push(novoProduto);

console.log("Lista atualizada:");
console.log(compras);

});
});
});
});
});
