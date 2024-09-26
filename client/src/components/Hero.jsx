import React from "react";

function Hero() {
  return (
    <>
      <div className="bg-[#E3EDF6] mt-4 ">
        <div className="container max-w-7xl mx-auto grid md:grid-cols-2 py-8">
          <div className="flex items-center p-5">
            <div className="max-w-[450px] space-y-4 ">
              <p className="text-topHeadingPrimary ">
                starting at <span className="font-bold">$1.00</span>
              </p>
              <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
                The Best collections at 2024 - 2025
              </h1>
              <h3 className="text-2xl font-['Oregano',cursive]">
                Exclussive Offer <span className="text-red-600">-50%</span> off
                this week
              </h3>
              <a
                className="inline-block bg-gray-400 rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white"
                href="#"
              >
                Shop Now
              </a>
            </div>
          </div>

          <div>
            <img className="ml-auto " src="/images/sale3.jpg" alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
