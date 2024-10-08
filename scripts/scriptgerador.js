import { salvaDados } from './bdsudoku.js';


function loadCabecalhoeRodape() {
    fetch('https://ti0aly.github.io/gosudoku/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('cabecalho').innerHTML = data;
            document.getElementById('menuGerador').classList.add('pagina-atual');
        })

        fetch('https://ti0aly.github.io/gosudoku/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('rodape').innerHTML = data);
}

window.onload = loadCabecalhoeRodape;

let tabuleiro = Array(9).fill().map(() => Array(9).fill(0));;
let time;

document.getElementById('atualizaTabuleiro').addEventListener('click', () => {avisaGerador();});
document.getElementById('timer').style.display = 'none';
document.getElementById('salvaTabuleiro').style.display = 'none';
function preencheCampo(tabuleiro) {
    
    let idCampo = 1;
    for (let linha = 0; linha < 9; linha++) {
        for (let coluna = 0; coluna < 9; coluna++) {
            var campo = document.getElementById(idCampo); 
            campo.value = tabuleiro[linha][coluna];
            idCampo++;
        }
    }
}

function sorteiaNumeroDeUmVetor(vetor) {
    const sorteado = vetor[Math.floor(Math.random() * vetor.length)];
    const [x, y] = sorteado;
    return [x, y];
}

function verificaTodasAsPosicoesPossiveisDeUmNumero(numero, tabuleiro) {
    let posicoesPossiveis = [];
    for (let linha = 0; linha < 9; linha++) {
        for (let coluna = 0; coluna < 9; coluna++) {
            if (verificaNumeroPosicao(numero, linha, coluna, tabuleiro)) {
                posicoesPossiveis.push([linha, coluna]);
            }
        }
    }
    return posicoesPossiveis;
}

function verificaTabuleiro(tabuleiro) {
    let temZero = false;
    for (let c = 0; c < 9; c++) {
        for (let i = 0; i < 9; i++) {
            if (tabuleiro[c][i] === 0) {
                temZero = true;
            }
        }
    }
    return temZero;
}

function verificaNumeroPosicao(numero, linha, coluna, tabuleiro) {
    return !verifyColuna(numero, coluna, tabuleiro) && !verify(numero, tabuleiro[linha]) && !verificaQuadranteDeUmTabuleiro(numero, quadrante[linha][coluna], tabuleiro) && tabuleiro[linha][coluna] === 0;
}

function verificaQuadranteDeUmTabuleiro(numero, numeroDoQuadrante, tabuleiro) {
    const defineQuadrantes = atribuiQuadrantes(tabuleiro);
    return verify(numero, defineQuadrantes[numeroDoQuadrante]);
}

function atribuiQuadrantes(tabuleiro) {
    return [
        [tabuleiro[0][0], tabuleiro[0][1], tabuleiro[0][2], tabuleiro[1][0], tabuleiro[1][1], tabuleiro[1][2], tabuleiro[2][0], tabuleiro[2][1], tabuleiro[2][2]],
        [tabuleiro[0][3], tabuleiro[0][4], tabuleiro[0][5], tabuleiro[1][3], tabuleiro[1][4], tabuleiro[1][5], tabuleiro[2][3], tabuleiro[2][4], tabuleiro[2][5]],
        [tabuleiro[0][6], tabuleiro[0][7], tabuleiro[0][8], tabuleiro[1][6], tabuleiro[1][7], tabuleiro[1][8], tabuleiro[2][6], tabuleiro[2][7], tabuleiro[2][8]],
        [tabuleiro[3][0], tabuleiro[3][1], tabuleiro[3][2], tabuleiro[4][0], tabuleiro[4][1], tabuleiro[4][2], tabuleiro[5][0], tabuleiro[5][1], tabuleiro[5][2]],
        [tabuleiro[3][3], tabuleiro[3][4], tabuleiro[3][5], tabuleiro[4][3], tabuleiro[4][4], tabuleiro[4][5], tabuleiro[5][3], tabuleiro[5][4], tabuleiro[5][5]],
        [tabuleiro[3][6], tabuleiro[3][7], tabuleiro[3][8], tabuleiro[4][6], tabuleiro[4][7], tabuleiro[4][8], tabuleiro[5][6], tabuleiro[5][7], tabuleiro[5][8]],
        [tabuleiro[6][0], tabuleiro[6][1], tabuleiro[6][2], tabuleiro[7][0], tabuleiro[7][1], tabuleiro[7][2], tabuleiro[8][0], tabuleiro[8][1], tabuleiro[8][2]],
        [tabuleiro[6][3], tabuleiro[6][4], tabuleiro[6][5], tabuleiro[7][3], tabuleiro[7][4], tabuleiro[7][5], tabuleiro[8][3], tabuleiro[8][4], tabuleiro[8][5]],
        [tabuleiro[6][6], tabuleiro[6][7], tabuleiro[6][8], tabuleiro[7][6], tabuleiro[7][7], tabuleiro[7][8], tabuleiro[8][6], tabuleiro[8][7], tabuleiro[8][8]],
    ];
}

