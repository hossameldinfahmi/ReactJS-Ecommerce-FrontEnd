import { asycnWrapper } from "../../utils/libs";
import { orderActions } from "./order-slice";
import { toast } from "react-toastify";

export const checkout = () => {
    return async (dispatch) => {
        const orderCheckout = async () => {
            const accessToken = localStorage.getItem('token');
            const response = await fetch(
                `${process.env.REACT_APP_BASE_API_URL}/orders/checkout/`,
                {
                    method:'POST',
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail);
            }
            const data = await response.json()
            return data;
        }


        const [error, data] = await asycnWrapper(orderCheckout());
        if (error) {
            return toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
        window.location.href = data.url

    }
}

export const myorder = () => {
    return async (dispatch) => {
        const fetchOrder = async () => {
            const accessToken = localStorage.getItem('token');
            const response = await fetch(
                `${process.env.REACT_APP_BASE_API_URL}/orders/`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            if (!response.ok) {
                throw new Error('Could not fetch Orders from DB');
            }

            const data = await response.json()
            return data;
        }
        const [error, data] = await asycnWrapper(fetchOrder());
        if (error) return console.log(error.message);
        dispatch(
            orderActions.getUserOrders({
                orders: data || []
            }))
    }
}
