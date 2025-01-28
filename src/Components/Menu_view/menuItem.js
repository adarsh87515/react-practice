import React, { useState } from "react";
import MenuView from "./MenuView";

const MenuItem = ({ item }) => {
  const [clicked, seclicked] = useState(false);
  console.log("item:", item.children);
  return (
    <div>
      <div className="cursor-pointer " onClick={() => seclicked(!clicked)}>
        {item.label}
        {item.children && (
          <span className="text-gray-500 text-sm">{clicked ? "▲" : "▼"}</span>
        )}
      </div>
      {clicked && item.children && <MenuView menus={item?.children} />}
    </div>
  ); 
};

export default MenuItem;

// import React, { useState } from "react";
// import MenuView from "./MenuView";

// const MenuItem = ({ item }) => {
//   const [clicked, seclicked] = useState(false);
//   return (
//     <div className="p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-100">
//       <div
//         onClick={() => seclicked(!clicked)}
//         className="flex justify-between items-center text-lg font-medium text-gray-800"
//       >
//         {item.label}
//         {item.children && (
//           <span className="text-gray-500 text-sm">
//             {clicked ? "▲" : "▼"}
//           </span>
//         )}
//       </div>
//       {clicked && item.children && (
//         <div className="mt-2 ml-4 border-l-2 border-gray-300 pl-4">
//           <MenuView menus={item.children} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default MenuItem;
