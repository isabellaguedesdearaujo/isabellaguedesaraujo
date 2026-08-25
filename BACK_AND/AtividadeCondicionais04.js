const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Dígite a nota do alunos de 0 a 10: ",(nota)=>{

    nota = Number (nota)
    
    if(nota >= 9 && 10){
        console.log("Excelente nota!");
    }else if (nota >= 7 && nota <= 8.9 ){
        console.log("Bom aluno");
    }else if (nota >= 5 && nota <= 6.59){
        console.log("Nota regular");
    }else 
        console.log("Nota insuficiente");
});
