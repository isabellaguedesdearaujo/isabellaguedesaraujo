const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

function verificarSituacao (nota){
    return nota >= 6 ? 'Aprovado' : 'Reprovado';
}

rl.question("Dígite sua nota: " , (nota)=>{
    nota = Number (nota);
    let resultado = verificarSituacao(nota);

    console.log("A situação do aluno é ",resultado);

});
