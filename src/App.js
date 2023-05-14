import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavbarMenu/NavbarMenu";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "./pages/Registration/RegistrationForm";

import Login from "./pages/Login/Login";
import UserProfile from "./pages/UserProfile/UserProfile";
import MyOrders from "./pages/MyOrders/MyOrders";

function App() {

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
          <Route path="/cart" element={<Cart />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<MyOrders />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
