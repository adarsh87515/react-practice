// import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { GlobalContext } from "../context";

// const Navbar = () => {
//   const { searchParam, setSearchParam, submitHandler } =
//     useContext(GlobalContext);

//   return (
//     <div>
//       <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
//         {/* Website title */}
//         <h2 className="text-2xl font-semibold">
//           <NavLink to={"/"}>FoodRecipe</NavLink>
//         </h2>
//         {/* Search input form */}
//         <form onSubmit={submitHandler}>
//           <input
//             type="text"
//             placeholder="Enter text here"
//             name="search"
//             value={searchParam} // Controlled input for search parameter
//             onChange={(e) => setSearchParam(e.target.value)}
//             className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-500"
//           />
//         </form>
//         {/* Navigation links */}
//         <ul className="flex gap-5">
//           <li>
//             <NavLink
//               to={"/"}
//               className="text-black hover:text-gray-700 duration-300"
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to={"/favorites"}
//               className="text-black hover:text-gray-700 duration-300"
//             >
//               Favorites
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";

const Navbar = () => {
  const { searchParam, setSearchParam, submitHandler } =
    useContext(GlobalContext);
  console.log(searchParam);
  return (
    <div>
      <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <h2 className="text-2xl font-semibold">
          <NavLink to={"/"}>FoodRecipe</NavLink>
        </h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter text here"
            name="search"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
            className="bg-white/75 p-3 px-8 rounded-full outline-none  lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-500"
          />
        </form>

        <ul className="flex gap-5">
          <li>
            <NavLink
              to={"/"}
              className="text-black hover:text-gray-700 duration-300 "
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorites"}
              className="text-black hover:text-gray-700 duration-300 "
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
