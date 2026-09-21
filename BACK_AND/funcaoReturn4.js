const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

function verificarCompra(valor, dinheiro){
    return dinheiro >= valor ? 'Compra realizada!' : 'Saldo insuficiente';
}
rl.question("Dígite o valor do produto: " ,(valor)=>{
rl.question("Dígite o saldo disponivel: ", (dinheiro)=>{

    valor = Number (valor);
    dinheiro = Number (dinheiro);

    let compra = verificarCompra(valor, dinheiro);

    console.log(compra)
});
});
