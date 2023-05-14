import React from "react";
import { Link } from "react-router-dom";
 

const Product = ({id, category, name, description, price, available_quatity, image}) =>{

  const imageUrl = process.env.REACT_APP_IMGE_API_URL


  return(
    <>
      <img src={imageUrl+image} 
      alt="product"
      />
      <div className="card-body">
        <h3>{name}</h3>
        <h3>{price}</h3>
        <h3>{description}</h3>
        <Link to={`/product/${id}`} className="btn">Details </Link>
      </div>



    </>
  )
  
}

export default Product;
