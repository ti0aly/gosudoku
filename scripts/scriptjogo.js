import { salvarDadosRanking, consultaTabuleiroAleatorio} from './bdsudoku.js';

const numeroDeErrosAceitos = 5;
var erros = 0; 
var errosComputados = [];
var tabuleiroAtual;
var inputSelecionada = null;
var numeroDoArray;
var nivelDoJogoAtual;

window.onload = loadCabecalhoeRodape;
function loadCabecalhoeRodape() {
    fetch('https://ti0aly.github.io/gosudoku/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('cabecalho').innerHTML = data;
            document.getElementById('menuJogar').classList.add('pagina-atual');
        });

        fetch('https://ti0aly.github.io/gosudoku/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('rodape').innerHTML = data);
}

document.getElementById('atualizaTabuleiroOculto1').addEventListener('click', () => {inicioDeJogo(15, 1), document.getElementById('tituloPagina').innerHTML = 'Nível Moleza';});
document.getElementById('atualizaTabuleiroOculto2').addEventListener('click', () => {inicioDeJogo(26, 2), document.getElementById('tituloPagina').innerHTML = 'Nível Fácil';});
document.getElementById('atualizaTabuleiroOculto3').addEventListener('click', () => {inicioDeJogo(38, 3), document.getElementById('tituloPagina').innerHTML = 'Nível Médio';});
document.getElementById('atualizaTabuleiroOculto4').addEventListener('click', () => {inicioDeJogo(46, 4), document.getElementById('tituloPagina').innerHTML = 'Nível Difícil';});
document.getElementById('atualizaTabuleiroOculto5').addEventListener('click', () => {inicioDeJogo(55, 5), document.getElementById('tituloPagina').innerHTML = 'Nível Extremo';});
document.getElementById('num1').addEventListener('click', () => {preencheInputSelecionada(1)});
document.getElementById('num2').addEventListener('click', () => {preencheInputSelecionada(2)});
document.getElementById('num3').addEventListener('click', () => {preencheInputSelecionada(3)});
document.getElementById('num4').addEventListener('click', () => {preencheInputSelecionada(4)});
document.getElementById('num5').addEventListener('click', () => {preencheInputSelecionada(5)});
document.getElementById('num6').addEventListener('click', () => {preencheInputSelecionada(6)});
document.getElementById('num7').addEventListener('click', () => {preencheInputSelecionada(7)});
document.getElementById('num8').addEventListener('click', () => {preencheInputSelecionada(8)});
document.getElementById('num9').addEventListener('click', () => {preencheInputSelecionada(9)});
document.getElementById('del').addEventListener('click', () => {preencheInputSelecionada(' ')});
document.getElementById('registraRanking').addEventListener('click', () => {registraRanking()});
document.getElementById('jogarNovamente').style.display = 'none';
document.getElementById('registraRanking').style.display = 'none';
document.getElementById('mostraNumeroDoJogo').style.display = 'none';
document.getElementById('digitaNome').style.display = 'none';
document.querySelectorAll('.inputMaroto').forEach(input => {
    input.addEventListener('focus', function() {
        inputSelecionada = this;
        marcaItemPeloValor(inputSelecionada.value);
    });
});

function marcaItemPeloValor(valor) {
    for (let id = 1; id <= 81; id++) {
        document.getElementById(id).classList.remove('select');
    }
    for (let id = 1; id <= 81; id++) {
        if (document.getElementById(id).value == valor && document.getElementById(id).value != ' ') {
            document.getElementById(id).classList.add('select');
        }
    }
}

async function inicioDeJogo(quantidade, nivel) {
    nivelDoJogoAtual = nivel; 
    [tabuleiroAtual, numeroDoArray] = await consultaTabuleiroAleatorio();
    document.getElementById('mostraNumeroDoJogo').style.display = '';
    document.getElementById('mostraNumeroDoJogo').innerHTML = 'ID do tabuleiro: ' + numeroDoArray;
    let posicoesOcultas = geraListaRandomica(quantidade);
    preencheCampoQuantidadeOculta(tabuleiroAtual, posicoesOcultas);
    document.getElementById('nivelDoJogo').style.display = 'none';
    document.getElementById('novidades').style.display = 'none';
    startTimer();
    verificaTodosBotoesParaEsconder(tabuleiroAtual);
}

