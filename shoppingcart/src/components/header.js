import React from "react";
import { Link } from "react-router-dom";
import cart from "../assets/images/cart.png";
const header = () => {
  return (
    <header className="flex justify-between items-center mb-5">
      <Link to="/" className="text-xl font-semibold">
        Home.
      </Link>
      <div className="w-1- h-10 bg-gray-100 rounded-full flex justify-center items-center relative">
        <img src={cart} alt="" className="w-6"></img>
        <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center ">
          0
        </span>
      </div>
    </header>
  );
};

export default header;
