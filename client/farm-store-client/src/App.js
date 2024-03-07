import "./App.css";
import OverviewPage from "./components/component.overview";
import { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./components/component.product";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Axios call to fetch data
    axios
      .get("http://localhost:8000/api")
      .then((response) => {
        setData(response.data);
        console.log(typeof response.data);
        console.log("Response:", response.data); // Log the response data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/product/:id" element={<ProductPage />} data={data} />
      </Routes>
    </Router>
  );
}

export default App;
