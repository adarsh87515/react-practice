import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/slices/cart-slice";

const ItemDetails = () => {
  const [ItemDetailsData, setItemDetailsData] = useState(null);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  
  const { id } = useParams();

  useEffect(() => {
    async function getItemDetails() {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();

      if (data) {
        setItemDetailsData(data);
      }
    }

    getItemDetails();
  }, [id]); // Ensure the effect runs when id changes

  function handleAddToCart() {
    dispatch(addToCart(ItemDetailsData));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(ItemDetailsData));
  }

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Image Section */}
      <div className="row-start-2 lg:row-start-auto flex justify-center">
        <div className="h-96 w-full max-w-sm overflow-hidden rounded-xl flex items-center justify-center bg-gray-100">
          <img
            src={ItemDetailsData?.image}
            alt="product"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-3">
        <div className="text-sm text-cyan-700 font-medium">
          <strong>Item Name:</strong> {ItemDetailsData?.title}
        </div>
        <div className="text-sm text-cyan-700 font-medium">
          <strong>Description:</strong> {ItemDetailsData?.description}
        </div>

        {/* Add/Remove from Cart Button */}
        <div>
          <button
            onClick={
              cart.findIndex((item) => item.id === ItemDetailsData?.id) === -1
                ? handleAddToCart
                : handleRemoveFromCart
            }
            className="text-sm mt-5 p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
          >
            {cart.findIndex((item) => item.id === ItemDetailsData?.id) !== -1
              ? "Remove From Cart"
              : "Add to Cart"}
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-4">
          <Link
            to="/cart"
            className="text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider shadow-md bg-black text-white"
          >
            Go To Cart
          </Link>
          <Link
            to="/"
            className="text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider shadow-md bg-black text-white"
          >
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
