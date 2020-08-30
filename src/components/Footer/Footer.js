import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__logo">
          <div className="footer__logo-logo">BestShop</div>
          <p>&copy;2019 BestShop LTD, All Rights Reserved</p>
        </div>
        <div className="footer__media">
          <img src="/img/Twitter.svg" alt="tweeter" />
          <img src="/img/Facebook.svg" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
