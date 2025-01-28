import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const navigate = useNavigate();

  async function submitHandler(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParam}`
      );
      const Data = await res.json();

      if (Data?.meals) {
        setRecipeList(Data.meals); // Update with fetched recipes
        navigate("/");
      } else {
        setRecipeList([]); // Clear the list if no results are found
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipeList([]); // Handle case where API fails
    } finally {
      setLoading(false); // Stop the loading spinner
      setSearchParam(""); // Reset the search parameter
    }
  }

  function handleFavoritesList(item) {
    let cpyfavoritesList = [...favoritesList];
    let index = cpyfavoritesList.findIndex((fav) => fav.idMeal === item.idMeal);
    if (index === -1) {
      cpyfavoritesList.push(item);
    } else {
      cpyfavoritesList.splice(index, 1);
    }
    setFavoritesList(cpyfavoritesList);
  }

  useEffect(() => {
    console.log("Updated recipeList:", recipeList);
    console.log("Updated favoritesList:", favoritesList);
  }, [recipeList, favoritesList]);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        submitHandler,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        handleFavoritesList,
        favoritesList,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
