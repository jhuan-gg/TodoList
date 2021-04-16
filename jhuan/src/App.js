import axios from 'axios';
import { useState } from 'react';
import './App.css';
import './Pure.css';

function App() {
  const [texto, setTexto] = useState('')
  const [qualidadeTexto, setQualidadeTexto] = useState('')
  const [idadeTexto, setIdadeTexto] = useState('')
  const EnviarDados = () => {
  axios.post("http://localhost:3001/ae", {idade: idadeTexto, qualidade: qualidadeTexto, nome: texto}).then(() => {
    console.log("deu certo")
  })
  }
  return (
    <div>
      <input type="text" placeholder="o nome que tu quiser" value={texto} onChange={(e) => setTexto(e.target.value)} className="pure-input-1-2"></input>
      <input type="text" placeholder="qualidade" value={qualidadeTexto} onChange={(e) => setQualidadeTexto(e.target.value)} className="pure-input-1-2"></input>
      <input type="text" placeholder="digite sua idade" value={idadeTexto} onChange={(e) => setIdadeTexto(e.target.value)} className="inpure-input-1-2"></input>
      <button type="submit" onClick={EnviarDados} className="button-secondary">enviar</button>
    </div>
  )
}

export default App;