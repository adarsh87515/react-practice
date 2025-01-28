// import React from "react";
// import { Link } from "react-router-dom";

// const RecipeItem = ({ item }) => {
//   return (
//     <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
//       {/* Display recipe thumbnail */}
//       <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
//         <img
//           src={item?.strMealThumb} // Recipe image
//           alt="recipe-item"
//           className="block w-full"
//         />
//       </div>
//       <div>
//         {/* Display recipe name */}
//         <div className="text-sm text-cyan-700 font-medium">
//           Item Name - {item?.strMeal}
//         </div>
//         {/* Display YouTube link */}
//         <div className="text-sm text-cyan-700 font-medium">
//           Youtube - {item?.strYoutube}
//         </div>
//         {/* Link to the recipe details page */}
//         <div>
//           <Link
//             to={`/recipe-item/${item.idMeal}`}
//             className="text-sm mt-5 p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
//           >
//             Recipe Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeItem;

import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 boarder -2 rounded-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img
          src={item?.strMealThumb}
          alt="recipe-item"
          className="block w-full"
        />
      </div>
      <div>
        <div className="text-sm text-cyan-700 font-medium">
          Item Name - {item?.strMeal}
        </div>
        <div className="text-sm text-cyan-700 font-medium">
          Youtube - {item?.strYoutube}
        </div>
        <div>
          <Link
            to={`/recipe-item/${item.idMeal}`}
            className="text-sm mt-5 p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white  "
          >
            Recipe Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
