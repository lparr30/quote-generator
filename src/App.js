import './App.css';
import quotes from "./quotes";
import Card from "./components/Card";
import { useState } from 'react';


function App() {
  
  let num = quotes[Math.floor(Math.random() * quotes.length)];

  function GenerateQuote() {
    let newNum = quotes[Math.floor(Math.random() * quotes.length)];
    
    setNewCard(newNum);
    
    return(
      <Card quote={newNum.quote} name={newNum.name}/>
      )
    }
    
  const [newCard, setNewCard] = useState(num);
  
  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <button onClick={GenerateQuote}>Give me a new quote!</button>
      <Card quote={num.quote} name={num.name} />
    </div>
  );
}

export default App;
