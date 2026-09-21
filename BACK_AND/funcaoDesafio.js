const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

function calcularDesconto (valor){
    if(valor >=100){
        return "Desconto de 10% "
    }else if(valor >=50 && valor <100){
        return "Desconto de 5%"
    }else{
        return "sem desconto"
    }
    
}

rl.question("Dígite o valor da compra: " , (valor)=>{
   
    valor = Number (valor);
 
    let resultado = calcularDesconto (valor);

    console.log (resultado);
});
