import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./component.product.css";

const ProductComponent = () => {
  const [data, setData] = useState([]);

  // Inside your component
  const { id: productId } = useParams();

  useEffect(() => {
    // Axios call to fetch data

    axios
      .get(`http://localhost:8000/product?id=${productId}`)
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
      <figure className="product">
        {/* <div
          className={`product__organic ${!data.organic ? "not-organic" : ""}`}
        >
          <h5>Organic</h5>
        </div> */}
        <a href="/" className="product__back">
          <span className="emoji-left">👈</span>Back
        </a>
        <div className="card__emoji">{data.image}</div>
        <figcaption className="product__info">
          <h2 className="product__name">{data.productName}</h2>
          <h3 className="product__from">From {data.from}</h3>
          <p className="product__description">{data.description}</p>
          <h3 className="product__price">Only {data.price} 💰</h3>
          <p className="product__price-value">{data.quantity} in stock</p>
          <h3 className="product__nutrients">{data.nutrients}</h3>
        </figcaption>
      </figure>
    </div>
  );
};

export default ProductComponent;
