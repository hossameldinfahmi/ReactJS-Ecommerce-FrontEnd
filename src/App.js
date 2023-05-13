import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavbarMenu/NavbarMenu";
import Products from "./pages/Products/Products";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "./pages/Registration/RegistrationForm";

import { fetchProducts } from "./store/products/products-actions";
import Login from "./pages/Login/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
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
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
