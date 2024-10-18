import React from "react";
import code from "../assets/code.jpg";
import { CiCircleCheck } from "react-icons/ci";
// import { CircleCheck } from "lucide-react";
import { checklistItems } from "../constants";
const Workflow = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl tracking-wide text-center">
          Accelerate your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            coding workflow.
          </span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-5 mx-5">
        <img
          className="md:w-[600px] sm:w-[450px] sm:h-[450px] md:h-[600px]"
          src={code}
          alt=""
        />
        <div>
          {checklistItems.map((item, index) => {
            return (
              <div key={index} className="flex flex-row gap-8">
                <CiCircleCheck className="text-green-500 lg:size-7" />
                <div className="mb-12">
                  <div className=" text-xl lg:text-2xl mb-3">{item.title}</div>
                  <div className="text-gray-400">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
