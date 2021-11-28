import { useEffect, useState } from "react";
import "./App.css";
import CurrencyComponent from "./components/CurrencyComponent";
import money from "./img/money.png";

function App() {
  const url =
    "https://v6.exchangerate-api.com/v6/d6e50ec357486dde9f60b2b0/latest/USD";
  const [currencyChoice, setCurrencyChoice] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setCurrencyChoice([...Object.keys(data.conversion_rates)])
      );
  });
  return (
    <div>
      <img src={money} alt="logo" className="money-img"></img>
      <h1>เครื่องมือแปลงสกุลเงิน</h1>
      <div className="container">
        <CurrencyComponent />
        <div className="equal"> = </div>
        <CurrencyComponent />
      </div>
    </div>
  );
}

export default App;
