import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <div className="sticky top-0 backdrop-blur-lg border-b border-neutral-700/80">
      <nav className="p-3 pl-10 pr-10 flex flex-row justify-between items-center">
        <div className="flex items-center gap-3">
          <img className="w-12 h-14" src={logo} alt="" />
          <h3 className="text-2xl font-semibold">VirtualR</h3>
        </div>
        <div className="hidden lg:flex lg:gap-10">
          <a href="">Features</a>
          <a href="">Workflow</a>
          <a href="">Pricing</a>
          <a href="">Testimonials</a>
        </div>
        <div className="hidden lg:flex lg:gap-5">
          <button className="bg-transparent text-white border-2 rounded-lg p-2">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-orange-500 to-orange-800 text-slate-200 p-2 font-normal rounded-lg">
            Create an account
          </button>
        </div>
        <div className="lg:hidden md:flex md:flex-col justify-end">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {mobileDrawerOpen && (
        <div className="w-full flex lg:hidden flex-col gap-5 justify-center items-center">
          <a href="">Features</a>
          <a href="">Workflow</a>
          <a href="">Pricing</a>
          <a href="">Testimonials</a>
          <div className="space-x-20 flex flex-row pl-4 pr-4">
            <button className="bg-transparent text-white border-2 rounded-lg p-2">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-orange-800 text-slate-200 p-2 font-normal rounded-lg">
              Create an account
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
