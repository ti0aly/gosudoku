function loadCabecalhoeRodape() {
    fetch('https://ti0aly.github.io/gosudoku/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('cabecalho').innerHTML = data);

        fetch('https://ti0aly.github.io/gosudoku/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('rodape').innerHTML = data);
}

window.onload = loadCabecalhoeRodape;

var erros = 0; 





document.getElementById('atualizaTabuleiroOculto1').addEventListener('click', () => {inicioDeJogo(1), document.getElementById('nivelDoJogo').innerHTML = 'Nível Moleza';});
document.getElementById('atualizaTabuleiroOculto2').addEventListener('click', () => {inicioDeJogo(30), document.getElementById('nivelDoJogo').innerHTML = 'Nível Fácil';});
document.getElementById('atualizaTabuleiroOculto3').addEventListener('click', () => {inicioDeJogo(40), document.getElementById('nivelDoJogo').innerHTML = 'Nível Médio';});
document.getElementById('atualizaTabuleiroOculto4').addEventListener('click', () => {inicioDeJogo(50), document.getElementById('nivelDoJogo').innerHTML = 'Nível Difícil';});
document.getElementById('atualizaTabuleiroOculto5').addEventListener('click', () => {inicioDeJogo(65), document.getElementById('nivelDoJogo').innerHTML = 'Nível Extremo';});


function inicioDeJogo(quantidade) {
    
    let tabuleiroAtual = [[3, 8, 4, 1, 5, 7, 2, 9, 6], [5, 2, 9, 3, 4, 6, 1, 7, 8], [7, 6, 1, 9, 8, 2, 4, 3, 5], [4, 9, 6, 7, 2, 8, 5, 1, 3], [1, 3, 8, 6, 9, 5, 7, 2, 4], [2, 5, 7, 4, 1, 3, 8, 6, 9], [9, 7, 5, 8, 6, 1, 3, 4, 2], [8, 4, 3, 2, 7, 9, 6, 5, 1], [6, 1, 2, 5, 3, 4, 9, 8, 7]]; 
    let posicoesOcultas = geraListaRandomica(quantidade);
    preencheCampoQuantidadeOculta(tabuleiroAtual, posicoesOcultas);
    verificadorDuranteJogo(tabuleiroAtual,1);
    verificadorDuranteJogo(tabuleiroAtual,2);
    verificadorDuranteJogo(tabuleiroAtual,3);
    verificadorDuranteJogo(tabuleiroAtual,4);
    verificadorDuranteJogo(tabuleiroAtual,5);
    verificadorDuranteJogo(tabuleiroAtual,6);
    verificadorDuranteJogo(tabuleiroAtual,7);
    verificadorDuranteJogo(tabuleiroAtual,8);
    verificadorDuranteJogo(tabuleiroAtual,9);
    verificadorDuranteJogo(tabuleiroAtual,10);
    verificadorDuranteJogo(tabuleiroAtual,11);
    verificadorDuranteJogo(tabuleiroAtual,12);
    verificadorDuranteJogo(tabuleiroAtual,13);
    verificadorDuranteJogo(tabuleiroAtual,14);
    verificadorDuranteJogo(tabuleiroAtual,15);
    verificadorDuranteJogo(tabuleiroAtual,16);
    verificadorDuranteJogo(tabuleiroAtual,17);
    verificadorDuranteJogo(tabuleiroAtual,18);
    verificadorDuranteJogo(tabuleiroAtual,19);
    verificadorDuranteJogo(tabuleiroAtual,20);
    verificadorDuranteJogo(tabuleiroAtual,21);
    verificadorDuranteJogo(tabuleiroAtual,22);
    verificadorDuranteJogo(tabuleiroAtual,23);
    verificadorDuranteJogo(tabuleiroAtual,24);
    verificadorDuranteJogo(tabuleiroAtual,25);
    verificadorDuranteJogo(tabuleiroAtual,26);
    verificadorDuranteJogo(tabuleiroAtual,27);
    verificadorDuranteJogo(tabuleiroAtual,28);
    verificadorDuranteJogo(tabuleiroAtual,29);
    verificadorDuranteJogo(tabuleiroAtual,30);
    verificadorDuranteJogo(tabuleiroAtual,31);
    verificadorDuranteJogo(tabuleiroAtual,32);
    verificadorDuranteJogo(tabuleiroAtual,33);
    verificadorDuranteJogo(tabuleiroAtual,34);
    verificadorDuranteJogo(tabuleiroAtual,35);
    verificadorDuranteJogo(tabuleiroAtual,36);
    verificadorDuranteJogo(tabuleiroAtual,37);
    verificadorDuranteJogo(tabuleiroAtual,38);
    verificadorDuranteJogo(tabuleiroAtual,39);
    verificadorDuranteJogo(tabuleiroAtual,40);
    verificadorDuranteJogo(tabuleiroAtual,41);
    verificadorDuranteJogo(tabuleiroAtual,42);
    verificadorDuranteJogo(tabuleiroAtual,43);
    verificadorDuranteJogo(tabuleiroAtual,44);
    verificadorDuranteJogo(tabuleiroAtual,45);
    verificadorDuranteJogo(tabuleiroAtual,46);
    verificadorDuranteJogo(tabuleiroAtual,47);
    verificadorDuranteJogo(tabuleiroAtual,48);
    verificadorDuranteJogo(tabuleiroAtual,49);
    verificadorDuranteJogo(tabuleiroAtual,50);
    verificadorDuranteJogo(tabuleiroAtual,51);
    verificadorDuranteJogo(tabuleiroAtual,52);
    verificadorDuranteJogo(tabuleiroAtual,53);
    verificadorDuranteJogo(tabuleiroAtual,54);
    verificadorDuranteJogo(tabuleiroAtual,55);
    verificadorDuranteJogo(tabuleiroAtual,56);
    verificadorDuranteJogo(tabuleiroAtual,57);
    verificadorDuranteJogo(tabuleiroAtual,58);
    verificadorDuranteJogo(tabuleiroAtual,59);
    verificadorDuranteJogo(tabuleiroAtual,60);
    verificadorDuranteJogo(tabuleiroAtual,61);
    verificadorDuranteJogo(tabuleiroAtual,62);
    verificadorDuranteJogo(tabuleiroAtual,63);
    verificadorDuranteJogo(tabuleiroAtual,64);
    verificadorDuranteJogo(tabuleiroAtual,65);
    verificadorDuranteJogo(tabuleiroAtual,66);
    verificadorDuranteJogo(tabuleiroAtual,67);
    verificadorDuranteJogo(tabuleiroAtual,68);
    verificadorDuranteJogo(tabuleiroAtual,69);
    verificadorDuranteJogo(tabuleiroAtual,70);
    verificadorDuranteJogo(tabuleiroAtual,71);
    verificadorDuranteJogo(tabuleiroAtual,72);
    verificadorDuranteJogo(tabuleiroAtual,73);
    verificadorDuranteJogo(tabuleiroAtual,74);
    verificadorDuranteJogo(tabuleiroAtual,75);
    verificadorDuranteJogo(tabuleiroAtual,76);
    verificadorDuranteJogo(tabuleiroAtual,77);
    verificadorDuranteJogo(tabuleiroAtual,78);
    verificadorDuranteJogo(tabuleiroAtual,79);
    verificadorDuranteJogo(tabuleiroAtual,80);
    verificadorDuranteJogo(tabuleiroAtual,81);
}

function verificaFimDeJogo(tabuleiroAtual) {
    let ganhou = true;
    for (let i = 1; i <= 81; i++) {
        if (document.getElementById(i).value != tabuleiroAtual[i]) {
            ganhou = false;
        } else {};
    }
    if (ganhou) {
        exibeVitoria();
    }
}


function verificadorDuranteJogo(tabuleiroAtual, elemento) {
    let listaTabuleiro = converteTabuleiroemLista(tabuleiroAtual);
    document.getElementById(elemento).addEventListener('input', function() {
        const inputValue = document.getElementById(elemento).value;
        console.log(inputValue);
        if (inputValue != listaTabuleiro[elemento]) {
            document.getElementById(elemento).classList.add('error');
            erros++;
            document.getElementById('mostraErros').innerHTML = 'Número de erros:' + erros;
        } else {
            document.getElementById(elemento).classList.remove('error');
            verificaFimDeJogo(listaTabuleiro);
        }
    });
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
    console.log('ganhou');
    document.getElementById('nivelDoJogo').innerHTML = 'Você ganhou!';
    document.getElementById('tabuleiroGrande').remove();
    document.getElementById('botoesNum').remove();
    document.getElementById('loader').innerHTML = '<br><br>Muito bem!<br>Vamos adicionar seu nome no Ranking:<br><br><br><input type="text"></div><br><br><br><input type="button" value="Enviar" class="atualiza"><br><br><br>';
    
}

