// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./navbar";
// import Home from "./home";
// import Favorites from "./favorites";
// import Details from "./details";

// const Application = () => {
//   return (
//     <div>
//       {/* Wrapper div to set the overall layout and styling */}
//       <div className="min-h-screen p-6 bg-white text-grey-600 text-lg">
//         {/* Navbar component for navigation */}
//         <Navbar />
//         {/* Route definitions for different paths */}
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* Home page */}
//           <Route path="/favorites" element={<Favorites />} />{" "}
//           {/* Favorites page */}
//           <Route path="/recipe-item/:id" element={<Details />} />{" "}
//           {/* Recipe details page */}
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Application;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Favorites from "./favorites";
import Details from "./details";

const RecipeApplication = () => {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-grey-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default RecipeApplication;
