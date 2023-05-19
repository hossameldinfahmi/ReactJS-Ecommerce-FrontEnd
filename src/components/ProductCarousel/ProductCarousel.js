import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import ProductData from "../ProductData/ProductData";
import {ProductSlicing , responsive} from "../ProductSlice/ProductSlice";
import { useState } from 'react';


function ProductCarousel() {
  const products = ProductSlicing();
  const [currentIndex, setCurrentIndex] = useState(0);


  const product = products.map((item) => (
    <ProductData
      key = {item.id}
      name={item.name}
      image={item.image}
      price={item.price}
      description={item.description}
    />
  ));

  const handleBeforeChange = (previousIndex, nextIndex) => {
    if (nextIndex === product.length - 1) {
      setTimeout(() => {
        setCurrentIndex(0);
      }, 3000);
    } else {
      setCurrentIndex(nextIndex);
    }
  };
 return (
  <div style={{margin: '2rem 0'}}>
    <div style={{fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem', color: '#1a202c', textTransform: 'uppercase', letterSpacing: '2px'}}>
      <h1 style={{fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '2rem', color: '#1a202c', textTransform: 'uppercase', letterSpacing: '2px'}}>Best Products We Have</h1>
      <p style={{textAlign: 'center', fontSize: '18px', marginBottom: '2rem', color: '#6b7280'}}>Discover our top-selling products and find your new favorites.</p>
    </div>
    <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: '3rem'}}>
      <Carousel
        showDots={true}
        responsive={responsive}
        style={{border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        beforeChange={handleBeforeChange}
      >
        {product}
      </Carousel>
    </div>
  </div>
);
}

export default ProductCarousel;