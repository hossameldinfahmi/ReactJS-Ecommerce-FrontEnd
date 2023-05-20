import { addItemToCart } from "../../store/cart/cart-actions";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ProductData.css";

function ProductData(props) {
  const imageUrl = process.env.REACT_APP_IMGE_API_URL;
  const productId = { id: props.id };

  const [isAddLoad, setIsAddLoad] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  const addToCart = () => {
    setIsAddLoad(true);
    dispatch(addItemToCart(productId)).then(() => {
      setIsAddLoad(false);
      setIsAdded(true);
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    });
  };

  return (
    <div className="card">
      <img className="product--image" src={imageUrl + props.image} alt="product image" />
      <h2 style={{maxHeight:'30px' , overflow:'hidden'}} >{props.name}</h2>
      <p className="price--data"> Price:  ${parseFloat(props.price)}</p>
      <p style={{color:'#333' ,maxHeight:'100px' , overflow:'hidden'}}>{props.description}</p>
      <p style={{fontWeight:'bold'}}>...</p>
      <Link className="link--link" to={`/product/${props.id}`}>
        Details
      </Link>
      <p>
        <button onClick={addToCart} className={isAddLoad ? "adding" : ""}>
          {isAddLoad ? "Adding..." : "Add to Cart"}
        </button>
        {isAdded && <span className="confirmation">Added to cart!</span>}
      </p>
    </div>
  );
}

export default ProductData;
