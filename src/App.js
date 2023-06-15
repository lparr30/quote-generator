import './App.css';
import quotes from "./quotes"
import Card from "./components/Card"

let num = quotes[Math.floor(Math.random() * quotes.length)]

const generateQuote = () => {
  const newCard = document.getElementById("newCard")
  console.log(newCard);
}

function App() {
  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <button onClick={generateQuote}>New Quote</button>

      <Card id="newCard" quote={num.quote} name={num.name} />
    </div>
  );
}

export default App;

//quotes[Math.floor(Math.random() * quotes.length)]
//
