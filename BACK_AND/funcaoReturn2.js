const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

function calcularMedia(nota1, nota2){
    return nota1 + nota2/2;
}

rl.question("Dígite a primeira nota: " ,(nota1)=>{
rl.question("Dígite a segunda nota: " ,(nota2)=>{

    nota1 = Number(nota1);
    nota2 = Number(nota2);

    let resultado = calcularMedia(nota1, nota2)

    console.log("A média da nota é " ,resultado,);

});
});
