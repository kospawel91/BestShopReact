import React from "react";
import priceList from "./priceOfertList";

const PlanList = ({ list }) => {
  console.log(list.map((el) => el.item));
  return (
    <ul className="pricing-list">
      {list.map((el, index) => {
        return (
          <li
            key={index}
            className={`lista ${
              el.isAvailable ? "checkmark-isNotAv" : "checkmark-isAv"
            }`}
          >
            {el.item}
          </li>
        );
      })}
    </ul>
  );
};

const priceListTemplate = priceList.map(
  ({ title, price, limitedOfert, list }) => {
    return (
      <div className={`${title} pricing__body`} key={title}>
        <div className="pricing__container">
          <div className="pricing-container">
            <div className="pricing-name">{title}</div>;
            <div className="pricing-tag">{price}</div>
            <div className="pricing-limited_ofert">{limitedOfert}</div>;
          </div>
          <PlanList list={list} />
        </div>
        <button className="pricing-button">Begin</button>;
      </div>
    );
  }
);

const PriceOfert = () => {
  return (
    <>
      <h1 className="pricing-title">Pricing</h1>
      {priceListTemplate}
    </>
  );
};

export default PriceOfert;
