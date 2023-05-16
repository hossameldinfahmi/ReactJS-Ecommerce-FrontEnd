import { Link } from "react-router-dom";
import promoImage from "../../../assets/images/Products/promo.png";

export default function BannarSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-100 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              Don't miss out
              <br />
              On special offers
            </h2>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Exclusive combos, and discount codes. Don't miss out on our newest
              arrivals and special offers
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                to="/products"
                className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Go To Products
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src={promoImage}
              alt="App screenshot"
              width={431}
              style={{ width: "431px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
