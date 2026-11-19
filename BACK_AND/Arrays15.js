
let filmes = [];

function registrarFilme (titulo) {
filmes.push(titulo);
}
registrarFilme("O Poderoso Chefão");
registrarFilme("Matrix");
registrarFilme("Interestelar");
registrarFilme("Homem Aranha");
console.log("Filmes assistidos durante a semana:");
console.log(filmes);

console.log("Quantidade total de filmes assistidos:");
console.log(filmes.length);
