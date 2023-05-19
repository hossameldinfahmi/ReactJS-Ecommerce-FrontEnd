import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addItemToCart } from "../../store/cart/cart-actions";
import { addItemToWishlist } from "../../store/wishlist/wishlist-actions";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import classes from "./Product.module.css";

const Product = ({
  id,
  category,
  name,
  description,
  price,
  available_quantity,
  image,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const dispatch = useDispatch();

  const imageUrl = process.env.REACT_APP_IMGE_API_URL;
  const product = { id };

  const addToCart = () => {
    dispatch(addItemToCart(product));
  };

  const handleClick = () => {
    dispatch(addItemToWishlist(product));
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  };

  console.log(available_quantity);

  return (
    <>
      <div className={classes.imageIcon}>
        <div className={classes.icon}>
          <div className={classes.quantity}>{available_quantity}</div>

          <button onClick={handleClick}>
            {isAnimating ? (
              <FontAwesomeIcon
                icon={faHeart}
                beatFade
                size="lg"
                style={{ color: "rgb(59, 59, 61)" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faHeart}
                size="lg"
                style={{ color: "rgb(59, 59, 61)" }}
              />
            )}
          </button>
        </div>

        <div className={classes.image}>
          <img src={imageUrl + image} alt="product" />
        </div>
      </div>

      <div className={classes.cardBody}>
        <div className={classes.namePrice}>
          <h2 className="text-xl tracking-tight text-slate-900">{name}</h2>
          <span>${parseInt(price)}</span>
        </div>
        {/* <p>{category}</p> */}
        <div className={classes.prodDesc}>
          <p>{description}</p>
        </div>

        <div className={classes.buttons}>
          <button onClick={addToCart}>Buy Now</button>
          <Link className={classes.link} to={`/product/${id}`}>
            Details{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
