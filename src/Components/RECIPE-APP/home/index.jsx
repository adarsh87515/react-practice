// import React, { useContext } from "react";
// import { GlobalContext } from "../context";
// import RecipeItem from "../recipe-item";

// const Home = () => {
//   const { loading, recipeList } = useContext(GlobalContext);

//   if (loading) {
//     return <div>Loading ...... Please Wait</div>; // Loading state
//   }

//   return (
//     <div className="py-8 bg-green-200 container mx-auto flex flex-wrap justify-center gap-10">
//       {recipeList && recipeList.length > 0 ? (
//         // Display recipe items if available
//         recipeList.map((item) => <RecipeItem key={item.idMeal} item={item} />)
//       ) : (
//         <div>
//           <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
//             Nothing Found for this search
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;

import React, { useContext } from "react";
import { GlobalContext } from "../context";
import RecipeItem from "../recipe-item";

const Home = () => {
  const { loading, recipeList } = useContext(GlobalContext);

  if (loading) {
    return <div>Loading ...... Please Wait</div>;
  }

  return (
    <div className="py-8 bg-green-200 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.idMeal} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing Found for this search
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
