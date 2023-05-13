import React, { Fragment } from "react";
import Carousel from "../../components/Carousel/Carousel";

import PricingCards from "../../components/Static/PricingCard/PricingCard";
import PartnarsCards from "../../components/Static/PartnarsCards/PartnarsCards";
import BannarSection from "../../components/Static/BannarSection/BannarSection";
import SlideCards from "../../components/Static/SlideCards/SlideCards";
import ProductCard from "../../components/Static/ProductCard/ProductCard";

const Home = () => {
  return (
    <Fragment>
      <Carousel />
      <BannarSection />

      <SlideCards />
      <PricingCards />

      <ProductCard />
      <PartnarsCards />
    </Fragment>
  );
};

export default Home;
