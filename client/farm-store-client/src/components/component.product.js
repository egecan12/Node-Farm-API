import React, { Fragment } from "react";

const ProductPage = ({
  organic,
  image,
  description,
  price,
  quantity,
  nutrients,
  from,
  productName,
}) => {
  return (
    <Fragment>
      <h1>🌽 Node Farm 🥦</h1>

      <figure className="product">
        <div className={`product__organic ${!organic ? "not-organic" : ""}`}>
          <h5>Organic</h5>
        </div>
        <a href="/overview" className="product__back">
          <span className="emoji-left">👈</span>Back
        </a>
        <div className="product__hero">
          <span className="product__emoji product__emoji--1">{image}</span>
          <span className="product__emoji product__emoji--2">{image}</span>
          <span className="product__emoji product__emoji--3">{image}</span>
          <span className="product__emoji product__emoji--4">{image}</span>
          <span className="product__emoji product__emoji--5">{image}</span>
          <span className="product__emoji product__emoji--6">{image}</span>
          <span className="product__emoji product__emoji--7">{image}</span>
          <span className="product__emoji product__emoji--8">{image}</span>
          <span className="product__emoji product__emoji--9">{image}</span>
        </div>
        <h2 className="product__name">{productName}</h2>
        <div className="product__details">
          <p>
            <span className="emoji-left">🌍</span>From {from}
          </p>
          <p>
            <span className="emoji-left">❤️</span>
            {nutrients}
          </p>
          <p>
            <span className="emoji-left">📦</span>
            {quantity}
          </p>
          <p>
            <span className="emoji-left">🏷</span>
            {price}€
          </p>
        </div>

        <a href="#" className="product__link">
          <span className="emoji-left">🛒</span>
          <span>Add to shopping card ({price}€)</span>
        </a>

        <p className="product__description">{description}</p>
      </figure>
    </Fragment>
  );
};

export default ProductPage;
