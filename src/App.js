import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Member from "./components/page/Member";
import Product from "./components/page/Product";
import Admin from "./components/page/Admin";
import Home from "./components/page/Home";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/member" element={<Member />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
