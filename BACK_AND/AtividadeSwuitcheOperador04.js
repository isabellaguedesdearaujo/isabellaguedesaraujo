const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Dígite o valor do produto:  " ,(produto)=>{
rl.question("Dígite o dinheiro disponível  " ,(dinheiro)=>{
 
    produto = Number (produto)
    dinheiro = Number (dinheiro)

    let situacao = ( dinheiro >= produto  ) ?
     console.log("Compra realizada!") : console.log("Dinheiro inusficiente");

});
});
