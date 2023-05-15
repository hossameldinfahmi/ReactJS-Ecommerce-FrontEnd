/* eslint-disable no-unused-vars */
import { wishlistActions } from './wishlist-slice';
import { asycnWrapper } from '../../utils/libs';
import jwtDecode from 'jwt-decode';

const accessToken = localStorage.getItem('token');
const user_id = accessToken ? jwtDecode(accessToken).user_id : '';


export const fetchWishlistItems = () => {
    console.log("Fetching wishlist items...");
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_API_URL}/wishlist/user`,
                {
                    headers : {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            if(!response.ok){
                throw new Error('Could not fetch Wishlist from DataBase');
            }

            const data = await response.json();
            console.log(data);
            return data;
        }

        // try {
        //     const data = await fetchData();
        //     console.log(data); 
        //     dispatch(
        //       wishlistActions.getWishlist({
        //         items: data.product_details.results || [],
        //       })
        //     );
        //   } catch (error) {
        //     console.log(error.message);
        //   }
        const [error , data ] = await asycnWrapper(fetchData());
        if(error){
            return console.log(error.message);
        }
        
        dispatch(
            wishlistActions.getWishlist({
                items : data[0].product_details.results || []
            })
        )

    }
}

export const deleteWishlistItem = (id) => {
    return async (dispatch) => {
        const deleteFromWishlist = async(id) => {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_API_URL}/wishlist/product/${id}/`,
                {
                    method : "DELETE",
                    headers: {
                        Authorization : `Bearer ${accessToken}`,
                    },
                }
            );
            if(!response.ok) {
                throw new Error("Could not delete item from wishlist");
            }
        };

        const [error,data] = await asycnWrapper(deleteFromWishlist(id));
        if(error) console.log(error.message);
        dispatch(
            wishlistActions.deleteFromWishlistR({ id })
        );
    };
};

export const addItemToWishlist = (product) => {
    return async (dispatch) => {
        const addToWishlist = async (product) => {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_API_URL}/wishlist/`,
                {
                    method : "POST",
                    body: JSON.stringify({
                        product: product.id
                    }),
                    headers : {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            if(!response.ok) {
                throw new Error('Could not Add item To Wishlist');
            }

            const data = await response.json();
            return data;
        }

        const [error, data] = await asycnWrapper(addToWishlist(product));
        if(error) return console.log(error.message);
        dispatch(wishlistActions.addToWishlistR({ 
            id:data.id,
            product,
        }))
    }
}