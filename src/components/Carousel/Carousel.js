import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./Carousel.css";

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const handlePrevClick = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNextClick = () => {
    setActiveSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full bg-my-blue"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div
        className={`${
          activeSlide === 0 ? "block" : "hidden"
        } duration-700 ease-in-out flex w-100 container mx-auto px-4 items-center`}
        data-carousel-item
      >
        <div className="w-1/2">
          <div className="flex flex-col h-full justify-center">
            <p className="text-gray-600 text-xl mb-3">Paragraph goes here 🔥</p>
            <h2 className="text-6xl font-bold mb-9">
              Exclusive collection for everyone
            </h2>
            <button
              type="button"
              className="flex items-center justify-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-48 h-12"
            >
              Explore Now
              <FaSearch className="ml-2" />
            </button>
          </div>
        </div>
        <div className="w-1/2 mr-4">
          <img
            src="/images/carousel/hero-right-3.png"
            alt="Slider"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>

      <div
        className={`${
          activeSlide === 1 ? "block" : "hidden"
        } duration-700 ease-in-out flex w-100 container mx-auto px-4 items-center`}
        data-carousel-item
      >
        <div className="w-1/2">
          <div className="flex flex-col h-full justify-center">
            <p className="text-gray-600 text-xl mb-3">Paragraph goes here 🔥</p>
            <h2 className="text-6xl font-bold mb-9">
              Exclusive collection for everyone
            </h2>
            <button
              type="button"
              className="flex items-center justify-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-48 h-12"
            >
              Explore Now
              <FaSearch className="ml-2" />
            </button>
          </div>
        </div>
        <div className="w-1/2 mr-4">
          <img
            src="/images/carousel/hero-right-2.png"
            alt="Slider"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>

      <div
        className={`${
          activeSlide === 2 ? "block" : "hidden"
        } duration-700 ease-in-out flex w-100 container mx-auto px-4 items-center`}
        data-carousel-item
      >
        <div className="w-1/2">
          <div className="flex flex-col h-full justify-center">
            <p className="text-gray-600 text-xl mb-3">Paragraph goes here 🔥</p>
            <h2 className="text-6xl font-bold mb-9">
              Exclusive collection for everyone
            </h2>
            <button
              type="button"
              className="flex items-center justify-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-48 h-12"
            >
              Explore Now
              <FaSearch className="ml-2" />
            </button>
          </div>
        </div>
        <div className="w-1/2 mr-4">
          <img
            src="/images/carousel/hero-right.png"
            alt="Slider"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button
          type="button"
          className={`w-16 h-1  ${activeSlide === 0 ? "bg-black" : "bg-white"}`}
          aria-current={activeSlide === 0}
          aria-label="Slide 1"
          data-carousel-slide-to="0"
          onClick={() => setActiveSlide(0)}
        ></button>
        <button
          type="button"
          className={`w-16 h-1  ${activeSlide === 1 ? "bg-black" : "bg-white"}`}
          aria-current={activeSlide === 1}
          aria-label="Slide 2"
          data-carousel-slide-to="1"
          onClick={() => setActiveSlide(1)}
        ></button>
        <button
          type="button"
          className={`w-16 h-1  ${activeSlide === 2 ? "bg-black" : "bg-white"}`}
          aria-current={activeSlide === 2}
          aria-label="Slide 3"
          data-carousel-slide-to="2"
          onClick={() => setActiveSlide(2)}
        ></button>
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrevClick}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextClick}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default Carousel;
