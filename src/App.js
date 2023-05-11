import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavbarMenu/NavbarMenu";
import Products from "./pages/Products/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "./pages/Registration/RegistrationForm";
import { fetchProducts } from "./store/products/products-actions";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import PricingCards from "./components/Static/PricingCard/PricingCard";
import PartnarsCards from "./components/Static/PartnarsCards/PartnarsCards";
import BannarSection from "./components/Static/BannarSection/BannarSection";
import SlideCards from "./components/Static/SlideCards/SlideCards";
import ProductCard from "./components/Static/ProductCard/ProductCard";
import UserProfile from "./pages/UserProfile/UserProfile";
function App() {
  console.log("first");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />

      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id"> </Route>
          <Route path="/registration" element={<RegistrationForm />} />
        </Routes>

        <BannarSection />

        <SlideCards />
        <PricingCards />

        <ProductCard />
        <PartnarsCards />

        <UserProfile />

        <Footer />
      </Router>
    </>
  );
}

export default App;
