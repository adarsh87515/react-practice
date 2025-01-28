import { useEffect, useState } from "react";
import ProductCard from "../productCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalCart, setTotalCart] = useState(0);
  console.log("state: ", cart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex flex-col justify-between">

      <div className="flex flex-col justify-center items-start p-5 space-y-5 mt-14 ">
        <h1 className="font-bold  text-lg text-green-700">Your Cart Summary</h1>
        <p>
          <span className="text-grey-800 font-bold">Total Items</span>
          <span>: {cart.length}</span>
        </p>
        <p>
          <span className="text-grey-800 font-bold">Total price</span>
          <span>: {totalCart}</span>
        </p>
        
        
      </div>

      {cart && cart.length > 0 ? (
        <div>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((card) => (
                <div key={card.id}>
                  <ProductCard card={card} />
                  
                </div>
              ))}
            </div>
          </div>


        </div>
      ) : (
        <div className="min-h-[80vh] text-5xl flex flex-col items-center justify-center ">
          <h1>"Cart Is Empty"</h1>
          <Link
            to={"/"}
            className="text-sm mt-5 p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white  "
          >
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
