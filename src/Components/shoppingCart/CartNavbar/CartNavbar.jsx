import React from "react";
import { Link } from "react-router-dom";

const CartNavbar = () => {
  return (
    <div>
      <nav className="flex  items-center justify-between h-20  max-w-6xl  mx-auto ">
        <Link to={"/"}>
          <div className="ml-5 ">
            <h1 className="text-green-700  font-bold  text-xl sm:text-2xl md:text-3xl tracking-wide ">
              Mahesh's Shopping Cart
            </h1>
          </div>
        </Link>

        <ul className="flex items-center space-x-6 text-grey-800 font-semibold ">
          <Link to={"/"}>
            <li className="cursor-pointer ">Home</li>
          </Link>

          <Link to={"/cart"}>
            <li className="cursor-pointer">Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default CartNavbar;
