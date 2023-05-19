/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './ProductData.css';
function ProductData(props) {
  const imageUrl = process.env.REACT_APP_IMGE_API_URL;
  console.log(props);
  return (
    <div className="card">
      <img className="product--image" src={imageUrl + props.image} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price"> price: ${parseFloat(props.price)}</p>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
}

export default ProductData;