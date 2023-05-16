import React from "react";
import { Link } from "react-router-dom";
import { addItemToCart } from "../../store/cart/cart-actions";
import { useDispatch } from "react-redux";
 

const Product = ({id, category, name, description, price, available_quatity, image}) =>{

  const dispatch = useDispatch();

  const imageUrl = process.env.REACT_APP_IMGE_API_URL
  const product = {id}

  const addToCart = () => {
    dispatch(addItemToCart(product))
  }

  return(
    <>
      <img src={imageUrl+image} 
      alt="product"
      />
      <div className="card-body">
        <h3>{name}</h3>
        <h3>{price}</h3>
        <h3>{description}</h3>
        <button onClick={addToCart}>Add to Cart</button>
        <br />
        <Link to={`/product/${id}`} className="btn">Details </Link>
      </div>



    </>
  )
  
}

export default Product;
