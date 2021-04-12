import axios from 'axios';
import { useState } from 'react';
import './App.css';
import './Pure.css';

function App() {
  const [texto, setTexto] = useState('')
  const EnviarDados = () => {
  axios.post("http://localhost:3001/ae", {nome: texto}).then(() => {
    console.log("deu certo")
  })
  }
  return (
    <div>
      <input type="text" placeholder="o nome que tu quiser" value={texto} onChange={(e) => setTexto(e.target.value)} className="pure-input-1-2"></input>
      {/* <input type="text" placeholder="qualidade" value={qualidadeTexto} className="pure-input-1-2"></input>
      <input type="text" placeholder="digite sua idade" value={idadeTexto} className="inpure-input-1-2"></input> */}
      <button type="submit" onClick={EnviarDados} className="button-secondary">enviar</button>
    </div>
  )
}

export default App;
