import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import ProductData from "../ProductData/ProductData";
import {ProductSlicing , responsive} from "../ProductSlice/ProductSlice";

import './ProductCarousel.css';

function ProductCarousel() {
    const products = ProductSlicing();

    const product = products.map((item) => (
        <ProductData
          key = {item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          description={item.description}
        />
      ));
      console.log(product);
    
      return (
        <div className="main">
          <div className="header">
            <h1>Best Products We Have</h1>
            <p>Discover our top-selling products and find your new favorites.</p>
          </div>
          <div className="carousel-container">
          <Carousel showDots={true} responsive={responsive}>
                {product}
            </Carousel>
          </div>
        </div>
      );
}

export default ProductCarousel;