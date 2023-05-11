import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import do


const SingleProduct = () =>{

    const {id} = useParams();
    console.log(`id ${id}`)
    
    const products = useSelector((state)=> state.products.items)
    console.log(`prod ${products}`)
    const oneProduct = products.find((product)=> product.id === parseInt(id))
    console.log(oneProduct)
    const url = process.env.REACT_APP_IMAGE_BASE_URL
    console.log(typeof url)

return (
    <>
        <div> 
            <img src={`${url}${oneProduct.image}`} alt="product"></img>
        </div>
        <h3>{oneProduct.name}</h3>
        <h3>{oneProduct.description}</h3>
        <h3>{oneProduct.category.name}</h3>
        <h3>{parseFloat(oneProduct.price)}</h3>
    </>

)
}

export default SingleProduct