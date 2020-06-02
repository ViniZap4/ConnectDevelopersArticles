import React from 'react'; // importa o react
import ReactDOM from 'react-dom'; // importa o reactDom
import './index.css'; // importa o css 
import App from './App'; // importa o App
import * as serviceWorker from './serviceWorker'; // importa o serviceWorker

ReactDOM.render( // com o reactDom ele usa o metodo render que possui doi parametros o conteudo e o lugar
  <React.StrictMode>
    <App /> {/* aqui ele colocao a função App como conteudo para renderizar */}
  </React.StrictMode>, 
  document.getElementById('root') // aqui ele pega o ID 'root' do index.html e rendezida dentro dele
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
