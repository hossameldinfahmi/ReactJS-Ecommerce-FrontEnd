import "./App.css";
import Home from './pages/Home/Home'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./pages/Products/Products";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
    <>
    
    <Router>
      <Header />
        <Routes>
          <Route path='/' exact component={<Home />} />
          <Route path='/products'  element={<Products/>} />
          <Route path='/product/:id'>  </Route>
        </Routes>
      <Footer />

    </Router>

    </>
  );
}

export default App;
