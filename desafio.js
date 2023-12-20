let resultado = partidasRankeadas(81, 53)

function partidasRankeadas(vitorias, derrotas){
    let somatorio = vitorias - derrotas
    return somatorio
}
let ranking = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

if(resultado <= 10){
    console.log("O jogador tem " + resultado + " vitórias e está no ranking " + ranking[0])
}else if(resultado == 11 || resultado <= 20){
    console.log("O jogador tem " + resultado + " vitórias e está no ranking " + ranking[1])
}else if(resultado == 21 || resultado <= 50){
    console.log("O jogador tem " + resultado + " vitórias e está no ranking " + ranking[2])
}else if(resultado == 51 || resultado <= 80){
    console.log("O jogador tem " + resultado + " vitórias e está no ranking " + ranking[3])
}else if(resultado == 81 || resultado <= 90){
    console.log("O jogador tem " + resultado + " vitórias e está no ranking " + ranking[4])
}else if(resultado == 91 || resultado <= 100){
    console.log("O jogador tem " + resultado + " vitórias e está no ranking " + ranking[5])
}else {
    console.log("O jogador tem " + resultado + " vitórias e está no ranking " + ranking[6])
}
