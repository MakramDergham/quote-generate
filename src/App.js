import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [quote, setQuote] = useState({})

  function fetchQuote(){
    fetch('https://api.quotable.io/random')
   .then(response => response.json())
   .then(data => {console.log(data); setQuote(data)})
  }
  useEffect(() => {
    fetchQuote()
  }, [])
  return (
    <div className="card">
    <h1>"{quote.content}"</h1>
    <h2>{quote.author}</h2>
    <button className="generate-btn" onClick = {fetchQuote}>Generate</button>
    </div>
  );
}

export default App;
