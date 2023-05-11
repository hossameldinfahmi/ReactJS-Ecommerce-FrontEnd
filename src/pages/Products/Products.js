import React, { Fragment } from "react";
import { useSelector } from 'react-redux';
import Card from '../../components/UI/card/Card'
import Product from "../../components/Product/Product";

const Products = () => {
    const products = useSelector((state)=> state.products.items)

    return(
    <Fragment>
        <div className="row">
                {
                    products.map((oneProduct)=>{
                        return ( 
                            <Card>
                                    <Product key={oneProduct.id} {...oneProduct}/>
                            </Card> 
                    )})
                }
        </div>
    </Fragment>
)}

export default Products;