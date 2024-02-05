import { useEffect, useState } from "react";
// https://api.coinpaprika.com/v1/tickers?limit=100
function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoinPrice, setSelectedCoinPrice] = useState(0);
  const [havePrice, setHavePrice] = useState(0)
  const [isCompleted, setCompleted] = useState(false);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onSelectChange = (event) => setSelectedCoinPrice(event.target.value);

  const onChange = (event) => setHavePrice(event.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    setCompleted(true);
    console.log(havePrice / selectedCoinPrice);
  };
  return (
    <div>
      <h1>Coin Tracker 앱 {coins.length}</h1>
      {loading ? <h3>LOADING</h3> : null}
      <form>
        <div>
          현재 당신이 가지고 있는 달러를 적으시오 : 
          <input
            value={havePrice}
            onChange={onChange}
            type="number"
            placeholder="$"
          ></input>
        </div>
        <select id="coin-tracker" name="coin-tracker" onChange={onSelectChange}>
          {coins.map((coin, index) => (
            <option value={coin.quotes.USD.price} key={index}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} $
            </option>
          ))}
        </select>
        {/* <div>
          <button type="submit" onClick={onSubmit}>
            코인 변환기
          </button>
        </div> */}
      </form>
        <div>
          당신이 가진 달라로는 {Math.round(havePrice / selectedCoinPrice)}개의 코인을 구매할 수 있습니다.
        </div> 
    </div>
  );
}

export default CoinTracker;
