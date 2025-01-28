import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ card }) => {
  return (
    <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl ">
      <div className="h-[180px] ">
        <img
          src={card?.image}
          alt={card.title}
          className="object-cover h-full w-full"
        />
      </div>
      <div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {card?.title}
          </h1>
        </div>
        <div>
          <h1 className="w-40 truncate mt-1 text-gray-700 font-bold text-lg">
            Price- {card?.price}$
          </h1>
        </div>
        <div>
          <Link
            to={`/itemDetails/${card.id}`}
            className="text-sm mt-5 p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white  "
          >
            Item Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
