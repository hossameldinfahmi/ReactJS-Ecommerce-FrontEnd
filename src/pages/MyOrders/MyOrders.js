import React from "react";
import ProductCard from "../../components/ProuductCard/ProuductCard";

function MyOrders() {
  return (
    <>
      <h1 class="mb-4  ml-16 mt-32 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        My Orders
      </h1>

      <div className="order">
        <div class="rounded-lg shadow-md p-4 mx-16x mt-24 mx-16 bg-gray-100">
          <div class="flex  mb-4">
            <h2 class="text-gray-600 font-semibold pr-2">Status:</h2>
            <p class="text-green-500 font-semibold">Shipped</p>
          </div>
          <div class="flex  mb-4">
            <h2 class="text-gray-600 font-semibold pr-2">Date:</h2>
            <p class="text-gray-700">May 14, 2023</p>
          </div>
          <div class="flex">
            <h2 class="text-gray-600 font-semibold pr-2">Total price:</h2>
            <p class="text-gray-700 font-semibold">$100.00</p>
          </div>
        </div>
        <div className="flex justify-between">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
}

export default MyOrders;
