
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
function classificarFaixaEtaria(idade){
    if(idade<=12){
        return "Criança"
    }else if (idade>=13 && idade<=17){
        return "Adolescente"
    }else if (idade>=18 && idade<=59){
        return "Adulto"
    }else{
        return "Idoso"
    }
}
rl.question("Digite sua idade: " ,(idade)=>{
    idade= Number (idade)
console.log(classificarFaixaEtaria(idade));
})
