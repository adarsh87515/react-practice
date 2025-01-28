import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { addToCart, removeFromCart } from "../Redux/slices/cart-slice";

const ItemDetails = () => {
  const [ItemDetailsData, setItemDetailsData] = useState(null);
  const {cart} = useSelector(state=>state);
  const dispatch = useDispatch()
  
  const { id } = useParams();

  console.log("params:", id);

  useEffect(() => {
    async function getItemDetails() {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();

      if (data) {
        setItemDetailsData(data);
      }
      console.log(ItemDetailsData, data);
    }

    getItemDetails();
  }, []);


      function handleAddToCart()
      {
        dispatch(addToCart(ItemDetailsData))
      }

      function handleRemoveFromCart()
      {
        dispatch(removeFromCart(ItemDetailsData));
      }


 


  return (
    <div>
      <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="row-start-2 lg:row-start-auto">
          <div className="h-96 overflow-hidden rounded-xl group ">
            <img
              src={ItemDetailsData?.image}
              alt="recipe_image"
              className="w-full  object-cover  group-hover:scale-105 duration-300"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-sm text-cyan-700 font-medium">
            Item Name - {ItemDetailsData?.title}
          </div>
          <div className="text-sm text-cyan-700 font-medium">
            Description- {ItemDetailsData?.description}
          </div>

          <div>
            <button
              onClick={cart.findIndex((item) => item.id === ItemDetailsData?.id) ===
                -1? handleAddToCart:handleRemoveFromCart }
              className="text-sm mt-5 p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white  "
            >
              {cart.findIndex((item) => item.id === ItemDetailsData?.id) !==
              -1
                ? "Remove Form Cart"
                : "Add to Cart"}
            </button>
          </div>

          <div>
            <Link
              to={"/cart"}
              className="text-sm mt-5 p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white  "
            >
              Go To Cart
            </Link>
          </div>

          <div>
            <Link
              to={"/"}
              className="text-sm mt-5 p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white  "
            >
              Go To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
