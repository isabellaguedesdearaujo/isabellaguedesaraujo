const readline = require ("readline");

const rl = readline.createInterface({

input : process.stdin,
output : process.stdout,

});

rl.question("Dígite o valor da compra:", (valor)=>{
    valor = Number (valor);
    if(valor>=100){
       console.log("Você ganhou frete grátis!");
    }else if (valor<100){
        console.log("O Frete será cobrado na compra.");};

});
