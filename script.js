



function autor() {
    var div = document.getElementById("conteudoPagina");
    div.innerHTML = '<h1>Alysson</h1> <p>Nascido em Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repudiandae unde nemo aut ex beatae optio nisi nulla id quisquam ducimus dolore mollitia cum, eum consequatur modi obcaecati, cumque exercitationem?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores temporibus excepturi! Reiciendis molestias nisi nulla officia corrupti deleniti fuga quisquam. Velit dolores repudiandae aspernatur fuga? Fugit porro magni sed.</p>';
}

function projeto() {
    console.log('chamou o projeto');
    fetch('https://ti0aly.github.io/gosudoku/projeto.html')
    .then(response => response.text())
    .then(data => {
      // Cria um DOMParser para extrair o conteúdo do <main>
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const mainContent = doc.querySelector('main').innerHTML;
    
      // Insere o conteúdo no main atual
      document.getElementById('conteudoPagina').innerHTML = mainContent;
    })
    .catch(error => console.error('Erro ao carregar o conteúdo:', error));
}

function ranking() {
    var div = document.getElementById("conteudoPagina");
    div.innerHTML = '<h1>Ranking</h1> <p>Veja aqui quem são os melhores do mundo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repudiandae unde nemo aut ex beatae optio nisi nulla id quisquam ducimus dolore mollitia cum, eum consequatur modi obcaecati, cumque exercitationem?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores temporibus excepturi! Reiciendis molestias nisi nulla officia corrupti deleniti fuga quisquam. Velit dolores repudiandae aspernatur fuga? Fugit porro magni sed.</p>';
}

function jogar() {
    console.log('chamou o jogo');
    fetch('https://ti0aly.github.io/gosudoku/jogo.html')
    .then(response => response.text())
    .then(data => {
      // Cria um DOMParser para extrair o conteúdo do <main>
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const mainContent = doc.querySelector('main').innerHTML;
    
      // Insere o conteúdo no main atual
      document.getElementById('conteudoPagina').innerHTML = mainContent;
    })
    .catch(error => console.error('Erro ao carregar o conteúdo:', error));
}

