const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

function mostraDados(nome, idade) {
        console.log(nome, "tem" ,idade, "anos");
}
rl.question("Dígite seu nome: ",(nome)=>{
rl.question("Dígite sua idade: " ,(idade)=>{

    idade = Number (idade);

    mostraDados(nome, idade)

});
});
