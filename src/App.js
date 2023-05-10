import "./App.css";
import Home from './pages/Home/Home'
import Footer from "./components/Footer/Footer";
import NavBar from './components/NavbarMenu/NavbarMenu'
import Products from "./pages/Products/Products";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    
    <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products'  element={<Products/>} />
          <Route path='/product/:id'>  </Route>
        </Routes>
      <Footer />

    </Router>

    </>
  );
}

export default App;
