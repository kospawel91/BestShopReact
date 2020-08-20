import React from 'react';
import SmallBanerComponent from './SmallBanerComponent';
import SmallBaner from './SmallBanerComponent';

const items = [
  {
    id: "mac",
    imageUrl: "/img/Macbook.png",
    title: "Be always first",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    klas:"square"    
    },
  {
    id: "phone",
    imageUrl: "/img/iPhone.png",
    title: "Your shop is where you are!",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      klas:"circle"
  },
  {
    id: "trumpet",
    imageUrl: "/img/Trumpet.png",
    title: "Increase recognition your brand!!",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    klas:"block"
  },
];

const SmallBanners = () => {
    return (
      <section className="smallBanners" id="section2">
        <SmallBaner items={items} />
      </section>
    );
};

export default SmallBanners;