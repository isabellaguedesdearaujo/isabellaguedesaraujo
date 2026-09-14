const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

console.log("Bem-vindo ao cinema da Escola do Futuro");
rl.question("Informe sua idade: ", (idade)=>{
rl.question("Informe seu nome: ", (nome)=>{
console.log("Escolha um filme: ")
console.log("1- Ação");
console.log("2- Comédia");
rl.question("Dígite o filme escolhido: " , (filme)=>{

        idade = Number (idade);
        filme = Number (filme);

let nomeFilme;
switch (filme) {
    case 1:
        nomeFilme = "Filme de Ação";
        break;
    case 2:
        nomeFilme = "Filme de Comédia";
        break;
    default:
        nomeFilme = "Filme inválido";
        break;
} 

let podeEntrar;

if(idade >=16){
    podeEntrar = true
}else{
    podeEntrar = false
}

let mensagem = podeEntrar ? "Pode entrar na sessão" : "Não pode entrar na sessão"
  
console.log("Nome: " , nome)
console.log("Filme: "  , nomeFilme)
console.log(mensagem)

});
});
});
