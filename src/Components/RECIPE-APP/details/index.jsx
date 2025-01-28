// import React, { useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { GlobalContext } from "../context";

// const Details = () => {
//   const { id } = useParams(); // Get recipe ID from URL
//   const {
//     recipeDetailsData,
//     setRecipeDetailsData,
//     handleFavoritesList,
//     favoritesList,
//   } = useContext(GlobalContext);

//   useEffect(() => {
//     async function getRecipeDetails() {
//       // Fetch recipe details by ID
//       const response = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
//       );
//       const data = await response.json();

//       if (data?.meals) {
//         setRecipeDetailsData(data.meals[0]); // Update recipe details state
//       }
//     }

//     getRecipeDetails();
//   }, [id]); // Re-fetch when ID changes

//   return (
//     <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
//       {/* Recipe image */}
//       <div className="row-start-2 lg:row-start-auto">
//         <div className="h-96 overflow-hidden rounded-xl group">
//           <img
//             src={recipeDetailsData?.strMealThumb}
//             alt="recipe_image"
//             className="w-full h-full object-cover block group-hover:scale-105 duration-300"
//           />
//         </div>
//       </div>
//       {/* Recipe details */}
//       <div className="flex flex-col gap-3">
//         <div className="text-sm text-cyan-700 font-medium">
//           Item Name - {recipeDetailsData?.strMeal}
//         </div>
//         <div className="text-sm text-cyan-700 font-medium">
//           Youtube - {recipeDetailsData?.strYoutube}
//         </div>
//         <div>
//           {/* Toggle favorites */}
//           <button
//             onClick={() => handleFavoritesList(recipeDetailsData)}
//             className="text-sm mt-5 p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
//           >
//             {favoritesList.findIndex(
//               (item) => item.idMeal === recipeDetailsData?.idMeal
//             ) !== -1
//               ? "Remove From Favorites"
//               : "Add to Favorites"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;

import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context";

const Details = () => {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleFavoritesList,
    favoritesList,
  } = useContext(GlobalContext);
  console.log("params:", id);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();

      if (data?.meals) {
        setRecipeDetailsData(data.meals[0]);
      }
      console.log(data.meals, recipeDetailsData);
    }

    getRecipeDetails();
  }, []);

  console.log("mealId: ", recipeDetailsData?.idMeal);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group ">
          <img
            src={recipeDetailsData?.strMealThumb}
            alt="recipe_image"
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-sm text-cyan-700 font-medium">
          Item Name - {recipeDetailsData?.strMeal}
        </div>
        <div className="text-sm text-cyan-700 font-medium">
          Youtube - {recipeDetailsData?.strYoutube}
        </div>

        <div>
          <button
            onClick={() => handleFavoritesList(recipeDetailsData)}
            className="text-sm mt-5 p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white  "
          >
            {favoritesList.findIndex(
              (item) => item.idMeal === recipeDetailsData?.idMeal
            ) !== -1
              ? "Remove Form Favorites"
              : "Add to Favorites"}
          </button>
        </div>
        {/* <div>
          <span>Ingridient</span>
          <ul>
            {recipeDetailsData?.meals?.ingridients.map((ingridient) => (
              <li>
                <span>
                  {ingridient.quantity} {ingridient.unit}{" "}
                </span>
                <span>{ingridient.description}</span>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Details;
