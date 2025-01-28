// import React, { useContext } from "react";
// import { GlobalContext } from "../context";
// import RecipeItem from "../recipe-item";

// const Favorites = () => {
//   const { favoritesList } = useContext(GlobalContext);

//   return (
//     <div className="py-8 bg-green-200 container mx-auto flex flex-wrap justify-center gap-10">
//       {favoritesList && favoritesList.length > 0 ? (
//         // Display favorite recipes
//         favoritesList.map((item) => (
//           <RecipeItem key={item.idMeal} item={item} />
//         ))
//       ) : (
//         <div>
//           <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
//             No Favorites Added Yet
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Favorites;

import React, { useContext } from "react";
import { GlobalContext } from "../context";
import RecipeItem from "../recipe-item";

const Favorites = () => {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 bg-green-200 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => (
          <RecipeItem key={item.idMeal} item={item} />
        ))
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

export default Favorites;
