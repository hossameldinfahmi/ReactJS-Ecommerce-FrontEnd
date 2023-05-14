import { asycnWrapper } from "../../utils/libs";
import { orderActions } from "./order-slice";

const accessToken = localStorage.getItem('token');

export const checkout = () => {
    return async (dispatch) => {
        const orderCheckout = async () => {
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
        if (error) return console.log(error.message);
        window.location.href = data.url

    }
}
