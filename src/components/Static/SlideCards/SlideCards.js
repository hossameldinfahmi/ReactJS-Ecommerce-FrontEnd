import React from "react";

function SlideCards() {
  return (
    <div className="h-full bg-white md:bg-white lg:bg-white my-32 ">
      <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl pt-16 text-center">
        Trending
      </h1>
      <div className="container mx-auto px-4 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
          <div className="border-r border-gray-300">
            <div className="py-10 pb-3 mt-16 relative bg-purple-100 group hover:bg-purple-200 cursor-pointer transition ease-out duration-300">
              <div className="w-4 h-1/5 absolute right-0 -top-48 bg-purple-100 group-hover:bg-purple-50"></div>
              <img
                src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F17.fcfa959c.png&w=750&q=75"
                alt="https://www.pngegg.com/en/png-nllal/download"
                className="object-cover w-full h-3/4"
              />
              <div className="px-7 mt-8  pb-4">
                <h1 className="text-3xl font-bold group-hover:text-purple-300 transition ease-out duration-300">
                  01.
                </h1>
                <h2 className="text-1xl mt-4 font-bold">
                  Classic White T-Shirt
                </h2>
                <p className="mt-2 opacity-60 group-hover:opacity-70">
                  This comfortable and versatile t-shirt is perfect wear.
                </p>
              </div>
            </div>
          </div>
          <div className="border-r border-gray-300">
            <div className="py-10 pb-3 mt-16 relative bg-indigo-100 group hover:bg-indigo-200 cursor-pointer transition ease-out duration-300">
              <div className="w-4 h-1/5 absolute right-0 -top-48 bg-indigo-100 group-hover:bg-indigo-50"></div>
              <img
                src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.addcba21.png&w=750&q=75"
                alt="https://www.pngegg.com/en/png-zquqj/download"
                className="object-cover w-full h-3/4"
              />
              <div className="px-7 mt-8  pb-4">
                <h1 className="text-3xl font-bold group-hover:text-indigo-300 transition ease-out duration-300">
                  02.
                </h1>
                <h2 className="text-1xl mt-4 font-bold">
                  {" "}
                  Leather Moto Jacket
                </h2>
                <p className="mt-2 opacity-60 group-hover:opacity-70">
                  This edgy and stylish leather moto jacket is perfect
                </p>
              </div>
            </div>
          </div>
          <div className="border-r border-gray-300">
            <div className="py-10 pb-3 mt-16 relative bg-red-100 group hover:bg-red-200 cursor-pointer transition ease-out duration-300">
              <div className="w-4 h-1/5 absolute right-0 -bottom-44 bg-red-100 group-hover:bg-red-50"></div>
              <img
                src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F16.2c5b70f4.png&w=750&q=75"
                alt="https://www.pngegg.com/en/png-epwii/download"
                className="object-cover w-full h-3/4"
              />
              <div className="px-7 mt-8  pb-4 ">
                <h1 className="text-3xl font-bold group-hover:text-indigo-300 transition ease-out duration-300">
                  03.
                </h1>
                <h2 className="text-1xl mt-4 font-bold"> Cable Knit Sweater</h2>
                <p className="mt-2 opacity-60 group-hover:opacity-70">
                  This warm and comfortable sweater is perfect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideCards;
