import { cartActions } from "./cart-slice";
import { asycnWrapper } from "../../utils/libs";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

let accessToken = localStorage.getItem("token");
let user_id = accessToken ? jwtDecode(accessToken).user_id : "";

export const fetchCartItems = () => {
  accessToken = localStorage.getItem("token");
  user_id = accessToken ? jwtDecode(accessToken).user_id : "";
  return async (dispatch) => {
    const fetchData = async () => {
      console.log(user_id);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_API_URL}/cart/cart/${user_id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Could not fetch carts from DB");
      }

      const data = await response.json();
      return data;
    };
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
    if (error) {
      return toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    dispatch(
      cartActions.getCartItems({
        items: data.cart_items || [],
      })
    );
  };
};

export const deleteCartItem = (id) => {
  return async (dispatch) => {
    const deleteFromCar = async (id) => {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_API_URL}/cart/delete-cart-item/${id}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Could not delete item from cart");
      }
    };

    // eslint-disable-next-line no-unused-vars
    const [error, data] = await asycnWrapper(deleteFromCar(id));
    if (error) {
      return toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    dispatch(cartActions.deleteFromCart({ id }));
    toast.success("Deleted Successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
};

export const updateQuantityItem = (cartId, productID, action) => {
  return async (dispatch) => {
    const updateQuantity = async (cartId, productID, action) => {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_API_URL}/cart/update-cart/${cartId}/`,
        {
          method: "PUT",
          body: JSON.stringify({
            product: productID,
            action,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Could not update Quantity Item");
      }
      const data = await response.json();
      return data;
    };

    // eslint-disable-next-line no-unused-vars
    const [error, data] = await asycnWrapper(
      updateQuantity(cartId, productID, action)
    );
    if (error){
      return toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    dispatch(
      cartActions.updateQuantity({
        id: data.product,
        quantity: data.quantity,
      })
    );
    toast.success("Quantity updated Successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
};

export const addItemToCart = (product) => {
  return async (dispatch) => {
    const addTocart = async (product) => {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_API_URL}/cart/add-to-cart/`,
        {
          method: "POST",
          body: JSON.stringify({
            product: product.id,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Could not Add item To cart");
      }

      const data = await response.json();
      return data;
    };

    const [error, data] = await asycnWrapper(addTocart(product));
    if (error) 
    {
      return toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    dispatch(
      cartActions.addTocart({
        id: data.id,
        product,
        quantity: data.quantity,
      })
    );
      toast.success("Add Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    
  };
};
