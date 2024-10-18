import React from "react";
import { testimonials } from "../constants";
const Testimonials = () => {
  return (
    <div className="mt-20 mb-20">
      <h1 className="text-4xl md:text-6xl w-3/6 text-center mx-auto">
        What people are saying{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          about VirtualR
        </span>
      </h1>
      <div className="flex flex-wrap justify-center w-4/5 mx-auto gap-10 mt-20">
        {testimonials.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-10 sm:w-1/2 w-full border border-neutral-800 lg:w-1/4 rounded-md bg-neutral-900 p-4"
            >
              <div>{item.text}</div>
              <div className="flex gap-6 items-center">
                <div>
                  <img
                    className="w-14 h-14 border border-white rounded-full"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div>
                  <h4>{item.user}</h4>
                  <p className="text-neutral-500 italic font-normal">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
