import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useReducer, useState } from "react";
import FormComponent from "./components/FormComponent";
import Transection from "./components/Transection";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Title = () => (
  <h1 style={{ color: "red", textAlign: "center", fontSize: "1.5rem" }}>
    โปรแกรมบัญชีรายรับ - รายจ่าย
  </h1>
);

function App() {
  const initState = [
    { id: 1, title: "ค่ารักษาพยาบาล", amount: -2000 },
    { id: 2, title: "เงินเดือน", amount: 50000 },
    { id: 3, title: "ค่าเดินทาง", amount: -500 },
  ];
  const [items, setItems] = useState(initState);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(() => {
    const amounts = items.map((element) => element.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0)
      .toFixed(2);
    const expense = (
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0) * -1
    ).toFixed(2);
    setReportIncome(income);
    setReportExpense(expense);
  }, [items]);
  // const [showReport, setshowReport] = useState(false);
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SHOW":
  //       return setshowReport(true);
  //     case "HIDE":
  //       return setshowReport(false);
  //   }
  // };
  // const [result, dispatch] = useReducer(reducer, showReport);
  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <Title />
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" exact element={<ReportComponent />}></Route>
              <Route
                path="/insert"
                element={
                  <div>
                    <FormComponent onAddItem={onAddNewItem} />
                    <Transection items={items} />
                  </div>
                }
              ></Route>
            </Routes>
          </div>
        </Router>

        {/* <button onClick={() => dispatch({ type: "SHOW" })}>แสดง</button>
        <button onClick={() => dispatch({ type: "HIDE" })}>ซ่อน</button> */}
      </div>
    </DataContext.Provider>
  );
}

export default App;
