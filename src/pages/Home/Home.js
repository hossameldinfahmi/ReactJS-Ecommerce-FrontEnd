import React, { Fragment } from "react";
import Carousel from "../../components/Carousel/Carousel";

import PricingCards from "../../components/Static/PricingCard/PricingCard";
import PartnarsCards from "../../components/Static/PartnarsCards/PartnarsCards";
import BannarSection from "../../components/Static/BannarSection/BannarSection";
import SlideCards from "../../components/Static/SlideCards/SlideCards";
import ProductCard from "../../components/Static/ProductCard/ProductCard";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

import { fetchUserData } from "../../store/authSlice/login";
import { useEffect } from "react";
import { fetchCartItems } from "../../store/cart/cart-actions";
import { useDispatch } from "react-redux";

const Home = () => {
  let accessToken = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchUserData());
      dispatch(fetchCartItems());
    }
  }, [dispatch, accessToken]);

  return (
    <Fragment>
      <Carousel />
      <BannarSection />
      <ProductCarousel />
      <ProductCard />

      <SlideCards />
      {/* <PricingCards /> */}

      <PartnarsCards />
    </Fragment>
  );
};

export default Home;
