import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavbarMenu/NavbarMenu";
import Products from "./pages/Products/Products";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "./pages/Registration/RegistrationForm";

function App() {
  return (
    <>
          <ToastContainer />
      <Router>
        <NavBar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id"> </Route>
        </Routes>
        <RegistrationForm />
        <Footer />
      </Router>
    </>
  );
}

export default App;
