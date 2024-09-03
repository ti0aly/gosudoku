// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase, get, ref, update, push} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCRqKH9m9y2E7Cp1518WZt3WLryafoebPQ",
  authDomain: "bd-sudoku.firebaseapp.com",
  databaseURL: "https://bd-sudoku-default-rtdb.firebaseio.com",
  projectId: "bd-sudoku",
  storageBucket: "bd-sudoku.appspot.com",
  messagingSenderId: "545448621634",
  appId: "1:545448621634:web:821376de1542931ed3dfdb",
  measurementId: "G-PB2B8PBNBJ"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const nodeTabuleiros = ref(database, '/tabuleiros/');
const rankingMoleza = ref(database, '/ranking/moleza/');
const rankingFacil = ref(database, '/ranking/facil/');
const rankingMedio = ref(database, '/ranking/medio/');
const rankingDificil = ref(database, '/ranking/dificil/');
const rankingExtremo = ref(database, '/ranking/extremo/');

export async function consultaTabuleiroAleatorio() {
  try {
      const snapshot = await get(nodeTabuleiros);
      if (snapshot.exists()) {
          const data = snapshot.val();
          const keys = Object.keys(data);
          const randomKey = keys[Math.floor(Math.random() * keys.length)];
          const entradaAleatoria = data[randomKey];
          return [entradaAleatoria, randomKey];
      } else {
          console.log('Nenhum dado disponível');
          return null;
      }
  } catch (error) {
      console.error('Erro ao consultar os dados:', error);
      return null;
  }
}

export async function consultaRankings() {
  try {
      const moleza = await get(rankingMoleza);
      const facil = await get(rankingFacil);
      const medio = await get(rankingMedio);
      const dificil = await get(rankingDificil);
      const extremo = await get(rankingExtremo);

      const dataMoleza = moleza.val();
      const dataFacil = facil.val();
      const dataMedio = medio.val();
      const dataDificil = dificil.val();
      const dataExtremo = extremo.val();
      
      let valoresMolezaLista = Array;
      let valoresFacilLista = Array;
      let valoresMedioLista = Array;
      let valoresDificilLista = Array;
      let valoresExtremoLista = Array;

      valoresMolezaLista = Object.keys(dataMoleza);
      valoresFacilLista = Object.keys(dataFacil);
      valoresMedioLista = Object.keys(dataMedio);
      valoresDificilLista = Object.keys(dataDificil);
      valoresExtremoLista = Object.keys(dataExtremo);

      let valoresMoleza = [];
      let valoresFacil = [];
      let valoresMedio = [];
      let valoresDificil = [];
      let valoresExtremo = [];

      for (const chave of valoresMolezaLista) {
        valoresMoleza.push(dataMoleza[chave]);
      }
      for (const chave of valoresFacilLista) {
        valoresFacil.push(dataFacil[chave]);
      }
      for (const chave of valoresMedioLista) {
        valoresMedio.push(dataMedio[chave]);
      }

      for (const chave of valoresDificilLista) {
        valoresFacil.push(dataDificil[chave]);
      }

      for (const chave of valoresExtremoLista) {
        valoresExtremo.push(dataExtremo[chave]);
      }
      
      return [valoresMoleza, valoresFacil, valoresMedio, valoresDificil, valoresExtremo];
  } catch (error) {
      console.error('Erro ao consultar os dados de ranking.', error);
      return null;
  }
}

export async function consultaTamanhoDados(nodePassadoParaConsulta) {
  try {
      const snapshot = await get(nodePassadoParaConsulta);
      
      if (snapshot.exists()) {
          const data = snapshot.val();
          const keys = Object.keys(data);
          const tabuleirosKey = keys;
          return tabuleirosKey.length
      } else {
          console.log('Nenhum dado disponível');
          return null;
      }
  } catch (error) {
      console.error('Erro ao consultar os dados:', error);
      return null;
  }
}

export async function salvaDados(dados) {
  const tamanho = await consultaTamanhoDados(nodeTabuleiros);
  console.log('tamanho do bd: ', tamanho);
  const dadosParaAtualizar = {
    [tamanho] : dados
};
  return update(nodeTabuleiros, dadosParaAtualizar)
      .then(() => {
          console.log('Dados salvos com sucesso!');
          document.getElementById('salvaTabuleiro').textContent = ('Obrigado! Você adicionou este tabuleiro ao nosso banco de dados. Já temos ' + tamanho + ' tabuleiros salvos pelos usuários.');
      })
      .catch((error) => {
          console.error('Erro ao salvar dados:', error);
      });
}

export async function salvarDadosRanking(nome, tempo, erros, nivel) {
  let nodeDoRanking;
  switch (nivel) {
    case 1:
      nodeDoRanking = rankingMoleza;
      break;
    case 2:
      nodeDoRanking = rankingFacil;
      break;
    case 3:
      nodeDoRanking = rankingMedio;
      break;
    case 4:
      nodeDoRanking = rankingDificil;
      break;
    case 5:
      nodeDoRanking = rankingExtremo;
    default:
      console.log('Erro ao selecionar ranking.');
  }
  let tamanho = await consultaTamanhoDados(nodeDoRanking);
  if (tamanho === null) {
    tamanho = 0;
  }
  const dadosJogador = {
    'nome' : nome,
    'tempo': tempo,
    'erros' : erros,
    'nivel' : nivel
  };
  const dadosParaAtualizar = {
    [tamanho + 1] : dadosJogador
    
  };

return update(nodeDoRanking, dadosParaAtualizar)
      .then(() => {
          console.log('Dados salvos com sucesso!');
      })
      .catch((error) => {
          console.error('Erro ao salvar dados:', error);
      });  
}