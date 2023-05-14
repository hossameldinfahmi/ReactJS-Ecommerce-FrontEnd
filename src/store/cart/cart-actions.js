import { cartActions } from "./cart-slice";
import { asycnWrapper } from "../../utils/libs";
import jwtDecode from 'jwt-decode';

const accessToken = localStorage.getItem('token');
const user_id = accessToken ? jwtDecode(accessToken).user_id : '';

export const fetchCartItems = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_API_URL}/cart/cart/${user_id}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            if (!response.ok) {
                throw new Error('Could not fetch carts from DB');
            }

            const data = await response.json()
            return data;
        }
        // try {
        //     const cart = await fetchData()
        //     dispatch( 
        // cartActions.getCartItems({
        //             items: cart.products || []
        //         }))
        // }
        // catch(error){
        //     console.log(error.message);
        // }
        const [error, data] = await asycnWrapper(fetchData());
        if (error) return console.log(error.message);
        dispatch(
            cartActions.getCartItems({
                items: data.cart_items || []
            }))
    }
}

export const deleteCartItem = (id) => {
    return async (dispatch) => {
        const deleteFromCar = async (id) => {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_API_URL}/cart/delete-cart-item/${id}/`,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            if (!response.ok) {
                throw new Error('Could not delete item from cart');
            }
        }

        // eslint-disable-next-line no-unused-vars
        const [error, data] = await asycnWrapper(deleteFromCar(id));
        if (error) return console.log(error.message);
        dispatch(cartActions.deleteFromCart({ id }))
    }
}


export const updateQuantityItem = (cartId, productID, action) => {
    return async (dispatch) => {
        const updateQuantity = async (cartId, productID, action) => {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_API_URL}/cart/update-cart/${cartId}/`,
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        product: productID,
                        action,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`
                    }

                }
            );
            if (!response.ok) {
                throw new Error('Could not update Quantity Item');
            }
            const data = await response.json()
            return data;
        }

        // eslint-disable-next-line no-unused-vars
        const [error, data] = await asycnWrapper(updateQuantity(cartId, productID, action));
        if (error) return console.log(error.message);
        dispatch(cartActions.updateQuantity({
            id: data.product,
            quantity: data.quantity
        }))
    }
}

export const addItemToCart = (product) => {
    return async (dispatch) => {
        const addTocart = async (product) => {
            const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}/cart/add-to-cart/`,
                {
                    method:'POST',
                    body:JSON.stringify({
                        product:product.id
                    }),
                    headers:{
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            if (!response.ok) {
                throw new Error('Could not Add item To cart');
            }

            const data = await response.json()
            console.log(data);
            return data;
        }

        const [error, data] = await asycnWrapper(addTocart(product));
        if (error) return console.log(error.message);
        dispatch(cartActions.addTocart({ 
            id:data.id,
            product,
            quantity:data.quantity
        }))
    }
}
