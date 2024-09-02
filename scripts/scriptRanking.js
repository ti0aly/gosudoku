// FAZER: ordenar ranking  


import { consultaRankings } from "./bdsudoku.js";

function loadCabecalhoeRodape() {
    fetch('https://ti0aly.github.io/gosudoku/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('cabecalho').innerHTML = data);

        fetch('https://ti0aly.github.io/gosudoku/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('rodape').innerHTML = data);
}


window.onload = loadCabecalhoeRodape;

let rankingMoleza;
let rankingFacil; 
let rankingMedio;
let rankingDificil;
let rankingExtremo;

[rankingMoleza, rankingFacil, rankingMedio, rankingDificil, rankingExtremo] = await consultaRankings();

const rMoleza = formataRankingHtml(rankingMoleza);
const rFacil = formataRankingHtml(rankingFacil);
const rMedio = formataRankingHtml(rankingMedio);
const rDificil = formataRankingHtml(rankingDificil);
const rExtremo = formataRankingHtml(rankingExtremo);

function formataRankingHtml(listaDeValores) {
    let textoHtml = '<thead><tr><th>Nome</th><th>Tempo</th><th>Erros</th></tr></thead><tbody>';
    for (const linha of listaDeValores) {
        textoHtml += '<tr><td>' + linha['nome'] + '</td><td>' + linha['tempo'] + '</td><td>' + linha['erros'] + '</td></tr>';
    }
    textoHtml += '</tbody></table>';
    return textoHtml
}

document.getElementById('rankingExtremo').innerHTML = '<table class="tabelaRanking"><caption>Extremo</caption>' + rExtremo;
document.getElementById('rankingDificil').innerHTML = '<table class="tabelaRanking"><caption>Difícil</caption>' + rDificil;
document.getElementById('rankingMedio').innerHTML = '<table class="tabelaRanking"><caption>Medio</caption>' + rMedio;
document.getElementById('rankingFacil').innerHTML = '<table class="tabelaRanking"><caption>Facil</caption>' + rFacil;
document.getElementById('rankingMoleza').innerHTML = '<table class="tabelaRanking"><caption>Moleza</caption>' + rMoleza;


document.getElementById('jogarNovamente').style.display = '';