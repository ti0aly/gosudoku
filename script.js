const tabuleiro = [[8, 6, 9, 2, 7, 5, 3, 4, 1],[2, 5, 4, 8, 3, 1, 6, 9, 7],
[7, 1, 3, 6, 4, 9, 2, 8, 5],[5, 3, 1, 7, 8, 6, 9, 2, 4],[9, 7, 6, 4, 5, 2, 1, 3, 8],[4, 8, 2, 1, 9, 3, 7, 5, 6],[3, 9, 7, 5, 6, 8, 4, 1, 2],[1, 4, 8, 9, 2, 7, 5, 6, 3],[6, 2, 5, 3, 1, 4, 8, 7, 9]];

preencheCampo(tabuleiro);

document.getElementById('atualizaTabuleiro').addEventListener('click', () => {trocaTabuleiro()});

function trocaTabuleiro() {
    const novo = [[8, 3, 4, 2, 6, 5, 7, 1, 9], [6, 5, 1, 9, 7, 3, 8, 4, 2], [2, 7, 9, 8, 4, 1, 3, 5, 6], [1, 6, 3, 5, 2, 9, 4, 8, 7], [5, 8, 2, 4, 1, 7, 9, 6, 3], [9, 4, 7, 3, 8, 6, 5, 2, 1], [3, 1, 8, 7, 5, 2, 6, 9, 4], [7, 2, 5, 6, 9, 4, 1, 3, 8], [4, 9, 6, 1, 3, 8, 2, 7, 5]];
    preencheCampo(novo);
}

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

function autor() {
    var div = document.getElementById("conteudoPagina");
    div.innerHTML = "<h1>Alysson</h1> <p>Este projeto começou Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repudiandae unde nemo aut ex beatae optio nisi nulla id quisquam ducimus dolore mollitia cum, eum consequatur modi obcaecati, cumque exercitationem?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores temporibus excepturi! Reiciendis molestias nisi nulla officia corrupti deleniti fuga quisquam. Velit dolores repudiandae aspernatur fuga? Fugit porro magni sed.</p>";
}