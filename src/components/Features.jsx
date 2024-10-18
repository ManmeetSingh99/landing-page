import React from "react";
import { features } from "../constants";
const Features = () => {
  return (
    <div className="mt-20 min-h-[800px]" id="features">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" font-normal lg:text-6xl md:text-5xl text-4xl">
          FEATURE
        </h1>
        <div className="border-b border-2 lg:w-72 w-52 border-orange-500"></div>
      </div>
      <div>
        <h1 className=" text-5xl md:text-6xl lg:text-7xl font-normal mt-16 text-center">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h1>
      </div>
      <div className="mt-20 lg:mt-20 flex flex-wrap w-3/4 mx-auto">
        {features.map((feature, index) => {
          return (
            <div
              key={index}
              className="sm:w-1/2 space-x-5 w-full lg:w-[25%] mx-auto lg:mr-10 mb-20"
            >
              <div className="flex flex-row gap-4">
                <div className="text-orange-700 mt-[2px] w-10 h-6 p-2 bg-neutral-900/70 rounded-full">
                  {feature.icon}
                </div>
                <div className="">
                  <h5 className="text-xl mb-2 lg:mb-5">{feature.text}</h5>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
