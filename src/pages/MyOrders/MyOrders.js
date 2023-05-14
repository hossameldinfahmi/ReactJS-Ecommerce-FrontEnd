import React from "react";
import ProductCard from "../../components/ProuductCard/ProuductCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { myorder } from "../../store/orders/order-actions";

function MyOrders() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    else {
      dispatch(myorder());
    }
  }, [dispatch, isLoggedIn, navigate])

  return (
    <>
      <h1 class="mb-4  ml-16 mt-32 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        My Orders
      </h1>
      {
        orders.map(order =>
          <div className="order">
            <div class="rounded-lg shadow-md p-4 mx-16x mt-24 mx-16 bg-gray-100">
              <div class="flex  mb-4">
                <h2 class="text-gray-600 font-semibold pr-2">Status:</h2>
                <p class="text-green-500 font-semibold">{order.status}</p>
              </div>
              <div class="flex  mb-4">
                <h2 class="text-gray-600 font-semibold pr-2">Date:</h2>
                <p class="text-gray-700">{order.date_ordered}</p>
              </div>
              <div class="flex">
                <h2 class="text-gray-600 font-semibold pr-2">Total price:</h2>
                <p class="text-gray-700 font-semibold">{order.total_price}</p>
              </div>
            </div>
            <div className="flex ">
              {order.items.map(item =>
                <ProductCard
                  key={order.id}
                  item={
                    {
                      quantity: item.quantity,
                      price: item.price,
                      name:item.product.name,
                      image:item.product.image
                    }
                  }
                />
              )}
            </div>
          </div>
        )
      }

    </>
  );
}

export default MyOrders;
