// Inside component.overview.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./component.overview.css";
import TemplateCard from "./component.card";

const TemplateOverview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Axios call to fetch data
    axios
      .get("http://localhost:8000/api")
      .then((response) => {
        setData(response.data);
        console.log("Response:", response.data); // Log the response data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>🌽 Node Farm 🥦</h1>
      {/* Map over the data array and render a TemplateCard for each item */}
      <div className="cards-container">
        {data.map((item) => (
          <TemplateCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default TemplateOverview;
