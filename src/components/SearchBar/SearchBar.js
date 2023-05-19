import { useState } from "react";
import "./SearchBar.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
function SearchBar() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        axios
          .get(`http://localhost:8000/products?search=${value}`)
          .then((response) => {
            setProducts(response.data.results);
          })
          .catch((error) => console.error(error));
      }, 1000)
    );
  };

  return (
    <div className="relative">
      <div className=" inset-y-0 right-0 flex items-center pr-2">
        <input
          type="text"
          className="w-64 h-10 mr-8 px-3 py-2 text-sm text-gray-900 placeholder-gray-500 bg-white rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition duration-300 ease-in-out"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      {products?.length > 0 && (
        <div className=" z-10 absolute left-0 top-12 w-full bg-white border border-gray-300 rounded-b-lg shadow">
          {products.map((product) => (
            <div key={product.id} className="px-4 py-2 hover:bg-gray-100">
              <Link
                to={`/product/${product.id}`}
                className="text-gray-900 font-medium"
              >
                {product.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
