import { useEffect, useState } from "react";
import "./App.css";
import CurrencyComponent from "./components/CurrencyComponent";
import money from "./img/money.png";

function App() {
  const [currencyChoice, setCurrencyChoice] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("THB");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [checkFromCurrency, setCheckFromCurrency] = useState(true);
  let fromAmount, toAmount;
  if (checkFromCurrency) {
    fromAmount = amount;
    toAmount = (amount * exchangeRate).toFixed(2);
  } else {
    toAmount = amount;
    fromAmount = (amount / exchangeRate).toFixed(2);
  }
  useEffect(() => {
    const url = `https://v6.exchangerate-api.com/v6/33e2b76cccd4658e7d0f30a8/latest/${fromCurrency}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyChoice([...Object.keys(data.conversion_rates)]);
        setExchangeRate(data.conversion_rates[toCurrency]);
      });
  }, [fromCurrency, toCurrency]);
  const amountFromCurrency = (e) => {
    setAmount(e.target.value);
    setCheckFromCurrency(true);
  };
  const amountToCurrency = (e) => {
    setAmount(e.target.value);
    setCheckFromCurrency(false);
  };
  return (
    <div>
      <img src={money} alt="logo" className="money-img"></img>
      <h1>เครื่องมือแปลงสกุลเงิน</h1>
      <div className="container">
        <CurrencyComponent
          currencyChoice={currencyChoice}
          selectCurrency={fromCurrency}
          changeCurrency={(e) => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={amountFromCurrency}
        />
        <div className="equal"> = </div>
        <CurrencyComponent
          currencyChoice={currencyChoice}
          selectCurrency={toCurrency}
          changeCurrency={(e) => setToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={amountToCurrency}
        />
      </div>
    </div>
  );
}

export default App;
