import React, { Fragment } from "react";
import { useSelector } from 'react-redux';
import Card from '../../components/UI/card/Card'
import Product from "../../components/Product/Product";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

import { fetchProducts, fetchCategories } from "../../store/products/products-actions";
import { productActions } from "../../store/products/products-slice";

import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import classes from "./Products.module.css"

const Products = () => {

    const dispatch = useDispatch();

    const allProducts = `${process.env.REACT_APP_BASE_API_URL}/products/`
    console.log("Products loaded")

    useEffect(() => {
        //get url session value first
        const sessionUrl = sessionStorage.getItem('urlValue') || '';

        //check if == null dispach with allProducts url
        if (!sessionUrl) {
            dispatch(fetchProducts(allProducts))
            //set its value to allProducts
            sessionStorage.setItem('urlValue', allProducts);
        } else {
            //if not == null, dispacth with its value
            dispatch(fetchProducts(sessionUrl))
        }
        // fetch all categories 
        dispatch(fetchCategories())
    }, [allProducts, dispatch])

    const products = useSelector((state) => state.products.items)
    const isLoading = useSelector((state) => state.products.isLoading)
    const next = useSelector((state) => state.products.next)
    const previous = useSelector((state) => state.products.previous)
    const categories = useSelector((state) => state.products.categories)

    console.log(categories)

    const nextPage = () => {
        sessionStorage.setItem('urlValue', next);
        dispatch(productActions.replaceProducts({ isLoading: true }))
        dispatch(fetchProducts(next))
    }

    const prevPage = () => {
        sessionStorage.setItem('urlValue', previous);
        dispatch(productActions.replaceProducts({ isLoading: true }))
        dispatch(fetchProducts(previous))
    }

    const fetchProductsByCategory = (id) => {
        const productsCateory = `${process.env.REACT_APP_BASE_API_URL}/categories/${id}/products`
        dispatch(productActions.replaceProducts({ isLoading: true }))
        dispatch(fetchProducts(productsCateory))
    }

    return (
        <Fragment>

            <div className={classes.header}>
                <h1>Products</h1>
                {/* <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    All Categories
                    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div id="dropdownDelay" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                        {categories.map((category) => {
                            return (
                                <li>
                                    <Link   onClick={()=>fetchProductsByCategory(category.id)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{category.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div> */}

                <ul class="flex flex-wrap text-sm font-medium text-center justify-center text-gray-700 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                {categories.map((category) => {
                            return (
                                <li class="mr-2">
                                    <Link onClick={()=>fetchProductsByCategory(category.id)} className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">{category.name}</Link>
                                </li>
                            )
                        })}
                </ul>

            </div>

            <div className={classes.container}>


                {isLoading ? (

                    <ClipLoader color={"#000000"} loading={isLoading} size={75}
                        aria-label="Loading Spinner" data-testid="loader" />

                ) : (
                    products.map((oneProduct) => {
                        return (
                            <Card className={classes.input} key={oneProduct.id}>
                                <Product {...oneProduct} />
                            </Card>
                        )
                    })
                )}
            </div>
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
        </Fragment>
    )
}

export default Products;