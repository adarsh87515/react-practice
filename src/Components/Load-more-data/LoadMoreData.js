import React, { useEffect, useState } from "react";

const LoadMoreData = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function handleLoadMore() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      console.log(data);
      setCount(count + 1);
      setProducts([...products, ...data.products]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={product.images[0]}
                alt="Product_Images"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <p className="text-blue-500 font-bold mt-2">${product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-500 text-lg font-medium">No Data Found</div>
        )}
      </div>

      {/* Load More Button */}
      <button
        onClick={handleLoadMore}
        className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
        disabled={products.length >= 100}
      >
        {products.length >= 100
          ? `You have reached ${products.length} Products`
          : "Load More"}
      </button>
    </div>
  );
};

export default LoadMoreData;

// const [products, setProducts] = useState([]);
// const [count, setCount] = useState(0);

// async function handleLoadMore() {
//   try {
//     const response = await fetch(
//       `https://dummyjson.com/products?limit=20&skip=${
//         count === 0 ? 0 : count * 20
//       }`
//     );
//     const data = await response.json();
//     console.log(data);
//     setCount(count + 1);
//     setProducts([...products, ...data.products]);
//   } catch (error) {
//     console.log(error);
//   }
// }

// useEffect(() => {
//   console.log(products);
// }, [products]);
//   return (
//     <div>
//     {
//         products && products.length >0?

//                 products?.map((product)=>{
//                     return <img
//                         src={product.images[0]}
//                         alt="Product_Images"
//                     />
//                 })

//          :<div> No Data Found</div>
//     }

//       <div onClick={handleLoadMore}>{products.length > 100? "You have reached 100 Products":"Load More"}</div>
//     </div>
//   );
// };
// export default LoadMoreData;
