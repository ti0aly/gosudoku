import { consultaRankings } from "./bdsudoku.js";


loadCabecalhoeRodape();


async function loadCabecalhoeRodape() {
    await fetch('https://ti0aly.github.io/gosudoku/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('cabecalho').innerHTML = data;
            document.getElementById('menuRanking').classList.add('pagina-atual');
        });
    await fetch('https://ti0aly.github.io/gosudoku/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('rodape').innerHTML = data);
}

// Aguarda a consulta dos rankings
let [rankingMoleza, rankingFacil, rankingMedio, rankingDificil, rankingExtremo] = await consultaRankings();

const rMoleza = formataRankingHtml(rankingMoleza);
const rFacil = formataRankingHtml(rankingFacil);
const rMedio = formataRankingHtml(rankingMedio);
const rDificil = formataRankingHtml(rankingDificil);
const rExtremo = formataRankingHtml(rankingExtremo);

document.getElementById('rankingExtremo').innerHTML = '<table class="tabelaRanking"><caption>EXTREMO</caption>' + rExtremo;
document.getElementById('rankingDificil').innerHTML = '<table class="tabelaRanking"><caption>DIFÍCIL</caption>' + rDificil;
document.getElementById('rankingMedio').innerHTML = '<table class="tabelaRanking"><caption>MÉDIO</caption>' + rMedio;
document.getElementById('rankingFacil').innerHTML = '<table class="tabelaRanking"><caption>FÁCIL</caption>' + rFacil;
document.getElementById('rankingMoleza').innerHTML = '<table class="tabelaRanking"><caption>MOLEZA</caption>' + rMoleza;
document.getElementById('jogarNovamente').style.display = '';

function ordenaListaPorIndice(lista) {

    let propriedade = 'indice';
    return lista.sort((a, b) => {
      if (a[propriedade] < b[propriedade]) return -1;
      if (a[propriedade] > b[propriedade]) return 1;
      return 0;
    });
  }

function adicionaCalculoRanking(listaDeValores) {
    let erros, nivel, nome, tempo; 
    let novaListaDeObjetos = [];
    for (let object of listaDeValores) {
        [erros, nivel, nome, tempo] = [object['erros'], object['nivel'], object['nome'], object['tempo']];    
        let penalty = erros * 12;
        let indice = tempo + penalty;
        let novoObjeto = {
            'erros' : erros,
            'nivel' : nivel,
            'nome' : nome,
            'tempo': tempo,
            'penalty': penalty,
            'indice': indice
        }
        if (erros <5 ) {
            novaListaDeObjetos.push(novoObjeto);
        }

    }
    return novaListaDeObjetos
}



function formataRankingHtml(listaDeValores) {
    let listaDeValoresComIndice = adicionaCalculoRanking(listaDeValores);
    let listaDeValoresOrdenados = ordenaListaPorIndice(listaDeValoresComIndice);
    let textoHtml = '<thead><tr><th class="coluna-um">Nome</th><th>Tempo+Pênalti</th><th>Tempo</th><th>Erros</th></tr></thead><tbody>';
    let count = 1;
    for (const linha of listaDeValoresComIndice) {
        if (count > 5) {
            break
        }
        textoHtml += '<tr><td class="nomes-ranking"><strong> ' + count + 'º)</strong> ' + linha['nome'] 
        if (count === 1) {
            textoHtml+= '🏆';
        }
        
        textoHtml += '</td><td>' + linha['indice'] + ' s </td><td>' + linha['tempo'] + ' s </td><td>' + linha['erros'] + '</td></tr>';
        count++
    }
    textoHtml += '</tbody></table>';
    return textoHtml
}

document.getElementById('menuRanking').classList.add('paginaAtual');