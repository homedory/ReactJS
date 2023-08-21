import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => setCoins(json));
    setLoading(false);
  }, []);
  const onInput = (event) => setDollar(event.target.value);
  const onSelect = (event) => {
    setPrice(Number(event.target.value));    
  }
  return (
    <div>
       <h1>The Coins! {coins.length}</h1>
       <input onChange={onInput} value={dollar} type="number" placeholder="put $"/>
       {loading ? <strong>Loading...</strong> : null}
       <select value={price} onChange={onSelect}>
        {coins.map((coin) => (
          <option key={coin.id} 
          value={coin.quotes.USD.price} 
          id={coin.name}
          >
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
          </option>
        ))}  
       </select>
       <h2>
        You can buy {dollar /price} amount of coin.
       </h2>
    </div>
  );
}

export default App;
