import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const SingleProduct = () =>{

    const {id} = useParams();
    
    const products = useSelector((state)=> state.products.items)
    const oneProduct = products.find((product)=> product.id === parseInt(id))

return (
    <>
        <div> 
            <img src={oneProduct.image} alt="product"></img>
        </div>
        <h3>{oneProduct.name}</h3>
        <h3>{oneProduct.description}</h3>
        <h3>{oneProduct.category.name}</h3>
        <h3>{parseFloat(oneProduct.price)}</h3>
    </>

)
}

export default SingleProduct