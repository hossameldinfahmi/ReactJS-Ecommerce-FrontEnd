import React, { Fragment } from "react";
import { useSelector } from 'react-redux';
import Card from '../../components/UI/card/Card'
import Product from "../../components/Product/Product";
import ClipLoader from "react-spinners/ClipLoader";

const Products = () => {
    const products = useSelector((state)=> state.products.items)
    const isLoading = useSelector((state) => state.products.isLoading)

    return(
    <Fragment>
        <div className="row">
                {isLoading ? (
                    
                    <ClipLoader color={"#000000"} loading={isLoading} size={75} 
                        aria-label="Loading Spinner" data-testid="loader"/>
                        
                ): (
                    products.map((oneProduct)=>{
                        return ( 
                            <Card key={oneProduct.id}>
                                    <Product {...oneProduct}/>
                            </Card> 
                    )}

                )      
                )}
        </div>
    </Fragment>
)}

export default Products;