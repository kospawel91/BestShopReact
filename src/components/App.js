import React from "react";
import Header from './Nav/Header'
import BigBanner from './BigBanner/BigBanner'
import MostSales from "./MostSales/MostSales";
import SmallBanners from "./SmallBanners/SmallBanners";
import Pricing from "./Pricing/Pricing";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";

export default class App extends React.Component {
  
  render() {
    return (
      <>
        <Header />
        <BigBanner />
        <MostSales />
        <SmallBanners/>
        <Pricing/>
        <Form/>
        <Footer/>
      </>
    );
  }
}

