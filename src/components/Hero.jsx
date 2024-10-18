import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center  gap-10 mt-20">
      <div className="text-4xl md:text-6xl lg:text-7xl w-3/5 text-center">
        CyberVibe build tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </div>
      <div className="text-center text-gray-400 text-base md:text-xl mx-4">
        <p>
          Empower your creativity and bring your VR app ideas to life with our
          inituitive development tools.
        </p>

        <p>
          Get started today and turn your imagination into immersive reality!
        </p>
      </div>
      <div className="flex flex-row gap-5 w-3/5 items-center justify-center">
        <button
          className="bg-gradient-to-r from-orange-500
        to-orange-800 p-3 rounded-lg"
        >
          Start for free
        </button>
        <button className="bg-transparent border-2 p-3 rounded-lg">
          Documentation
        </button>
      </div>
      <div className="lg:w-3/5 sm:w-3/4 mx-10 flex flex-row gap-4 mt-10 justify-center">
        <video
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-1 my-4"
          src={video1}
          autoPlay
          loop
          muted
        ></video>
        <video
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-1 my-4"
          src={video2}
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default Hero;
