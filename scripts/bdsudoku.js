// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getDatabase, get, ref, update, push} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js';


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
const db = getFirestore(app); 
const rootRef = ref(database, '/');

export async function consultaTabuleiroAleatorio() {
  try {
      const snapshot = await get(rootRef);
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

export async function consultaTamanhoDados() {
  try {
      const snapshot = await get(rootRef);
      
      if (snapshot.exists()) {
          const data = snapshot.val();
          const keys = Object.keys(data);
          const tabuleirosKey = keys[0];
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
  const dadosParaAtualizar = {
    0 : {
      1 : dados
  }
};
  return push(rootRef, dadosParaAtualizar)
  //return update(rootRef, dadosParaAtualizar) 
      .then(() => {
          console.log('Dados salvos com sucesso!');
          document.getElementById('salvaTabuleiro').textContent = ('Obrigado! Você adicionou este tabuleiro ao banco de dados.');
      })
      .catch((error) => {
          console.error('Erro ao salvar dados:', error);
      });
}

export async function salvarDadosRanking(nomePlayer, tempoPlayer) {
  try {
      console.log('nome: ', nomePlayer);
      console.log('tempo: ', tempoPlayer);
      const docRef = doc(db, 'nivelMoleza', 'teste');
      console.log('docRef: ', docRef);
      await setDoc(docRef, 
        {
          Nome: nomePlayer,
          erros: 44,
          nivel: "Moleza",
          tempo: tempoPlayer
      }
    );

      console.log('Dados salvos com sucesso!');
  } catch (error) {
      console.error('Erro ao salvar dados:', error);
  }
}