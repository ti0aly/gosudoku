var erros = 0; 
var tabuleiroAtual;
var inputSelecionada = null;




function loadCabecalhoeRodape() {
    fetch('https://ti0aly.github.io/gosudoku/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('cabecalho').innerHTML = data);

        fetch('https://ti0aly.github.io/gosudoku/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('rodape').innerHTML = data);
}

window.onload = loadCabecalhoeRodape;
document.getElementById('jogarNovamente').style.display = 'none';
document.getElementById('registraRanking').style.display = 'none';
document.getElementById('digitaNome').style.display = 'none';

document.querySelectorAll('.inputMaroto').forEach(input => {
    input.addEventListener('focus', function() {
        inputSelecionada = this;
        console.log(inputSelecionada.id);
    });
});

document.getElementById('atualizaTabuleiroOculto1').addEventListener('click', () => {inicioDeJogo(1), document.getElementById('tituloPagina').innerHTML = 'Nível Moleza';});
document.getElementById('atualizaTabuleiroOculto2').addEventListener('click', () => {inicioDeJogo(28), document.getElementById('tituloPagina').innerHTML = 'Nível Fácil';});
document.getElementById('atualizaTabuleiroOculto3').addEventListener('click', () => {inicioDeJogo(35), document.getElementById('tituloPagina').innerHTML = 'Nível Médio';});
document.getElementById('atualizaTabuleiroOculto4').addEventListener('click', () => {inicioDeJogo(45), document.getElementById('tituloPagina').innerHTML = 'Nível Difícil';});
document.getElementById('atualizaTabuleiroOculto5').addEventListener('click', () => {inicioDeJogo(55), document.getElementById('tituloPagina').innerHTML = 'Nível Extremo';});
document.getElementById('num1').addEventListener('click', () => {preencheInputSelecionada(1)});
document.getElementById('num2').addEventListener('click', () => {preencheInputSelecionada(2)});
document.getElementById('num3').addEventListener('click', () => {preencheInputSelecionada(3)});
document.getElementById('num4').addEventListener('click', () => {preencheInputSelecionada(4)});
document.getElementById('num5').addEventListener('click', () => {preencheInputSelecionada(5)});
document.getElementById('num6').addEventListener('click', () => {preencheInputSelecionada(6)});
document.getElementById('num7').addEventListener('click', () => {preencheInputSelecionada(7)});
document.getElementById('num8').addEventListener('click', () => {preencheInputSelecionada(8)});
document.getElementById('num9').addEventListener('click', () => {preencheInputSelecionada(9)});
document.getElementById('registraRanking').addEventListener('click', () => {registraRanking()});



function inicioDeJogo(quantidade) {
    tabuleiroAtual = [[3, 8, 4, 1, 5, 7, 2, 9, 6], [5, 2, 9, 3, 4, 6, 1, 7, 8], [7, 6, 1, 9, 8, 2, 4, 3, 5], [4, 9, 6, 7, 2, 8, 5, 1, 3], [1, 3, 8, 6, 9, 5, 7, 2, 4], [2, 5, 7, 4, 1, 3, 8, 6, 9], [9, 7, 5, 8, 6, 1, 3, 4, 2], [8, 4, 3, 2, 7, 9, 6, 5, 1], [6, 1, 2, 5, 3, 4, 9, 8, 7]]; 
    let posicoesOcultas = geraListaRandomica(quantidade);
    preencheCampoQuantidadeOculta(tabuleiroAtual, posicoesOcultas);
    document.getElementById('nivelDoJogo').remove();
    startTimer();
}

function preencheInputSelecionada(valor) {
        if (inputSelecionada != null) {
            inputSelecionada.value = valor;
            verificaCorreto(tabuleiroAtual);
        } else {
            alert("Selecione um campo de input");
        }
    }



function verificaFimDeJogo(tabuleiroAtual) {
    let ganhou = true;
    for (let i = 1; i <= 81; i++) {
        if (document.getElementById(i).value != tabuleiroAtual[i]) {
            ganhou = false;
        } else {}
    }
    if (ganhou) {
        exibeVitoria();
    }
}

function verificaCorreto(tabuleiroAtual) {
    let listaTabuleiro = converteTabuleiroemLista(tabuleiroAtual);
    for (let i = 1; i <= 81; i++) {
        if (document.getElementById(i).value == ' ') {
        } else if (document.getElementById(i).value != listaTabuleiro[i]) {
            document.getElementById(i).classList.add('error');
            erros++;
            document.getElementById('mostraErros').innerHTML = 'Número de erros:' + erros;
        } else {
            document.getElementById(i).classList.remove('error');
            verificaFimDeJogo(listaTabuleiro);
        }
    }
}


function converteTabuleiroemLista(tabuleiro) {
    let novaLista = [0];

    for (let linha=0; linha<9;linha++) {
        for (let coluna=0; coluna < 9; coluna++) {
            novaLista.push(tabuleiro[linha][coluna]);
        }
    }
    return novaLista;
}

function preencheCampoQuantidadeOculta(tabuleiro, ocultos){
    removeNiveis();
    let idCampo = 1;
    for (let linha = 0; linha < 9; linha++) {
        for (let coluna = 0; coluna < 9; coluna++) {
            if (ocultos.includes(idCampo)) {
                var campo = document.getElementById(idCampo); 
                campo.value = ' '
                idCampo++;
            } else {
            var campo = document.getElementById(idCampo); 
            campo.value = tabuleiro[linha][coluna];
            idCampo++;
        }
        }
    }
}

function geraListaRandomica(quantidade) {
    const randomList = [];
    for (let i = 0; randomList.length < quantidade; i++) {
        const randomNum = Math.floor(Math.random() * 81) + 1;
        if (!(randomList.includes(randomNum))) {
            randomList.push(randomNum);
        } 
    }
    console.log(randomList);
    return randomList;
}

function removeNiveis() {
    document.getElementById('atualizaTabuleiroOculto1').remove();
    document.getElementById('atualizaTabuleiroOculto2').remove();
    document.getElementById('atualizaTabuleiroOculto3').remove();
    document.getElementById('atualizaTabuleiroOculto4').remove();
    document.getElementById('atualizaTabuleiroOculto5').remove();

}

function exibeVitoria() {
    stopTimer();
    document.getElementById('tituloPagina').innerHTML = 'Você ganhou!';
    document.getElementById('botoesNum').style.display = 'none';
    document.getElementById('loader').innerHTML = '<br><br>Muito bem!<br>Vamos adicionar seu nome no Ranking:<br><br>'
    document.getElementById('jogarNovamente').style.display = '';
    document.getElementById('registraRanking').style.display = '';
    document.getElementById('digitaNome').style.display = '';
}

let timerInterval;
let elapsedTime = 0; // Tempo em segundos

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateTimer() {
    elapsedTime++;
    document.getElementById('timer').textContent = formatTime(elapsedTime);
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 1000); // Atualiza o timer a cada segundo
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    elapsedTime = 0;
    document.getElementById('timer').textContent = formatTime(elapsedTime);
}


function registraRanking() {
    let nome = document.getElementById('digitaNome').value;
    let tempo = elapsedTime;
    let numeroDeErros = erros;
    document.getElementById('tituloPagina').innerHTML = nome + "<br>Você terminou em " + formatTime(tempo) + " minutos.<br>Número de erros: " + numeroDeErros;
    document.getElementById('registraRanking').style.display = 'none';
    document.getElementById('digitaNome').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    document.getElementById('loader').style.display = 'none';
}