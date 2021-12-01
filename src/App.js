import { useEffect, useState } from "react";
import "./App.css";
import FoodComponent from "./components/FoodComnponent";
import MenuData from "./data/MenuData";
function App() {
  const [foodData, setFoodData] = useState(MenuData);
  const [dataInPage, setDataInPage] = useState([]);
  const [page, setPage] = useState(0);
  const pagination = () => {
    const foodPerPage = 1;
    const pages = Math.ceil(MenuData.length / foodPerPage);
    const newFoods = Array.from({ length: pages }, (data, index) => {
      const start = index * foodPerPage;
      return MenuData.slice(start, start + foodPerPage);
    });
    return newFoods;
  };
  useEffect(() => {
    const paginate = pagination();
    setDataInPage(paginate);
    setFoodData(paginate[page]);
  }, [page]);
  const handlePage = (index) => {
    setPage(index);
  };
  return (
    <div className="App">
      <h1>Food Card | Pagination</h1>
      <div className="container">
        {foodData.map((data, index) => {
          return <FoodComponent key={index} {...data} />;
        })}
      </div>
      <div className="pagination-container">
        {dataInPage.map((data, index) => {
          return (
            <button
              className={`page-btn ${index === page ? "active-btn" : null}`}
              key={index}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
