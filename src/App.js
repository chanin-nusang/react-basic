import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [word, setWord] = useState("");
  const [dataFilter] = useState(["name", "capital"]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  const searchCountries = (countries) => {
    return countries.filter((item) => {
      if (
        typeof item === "undefined" ||
        item == null ||
        typeof item.name === "undefined" ||
        typeof item.capital === "undefined"
      ) {
        return false;
      } else {
        return dataFilter.some((filter) => {
          console.log(item[filter]);
          return (
            item[filter].toString().toLowerCase().indexOf(word.toLowerCase()) >
            -1
          );
        });
      }
    });
  };
  return (
    <div className="container">
      <div className="search-container">
        <label htmlFor="search-form">
          <input
            type="text"
            className="search-input"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="ระบุชื่อประเทศหรือชื่อเมืองหลวงที่ต้องการข้อมูล"
          ></input>
        </label>
      </div>
      <ul className="row">
        {searchCountries(countries).map((item, index) => {
          return (
            <li key={index}>
              <div className="card">
                <div className="card-title">
                  <img src={item.flags.png} alt={item.name} />
                </div>
                <div className="card-body">
                  <div className="card-description">
                    <h2>{item.name}</h2>
                    <ol className="card-list">
                      <li>
                        ประชากร :{" "}
                        <span>{formatNumber(item.population)} คน</span>
                      </li>
                      <li>
                        ภูมิภาค : <span>{item.region}</span>
                      </li>
                      <li>
                        เมืองหลวง : <span>{item.capital}</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
