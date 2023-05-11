import React, { Fragment } from "react";
import Cart from "../../components/Cart/Cart";

const Products = () => {

    return (
        <Fragment>
            <div className=" container mx-auto ">
                <div className="flex justify-between">
                    <Cart />
                    <div className=" container m-10">
                        <h1 className="font-bold">Order Summary</h1>
                        <div class="flex  justify-between p-3 border-b-2 border-gray-300 m-3">
                            <p class="inline-block mr-4">Hashem</p>
                            <span class="inline-block mr-4">Hashem</span>
                        </div>
                        <div class="flex  justify-between p-3 border-b-2 border-gray-300 m-3">
                            <p class="inline-block mr-4">Hashem</p>
                            <span class="inline-block mr-4">Hashem</span>
                        </div>
                        <div class="flex  justify-between p-3 border-b-2 border-gray-300 m-3">
                            <p class="inline-block mr-4">Hashem</p>
                            <span class="inline-block mr-4">Hashem</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Products;