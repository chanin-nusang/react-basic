import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import "./App.css";

function App() {
  const name = "Bangkok";
  const apiKey = "e1fc36ddcf872f56ea2e17f98561ac27";
  const [city, setCity] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCity(data);
        setIsLoading(true);
        console.log(isLoading);
      });
  }, []);
  const convertTemp = (k) => {
    return (k - 273).toFixed();
  };
  return !isLoading ? (
    <div className="loader">
      <Loader
        type="Puff"
        color="orange"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  ) : (
    <div className="App">
      <section>
        <div className="location">
          <h1 className="city">{city.name}</h1>
          <p className="state">{city.sys.country}</p>
        </div>
        <div className="card">
          <div className="weather">
            <h1>{convertTemp(city.main.temp)}&deg;C</h1>
            <small>
              max : {convertTemp(city.main.temp_max)}&deg;C , min :{" "}
              {convertTemp(city.main.temp_min)}&deg;C
            </small>
          </div>
          <div className="info">
            <div className="status">{city.weather[0].main}</div>
            <div className="humidity">Humidity = {city.main.humidity}</div>
            <div className="wind">Wind speed = {city.wind.speed}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
