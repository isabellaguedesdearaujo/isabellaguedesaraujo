const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

// Mostra uma mensagem de boas-vindas ao iniciar o programa
console.log("========================================");
console.log("   💰 BEM-VINDO À ÁREA FINANCEIRA DA BPIAID! 💰");
console.log("========================================");

console.log("\nAqui você poderá fazer uma boa gestão finaceira.");
console.log("Onde podera definir seu limite de gastos e informar o  quanto recebeu");
console.log("e registre seus gastos para acompanhar seu saldo");
console.log("e saber quanto ainda pode gastar no mês.\n");

console.log("Vamos começar! 😊\n");

//Pergunta sobre limite do mês é a transformação para número
rl.question("Dígite o valor è o limite de gasto do mês:", (limite)=>{
//pergunta sobre valor recebido é a transformação para número
    limite = Number (limite);
rl.question("Dígite o valor recebido: ", (recebido)=>{
    recebido = Number (recebido);
//Pergunta sobre valor gasto é a transformação para número
rl.question("Dígite o valor gasto: ", (gasto)=>{
    gasto = Number (gasto);

//Calculo de quanto ainda pode gastar
const podegastar= limite - gasto;

// Calcula o saldo total
const saldo = recebido - gasto;

// Mostra os resultados
console.log("\n===== RESUMO FINANCEIRO =====");
console.log("💰 Você recebeu: R$", recebido);
console.log("💸 Você gastou: R$", gasto);
console.log("📊 Seu limite: R$", limite);
console.log("💵 Seu saldo: R$", saldo);
console.log("🛒 Ainda pode gastar: R$", podegastar);

 // Fecha o readline
rl.close();

});
});
});