function preencheInputSelecionada(valor) {
        if (inputSelecionada != null) {
            inputSelecionada.value = valor;
            verificaCorreto(tabuleiroAtual);
            marcaItemPeloValor(valor);
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
        if (document.getElementById(i).value != listaTabuleiro[i] && document.getElementById(i).value != ' '  ) {
            document.getElementById(i).classList.add('error');
            if (!errosComputados.includes(i)) {
                erros++;
                cancelaJogoPorErros(erros);
                errosComputados.push(i);
            }
        } 
        else {
            document.getElementById(i).classList.remove('error');
            verificaTodosBotoesParaEsconder(tabuleiroAtual);
            verificaFimDeJogo(listaTabuleiro);
            if (errosComputados.includes(i)) {
                const indice = errosComputados.indexOf(i);
                errosComputados[indice] = 0;
            }
        }
    }
}

function verificaTodosBotoesParaEsconder(tabuleiroAtual) {
    for (let i=1; i<=9;i++) {
        verificaEscondeNumeroBt(i, tabuleiroAtual);
    }
}

function verificaEscondeNumeroBt(numero, tabuleiroAtualNormal) {
    let counter = 0;
    let tabuleiroAtual = converteTabuleiroemLista(tabuleiroAtualNormal);
    for (let i = 1; i <= 81; i++) {
        if (document.getElementById(i).value == numero && tabuleiroAtual[i] == numero)  {
            counter++
        }
    }
    let ids= ["", "num1", "num2", "num3", "num4", "num5", "num6", "num7", "num8", "num9"];
    if (counter == 9) {
        document.getElementById(ids[numero]).style.opacity ='0.3';
    } else {
        document.getElementById(ids[numero]).style.opacity ='1';
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
    document.getElementById('botoesNum2').style.display = 'none';
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
        timerInterval = setInterval(updateTimer, 1000); 
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function registraRanking() {
    let nome = document.getElementById('digitaNome').value;
    salvarDadosRanking(nome, elapsedTime, erros, nivelDoJogoAtual);
    console.log('dados enviados pra salvar: ', nome, elapsedTime, erros, nivelDoJogoAtual);
    document.getElementById('tituloPagina').innerHTML = nome + "<br>Você terminou em " + formatTime(elapsedTime) + " minutos.<br>Número de erros: " + erros;
    document.getElementById('registraRanking').style.display = 'none';
    document.getElementById('digitaNome').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    document.getElementById('loader').style.display = 'none';
    window.location.replace('https://ti0aly.github.io/gosudoku/ranking.html');
}

function cancelaJogoPorErros(errosJogo) {
    const exibeErros = document.getElementById('mostraErros');
    switch (errosJogo) {
        case 1 :
            exibeErros.innerHTML = 'Você só pode errar mais ' + (numeroDeErrosAceitos - errosJogo) + ' vezes!';
            break;
        case 2 :
            exibeErros.innerHTML = 'Só pode errar mais ' + (numeroDeErrosAceitos - errosJogo) + ' vezes!';
            break;
        case 3 : 
            exibeErros.classList.add('erro-vermelho');
            exibeErros.innerHTML = 'Cuidado!!! Restam ' + (numeroDeErrosAceitos - errosJogo) + ' erros apenas!';
            break;
        case 4 :
            exibeErros.innerHTML = 'Último erro ☠️';
            break;
        case 5 :
            document.getElementById('tabuleiroGrande').style.display = 'none';
            document.getElementById('botoesNum').style.display = 'none';
            document.getElementById('botoesNum2').style.display = 'none';
            exibeErros.style.display = 'none';
            document.getElementById('jogarNovamente').style.display = '';
            stopTimer();
            document.getElementById('tituloPagina').innerHTML = '😔 Não foi dessa vez'
            break;
    }
}

/* let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
  });

const installButton = document.getElementById('install-button');
installButton.addEventListener('click', () => {
if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou instalar o app.');
    } else {
        console.log('Usuário recusou instalar o app.');
    }
    deferredPrompt = null;
    });
} else {
    console.log('O prompt de instalação não está disponível.');
    alert('Não foi possível adicionar à tela de início, mas você pode fazer isso manualmente no seu navegador.');
}
});

setTimeout(function () {document.getElementById('install-button').style.display = ''}, 20000);
setTimeout(function () {document.getElementById('install-button').style.display = 'none'}, 40000); */