function limpaDisplayDoTabuleiro() {
    for (let id = 1; id <= 81; id++) {
        document.getElementById(id).value = '';
        }
}

function avisaGerador() {
    time = performance.now();
    document.getElementById('loading').style.display = ''; 
    document.getElementById('tabuleiroGerado').textContent = 'Aguarde o processamento...';
    limpaDisplayDoTabuleiro();
    document.getElementById('atualizaTabuleiro').style.display = 'none';
    document.getElementById('tituloGerador').style.display = 'none';

 
    setTimeout(() => {
        geraUmTabuleiroValido(tabuleiro);
    }, 0);
}

function geraUmTabuleiroValido(tabuleiro) {
    let posicoesPossiveis;
    let linha, coluna;
    let count = 0;
    
    while (true) {
        count++;
        for (let num = 1; num <= 9; num++) {
            for (let i = 0; i < 9; i++) {
                posicoesPossiveis = verificaTodasAsPosicoesPossiveisDeUmNumero(num, tabuleiro);
                if (posicoesPossiveis.length > 0) {
                    [linha, coluna] = sorteiaNumeroDeUmVetor(posicoesPossiveis);
                    tabuleiro[linha][coluna] = num;
                }
            }
        }
        if (!verificaTabuleiro(tabuleiro)) {
            break
        }
        
        tabuleiro = Array(9).fill().map(() => Array(9).fill(0));
        }
    document.getElementById('loading').style.display = 'none';  
    preencheCampo(tabuleiro);
    salvaDados(tabuleiro);
    updateTimer(time);
    let elapsedTime = performance.now() - time;
    document.getElementById('salvaTabuleiro').style.display = '';
    document.getElementById('tabuleiroGerado').innerHTML = 'Tabuleiro gerado pelo seu navegador.<br>Foram realizadas ' + count + ' tentativas.<br>Tempo transcorrido em segundos: ' + formatTime(elapsedTime) ;
    document.getElementById('atualizaTabuleiro').style.display = '';
}



function verify(x, vetor) {
    return vetor.includes(x);
}

function verifyColuna(x, coluna, tabuleiro) {
    return tabuleiro.some(row => row[coluna] === x);
}

// Exemplo de uso
const quadrante = [
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8]
];





function formatTime(ms) {
    // Converte milissegundos para segundos
    let totalSegundos = Math.floor(ms / 1000);
  
    // Calcula minutos e segundos restantes
    let segundos = totalSegundos % 60;
    let centesimos = Math.floor((ms % 1000) / 10);
    // Adiciona um zero à esquerda se os minutos ou segundos forem menores que 10
    segundos = segundos < 10 ? `0${segundos}` : segundos;
    centesimos = centesimos < 10 ? `0${centesimos}` : centesimos;
    // Retorna o tempo formatado como mm:ss
    return `${segundos}:${centesimos}`;
  }

function updateTimer(time) {
    let elapsedTime = performance.now() - time;
    document.getElementById('timer').textContent = formatTime(elapsedTime);
}
