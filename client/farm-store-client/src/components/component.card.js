import React, { Fragment } from "react";
import "./component.card.css";

const TemplateCard = ({ data }) => {
  return (
    <Fragment>
      {data && (
        <figure className="card">
          <div className="card__emoji">{data.image}</div>
          <div className="card__title-box">
            <h2 className="card__title">{data.productName}</h2>
          </div>

          <div
            className={`card__details ${
              data.organic ? "organic" : "not-organic"
            }`}
          >
            <div className="card__detail-box">
              <h6 className="card__detail card__detail--organic">
                {data.organic ? "Organic!" : "Not Organic"}
              </h6>
            </div>

            <div className="card__detail-box">
              <h6 className="card__detail">{data.quantity} per 📦</h6>
            </div>

            <div className="card__detail-box">
              <h6 className="card__detail card__detail--price">
                {data.price}€
              </h6>
            </div>
          </div>

          <a className="card__link" href={`/product?id=${data.id}`}>
            <span>
              Detail <i className="emoji-right">👉</i>
            </span>
          </a>
        </figure>
      )}
    </Fragment>
  );
};

export default TemplateCard;
