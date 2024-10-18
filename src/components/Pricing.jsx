import React from "react";
import { features, pricingOptions } from "../constants";
import { CiCircleCheck } from "react-icons/ci";

// import { CircleCheck } from "lucide-react";
const Pricing = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center mt-16 mb-10">
          Pricing
        </h1>
      </div>
      <div className="flex gap-5 mx-auto md:flex-row flex-col items-center justify-center">
        {pricingOptions.map((pricingOption, index) => {
          return (
            <div
              key={index}
              className="border rounded-2xl p-5 md:p-10  border-neutral-700 w-2/4 md:w-1/3 md:h-1/3 lg:w-1/4 :h-[550px] flex flex-col gap-8 items-start"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl">
                {pricingOption.title}
                {pricingOption.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text text-base md:text-xl lg:text-xl">
                    {"  "}
                    (Most Popular)
                  </span>
                )}
              </h2>
              <h1 className="text-5xl md:text-5xl lg:text-5xl">
                {pricingOption.price}
                <span className="text-neutral-500 text-base md:text-xl lg:text-xl">
                  {" "}
                  /Month
                </span>
              </h1>
              <ul className="">
                {pricingOption.features.map((feature, index) => {
                  return (
                    <li key={index} className="flex flex-row gap-4">
                      <CiCircleCheck className="size-7" />
                      <span className="sm:text-base md:text-sm lg:text-xl mb-4">
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <button className="text-2xl border rounded-lg mt-20 border-orange-900 inline-flex items-center justify-center text-center w-full h-12 p-5 hover:bg-orange-900 transition duration-300">
                Subscribe
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
