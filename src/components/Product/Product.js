import React, {useState} from "react";
import { Link } from "react-router-dom";
import { addItemToCart } from "../../store/cart/cart-actions";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
 

const Product = ({id, category, name, description, price, available_quatity, image}) =>{

  const [isAnimating, setIsAnimating] = useState(false);

  const dispatch = useDispatch();

  const imageUrl = process.env.REACT_APP_IMGE_API_URL
  const product = {id}

  const addToCart = () => {
    dispatch(addItemToCart(product))
  }

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  };

  return(
    <>
    <div>
      <img src={imageUrl+image} 
        
        alt="product"
        />
    </div>

      <div >
        <button onClick={handleClick}>
          {
            isAnimating ? 
            (<FontAwesomeIcon icon={faHeart} beat size="2xl" />):
            (<FontAwesomeIcon icon={faHeart}  size="2xl" />)
          }
        </button>

        <h3 className="text-xl tracking-tight text-slate-900">{name}</h3>
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
