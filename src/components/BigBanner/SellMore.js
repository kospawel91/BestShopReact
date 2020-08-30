import React from 'react';
import BigBannerBtn from "./BigBannerBtn";

const SellMore = ({sellmore}) => {
    return (
      <div className="banner--sellmore">
        <h1 className="banner--title">{sellmore}</h1>
        <p className="banner--text">
          Open shop on our platform and increase your sales
        </p>
        <BigBannerBtn />
      </div>
    );};

export default SellMore;