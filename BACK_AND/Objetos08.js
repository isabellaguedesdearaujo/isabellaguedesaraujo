const objeto = {
    titulo: "Halo",
    genero: "ficção científica",
    ano: "2022",
    duração: "1h04min"
}
function exibirFilme (objeto){
    console.log("Titulo: " + objeto.titulo);
    console.log("Gênero: " + objeto.genero);
    console.log("Ano: " + objeto.ano);
    console.log("Duração: " + objeto.duração);

}
exibirFilme(objeto);
