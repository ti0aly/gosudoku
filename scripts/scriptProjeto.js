function loadCabecalhoeRodape() {
    fetch('https://ti0aly.github.io/gosudoku/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('cabecalho').innerHTML = data;
            document.getElementById('menuProjeto').classList.add('pagina-atual');
        });

        fetch('https://ti0aly.github.io/gosudoku/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('rodape').innerHTML = data);
}

window.onload = loadCabecalhoeRodape;