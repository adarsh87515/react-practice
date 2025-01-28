import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductCard from "../productCard";

const CartHome = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchListOfProducts() {
    setLoading(true);
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    setLoading(false);
    if (data) {
      setProducts(data);
      console.log(data);
    } else {
      console.log("no data found");
      setProducts([]);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);
  return (
    <div>
      
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(0,255,0)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3" >
          {products && products.length > 0 ? (
            products.map((card) => (
              <div key={card.id}>
                <ProductCard card={card} />
              </div>
            ))
          ) : (
            <div>"No Cards To Show"</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartHome;
