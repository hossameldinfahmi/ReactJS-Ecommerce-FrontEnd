import React, { Fragment, useEffect } from "react";
import CartItems from "../../components/CartItems/CartItems";
import { useDispatch } from "react-redux";
import { fetchCartItems } from "../../store/cart/cart-actions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CheckOut from "../../components/Checkout/Checkout";
import EmptyList from "../../components/EmptyList/EmptyList";

const Cart = () => {

    const cartItems = useSelector(state => state.cart.items);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    let orderTotal = 0;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
        else{
            dispatch(fetchCartItems());
        }
    }, [dispatch,isLoggedIn, cartItems,navigate])

    return (
        <Fragment>
            {!cartItems.length && <EmptyList list='Cart' /> }
            {cartItems.length && <div className=" container mx-auto py-16 lg:pb-28 lg:pt-20 ">
                <div class="mb-5 sm:mb-15 ">
                    <h2 class="block text-2xl sm:text-3xl lg:text-4xl font-semibold ">Shopping Cart</h2>
                </div>
                <div className="flex justify-between">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg" style={{ width: "90%" }}>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Qty
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => {

                                    orderTotal += item.product.price * item.quantity
                                    return (<CartItems key={item.id} item={item} />)
                                })}
                            </tbody>
                        </table>
                    </div>
                    <CheckOut orderTotal={orderTotal} />
                </div>
            </div>}
        </Fragment>
    )
}

export default Cart;