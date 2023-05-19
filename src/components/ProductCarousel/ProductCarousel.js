import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProductCarousel.css';
import ProductData from "../ProductData/ProductData";
import {ProductSlice , responsive} from "../ProductSlice/ProductSlice";

function ProductCarousel() {
    const products = ProductSlice();
    const product = products.map((item) => (
        <ProductData
          name={item.name}
          image={item.image}
          price={item.price}
          description={item.description}
        />
      ));
      console.log(products);
    
      return (
        <div className="App">
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