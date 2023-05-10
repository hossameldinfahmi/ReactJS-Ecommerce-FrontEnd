import React from "react";
 

const Product = ({id, category, name, description, price, available_quatity, image}) =>{
  return(
    <>
      <img src={image} 
      alt="product"
      />
      <div className="card-body">
        <h3>{name}</h3>
        <h3>{price}</h3>
        <h3>{description}</h3>
      </div>



    </>
  )
  
}

export default Product;
