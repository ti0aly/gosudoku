// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCRqKH9m9y2E7Cp1518WZt3WLryafoebPQ",
    authDomain: "bd-sudoku.firebaseapp.com",
    projectId: "bd-sudoku",
    storageBucket: "bd-sudoku.appspot.com",
    messagingSenderId: "545448621634",
    appId: "1:545448621634:web:821376de1542931ed3dfdb",
    measurementId: "G-PB2B8PBNBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Inicializar o Firebase Storage
const storage = getStorage();
const tabelaRef = ref(storage, 'arquivoCSV.csv');

console.log(tabelaRef);

// Obtém a URL de download do arquivo
getDownloadURL(tabelaRef)
  .then((url) => {
    console.log('URL gerada:', url);
    return fetch(url);  // Tente acessar a URL diretamente no navegador para testar
  })
  .then(response => response.text())
  .then(data => {
    console.log('Dados do arquivo:', data);
    const lines = data.split('\n');
    const specificLine = lines[1];
    console.log('Linha específica:', specificLine);
  })
  .catch((error) => {
    console.error('Erro ao processar o arquivo CSV:', error);
  });