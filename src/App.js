import React, { useState } from "react";

import "./App.css";
import Accordian from "./Components/accordian";
import Weather from "./Components/weatherApp/weather";
import RecipeApplication from "./Components/RECIPE-APP";
import ShoppingCartApp from "./Components/shoppingCart/ShoppingCartApp";
import BlogApp from "./Components/MERN_Blog_App/BlogApp";
import RandomColor from "./Components/random-color/RandomColor";
import StarRating from "./Components/star-rating/StarRating";
import ImageSlider from "./Components/Image-slider/ImageSlider";
import LoadMoreData from "./Components/Load-more-data/LoadMoreData";
import MenuView from "./Components/Menu_view/MenuView";
import menus from "./Components/Menu_view/data";
import QRCodeGenerate from "./Components/QRCodeGenerate/QRCodeGenerate";
import ThemeChange from "./Components/Theme Change/ThemeChange";


function App() {
  
  return (
    <div className="container">
      {/* <Accordian/> */}
      {/* <Weather/> */}
      {/* <RecipeApplication/> */}
      {/* <ShoppingCartApp/> */}
      {/* <BlogApp/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStars={5}/> */}
      {/* <ImageSlider/> */}
      {/* <LoadMoreData/> */}
      {/* <MenuView menus={menus}/> */}
      <QRCodeGenerate/>
      {/* <ThemeChange/> */}
     


    </div>
  );
}

export default App;
