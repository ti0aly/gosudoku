import { consultaRankings } from "./bdsudoku.js";

window.onload = loadCabecalhoeRodape;
function loadCabecalhoeRodape() {
    fetch('https://ti0aly.github.io/gosudoku/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('cabecalho').innerHTML = data);

        fetch('https://ti0aly.github.io/gosudoku/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('rodape').innerHTML = data);
}


let rankingMoleza, rankingFacil, rankingMedio, rankingDificil, rankingExtremo;

[rankingMoleza, rankingFacil, rankingMedio, rankingDificil, rankingExtremo] = await consultaRankings();

const rMoleza = formataRankingHtml(rankingMoleza);
const rFacil = formataRankingHtml(rankingFacil);
const rMedio = formataRankingHtml(rankingMedio);
const rDificil = formataRankingHtml(rankingDificil);
const rExtremo = formataRankingHtml(rankingExtremo);

function ordenaListaPorTempo(lista) {
    let propriedade = 'tempo';
    return lista.sort((a, b) => {
      if (a[propriedade] < b[propriedade]) return -1;
      if (a[propriedade] > b[propriedade]) return 1;
      return 0;
    });
  }

function formataRankingHtml(listaDeValores) {
    let listaDeValoresOrdenados = ordenaListaPorTempo(listaDeValores);
    let textoHtml = '<thead><tr><th>Nome</th><th>Tempo</th><th>Erros</th></tr></thead><tbody>';
    for (const linha of listaDeValoresOrdenados) {
        textoHtml += '<tr><td>' + linha['nome'] + '</td><td>' + linha['tempo'] + 's' + '</td><td>' + linha['erros'] + '</td></tr>';
    }
    textoHtml += '</tbody></table>';
    return textoHtml
}

document.getElementById('rankingExtremo').innerHTML = '<table class="tabelaRanking"><caption>EXTREMO</caption>' + rExtremo;
document.getElementById('rankingDificil').innerHTML = '<table class="tabelaRanking"><caption>DIFÍCIL</caption>' + rDificil;
document.getElementById('rankingMedio').innerHTML = '<table class="tabelaRanking"><caption>MÉDIO</caption>' + rMedio;
document.getElementById('rankingFacil').innerHTML = '<table class="tabelaRanking"><caption>FÁCIL</caption>' + rFacil;
document.getElementById('rankingMoleza').innerHTML = '<table class="tabelaRanking"><caption>MOLEZA</caption>' + rMoleza;


document.getElementById('jogarNovamente').style.display = '';
