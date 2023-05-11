import React, { Fragment } from "react";
import { useSelector } from 'react-redux';
import Card from '../../components/UI/card/Card'
import Product from "../../components/Product/Product";

const Products = () => {
    const products = useSelector((state)=> state.products.items)
    console.log(products)

    return(
    <Fragment>
        <div className="row">
                {
                    products.map((oneProduct)=>{
                        return ( 
                            <Card key={oneProduct.id}>
                                    <Product {...oneProduct}/>
                            </Card> 
                    )})
                }
        </div>
    </Fragment>
)}

export default Products;