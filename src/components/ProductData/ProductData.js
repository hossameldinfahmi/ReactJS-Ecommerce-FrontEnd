/* eslint-disable jsx-a11y/img-redundant-alt */
import { addItemToCart } from '../../store/cart/cart-actions';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './ProductData.css';

function ProductData(props) {
  const imageUrl = process.env.REACT_APP_IMGE_API_URL;
  const productId = {id:props.id};

  const [isAddLoad , setIsAddLoad] = useState(false);

  const dispatch = useDispatch();

// console.log(productId);
  const addToCart = () => {
    setIsAddLoad(true)
    dispatch(addItemToCart(productId)).then(()=> {setIsAddLoad(false)})
  }

  return (
    <div className="card">
      <img className="product--image" src={imageUrl + props.image} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price--data"> price: ${parseFloat(props.price)}</p>
      <p>{props.description}</p>
      <p style={{fontWeight:'bold'}}>...</p>
      <Link to={`/product/${props.id}`}>
        Details
      </Link>
      <p>
        <button onClick={addToCart} className={isAddLoad ? 'adding' : ''}>
          {isAddLoad ? 'Adding...' : 'Add to Cart          '}
        </button>
      </p>
    </div>
  );
}

export default ProductData;