import { useEffect, useState } from "react";
// https://api.coinpaprika.com/v1/tickers?limit=100
function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const test = "test";
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Coin Tracker 앱 {coins.length}</h1>
      {loading ? <h3>LOADING</h3> : null}
      <ul>
        {coins.map((coin, index) => <li key={index}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} $</li>)}
      </ul>
      <input type="text" placeholder="Coin Tracker" value={test} />

    </div>
  );
}

export default CoinTracker;
