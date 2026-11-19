const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let valores = [];

function registarGasto(valor){
    valores.push(valor);
    
}

rl.question("Digite o valor gasto no primeiro dia: ",(v1)=>{

v1 = Number (v1);
registarGasto(v1);

rl.question("Digite o valor gasto no segundo dia: ",(v2)=>{

 v2 = Number (v2);
 registarGasto(v2);

rl.question("Digite o valor gasto no terceiro dia: ",(v3)=>{

 v3 = Number (v3);
 registarGasto(v3);

rl.question("Digite o valor gasto no quarto dia: ",(v4)=>{

 v4 = Number (v4);
 registarGasto(v4);

 let total = valores.length;



   


console.log("Valores registrado: " , valores);
console.log("Total registrado: ", total);
 
});
});
});
});

