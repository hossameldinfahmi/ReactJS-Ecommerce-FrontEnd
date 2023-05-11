import React, { Fragment } from "react";
import { useSelector } from 'react-redux';
import Card from '../../components/UI/card/Card'
import Product from "../../components/Product/Product";
import ClipLoader from "react-spinners/ClipLoader";


import { fetchProducts } from "../../store/products/products-actions";

import { useEffect } from "react";
import { useDispatch } from 'react-redux';

const Products = () => {

    const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(fetchProducts())
    },[dispatch])

    const products = useSelector((state)=> state.products.items)
    const isLoading = useSelector((state) => state.products.isLoading)

    return(
    <Fragment>
        <div>
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