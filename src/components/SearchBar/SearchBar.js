import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import "./SearchBar.css";

function SearchBar() {
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => setShowInput(true);
  const handleInputChange = (event) => setSearchTerm(event.target.value);
  const handleInputBlur = () => setShowInput(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="rounded-full bg-gray-100 p-1 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-gray-100"
        onClick={handleSearchClick}
      >
        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      {showInput && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <input
            type="text"
            className="w-64 h-10 mr-8 px-3 py-2 text-sm text-gray-900 placeholder-gray-500 bg-white rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition duration-300 ease-in-out"
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        </div>
      )}
    </div>
  );
}

export default SearchBar;
