const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let notas = [];
function cadastrarNota(nota) {
  notas.push(nota)
}
rl.question("Digite a primira nota:" ,(n1)=>{
    n1 = Number (n1);
    cadastrarNota(n1);

rl.question("Digite a segunda nota:" ,(n2)=>{
    n2 = Number (n2);
    cadastrarNota(n2);

rl.question("Digite a terceira nota:" ,(n3)=>{
    n3 = Number (n3);
    cadastrarNota(n3);

rl.question("Digite a quarta nota:" ,(n4)=>{
    n4 = Number (n4);
    cadastrarNota(n4);

rl.question("Digite a quinta nota:" ,(n5)=>{
    n5 = Number (n5);
    cadastrarNota(n5);

    console.log("Notas cadastradas: ", notas);
    
});
});
});
});
});
