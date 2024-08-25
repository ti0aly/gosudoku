let tabuleiro = [[2, 4, 1, 3, 6, 7, 5, 8, 9], [5, 8, 6, 4, 1, 9, 3, 2, 7], [7, 9, 3, 2, 8, 5, 6, 1, 4], [8, 1, 2, 5, 7, 6, 9, 4, 3], [9, 5, 7, 1, 3, 4, 2, 6, 8], [3, 6, 4, 9, 2, 8, 7, 5, 1], [4, 7, 9, 8, 5, 2, 1, 3, 6], [6, 3, 5, 7, 4, 1, 8, 9, 2], [1, 2, 8, 6, 9, 3, 4, 7, 5]];

let listaOculta = Array;
document.getElementById('atualizaTabuleiroOculto1').addEventListener('click', () => {preencheCampoQuantidadeOculta(tabuleiro, geraListaRandomica(30)), document.getElementById('nivelDoJogo').innerHTML = 'Nível Moleza';});
document.getElementById('atualizaTabuleiroOculto2').addEventListener('click', () => {preencheCampoQuantidadeOculta(tabuleiro, geraListaRandomica(40)), document.getElementById('nivelDoJogo').innerHTML = 'Nível Fácil';});
document.getElementById('atualizaTabuleiroOculto3').addEventListener('click', () => {preencheCampoQuantidadeOculta(tabuleiro, geraListaRandomica(50)), document.getElementById('nivelDoJogo').innerHTML = 'Nível Médio';});
document.getElementById('atualizaTabuleiroOculto4').addEventListener('click', () => {preencheCampoQuantidadeOculta(tabuleiro, geraListaRandomica(58)), document.getElementById('nivelDoJogo').innerHTML = 'Nível Difícil';});
document.getElementById('atualizaTabuleiroOculto5').addEventListener('click', () => {preencheCampoQuantidadeOculta(tabuleiro, geraListaRandomica(65)), document.getElementById('nivelDoJogo').innerHTML = 'Nível Extremo';});


console.log(listaOculta); 


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