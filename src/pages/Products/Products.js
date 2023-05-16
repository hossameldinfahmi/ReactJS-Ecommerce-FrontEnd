import React, { Fragment } from "react";
import { useSelector } from 'react-redux';
import Card from '../../components/UI/card/Card'
import Product from "../../components/Product/Product";
import ClipLoader from "react-spinners/ClipLoader";

import { fetchProducts } from "../../store/products/products-actions";
import { productActions } from "../../store/products/products-slice";

import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import classes from "./Products.module.css"

const Products = () => {

    const dispatch = useDispatch();

    const allProducts = `${process.env.REACT_APP_BASE_API_URL}/products/`
    
    console.log("Products loaded")

    useEffect(()=>{
        //get url session value first
        const sessionUrl = sessionStorage.getItem('urlValue') || '';

        //check if == null dispach with allProducts url
        if(!sessionUrl){
            dispatch(fetchProducts(allProducts))
            //set its value to allProducts
            sessionStorage.setItem('urlValue', allProducts);
        }else{
            //if not == null, dispacth with its value
            dispatch(fetchProducts(sessionUrl))
        }
            
        


      
    },[allProducts, dispatch])

    const products = useSelector((state)=> state.products.items)
    const isLoading = useSelector((state) => state.products.isLoading)
    const next = useSelector((state) => state.products.next)
    const previous = useSelector((state) => state.products.previous)

    const nextPage = () =>{
        sessionStorage.setItem('urlValue', next);
        dispatch(productActions.replaceProducts({isLoading: true}))
        dispatch(fetchProducts(next))
    }

    const prevPage = () => {
        sessionStorage.setItem('urlValue', previous);
        dispatch(productActions.replaceProducts({isLoading: true}))
        dispatch(fetchProducts(previous))
    }

    console.log(classes.cardAdditional)

    return(
    <Fragment>
        <div>
                {isLoading ? (
                    
                    <ClipLoader color={"#000000"} loading={isLoading} size={75} 
                        aria-label="Loading Spinner" data-testid="loader"/>

                ): (
                    products.map((oneProduct)=>{
                        return ( 
                            <Card className={classes.input} key={oneProduct.id}>
                                    <Product {...oneProduct}/>
                            </Card> 
                    )})
                    )}
                <div>

                    <div class="flex flex-col items-center">
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button disabled={!previous} onClick={prevPage} class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                                Prev
                            </button>
                            <button disabled={!next} onClick={nextPage} class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Next
                                <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>

                </div>
        </div>
    </Fragment>
)}

export default Products;