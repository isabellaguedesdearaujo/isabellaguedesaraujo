const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let destinos = [];

rl.question("Digite o primiero destino:",(d1)=>{
    destinos.push(d1);
rl.question("Digite o segundo destino:",(d2)=>{
    destinos.push(d2);
rl.question("Digite o terceiro destino:",(d3)=>{  
    destinos.push(d3);
    console.log("Lista Inicial: ", destinos);

rl.question("Digite o nome de outro destino: ", (d4)=>{
    destinos.push(d4);
    console.log("Lista Atulizada: ",destinos)
    console.log(destinos.length);

});
});
});
});
